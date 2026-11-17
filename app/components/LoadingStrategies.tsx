import { useState } from "react";
import { useContent } from "../content";

type Strategy = "eager" | "lazy" | "explicit";

const STRATEGIES: Strategy[] = ["eager", "lazy", "explicit"];

const CODE: Record<Strategy, string> = {
  eager: `var blogs = await db.Blogs
    .Include(b => b.Posts)
    .ToListAsync();

foreach (var blog in blogs)
    Console.WriteLine(blog.Posts.Count);`,
  lazy: `// UseLazyLoadingProxies() + virtual Posts
var blogs = await db.Blogs.ToListAsync();

foreach (var blog in blogs)
    Console.WriteLine(blog.Posts.Count); // query per blog`,
  explicit: `var blogs = await db.Blogs.ToListAsync();

foreach (var blog in blogs.Where(b => selected.Contains(b.Id)))
    await db.Entry(blog)
        .Collection(b => b.Posts)
        .LoadAsync();`,
};

const BLOGS_SQL = `SELECT b."Id", b."Name" FROM "Blogs" AS b`;
const JOIN_SQL = `SELECT b."Id", b."Name", p."Id", p."Title", p."BlogId" FROM "Blogs" AS b LEFT JOIN "Posts" AS p ON b."Id" = p."BlogId" ORDER BY b."Id"`;
const postsSql = (id: number) => `SELECT p."Id", p."Title", p."BlogId" FROM "Posts" AS p WHERE p."BlogId" = @__p_0 -- ${id}`;

const LABELS = {
  en: {
    strategy: "Strategy",
    blogs: "Blogs in the table",
    pick: "Blogs whose posts you load",
    code: "C#",
    sql: "SQL sent to the database",
    trips: "round trips",
    notes: {
      eager: "One query with a JOIN. Every post comes back up front, whether you use it or not.",
      lazy: "One query for the blogs, then one more every time the loop touches blog.Posts. That's the N+1.",
      explicit: "Same shape as lazy, but you decide which blogs get their posts. Click a blog to load it.",
    },
  },
  es: {
    strategy: "Estrategia",
    blogs: "Blogs en la tabla",
    pick: "Blogs cuyos posts cargas",
    code: "C#",
    sql: "SQL que llega a la base de datos",
    trips: "round trips",
    notes: {
      eager: "Una sola query con JOIN. Todos los posts llegan de una vez, los uses o no.",
      lazy: "Una query para los blogs y otra cada vez que el loop toca blog.Posts. Eso es el N+1.",
      explicit: "La misma forma que lazy, pero tú decides qué blogs cargan sus posts. Da click en un blog para cargarlo.",
    },
  },
};

function queriesFor(strategy: Strategy, ids: number[], selected: Set<number>) {
  if (strategy === "eager") return [JOIN_SQL];
  const loaded = strategy === "lazy" ? ids : ids.filter((id) => selected.has(id));
  return [BLOGS_SQL, ...loaded.map(postsSql)];
}

/** Simulates the SQL EF Core sends for each related-data loading strategy. */
export function LoadingStrategies() {
  const { lang } = useContent();
  const t = LABELS[lang];
  const [strategy, setStrategy] = useState<Strategy>("lazy");
  const [count, setCount] = useState(5);
  const [selected, setSelected] = useState<Set<number>>(() => new Set([1]));

  const ids = Array.from({ length: count }, (_, i) => i + 1);
  const queries = queriesFor(strategy, ids, selected);

  const toggle = (id: number) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (!next.delete(id)) next.add(id);
      return next;
    });

  return (
    <div className="ls">
      <div>
        <p className="ls-label mono">{t.strategy}</p>
        <ul className="ls-tabs">
          {STRATEGIES.map((s) => (
            <li key={s}>
              <button type="button" className="ls-tab mono" aria-pressed={s === strategy} onClick={() => setStrategy(s)}>
                {s[0].toUpperCase() + s.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <label className="ls-range mono">
        {t.blogs}
        <input type="range" min={1} max={10} value={count} onChange={(e) => setCount(Number(e.target.value))} />
        <span>{count}</span>
      </label>

      {strategy === "explicit" && (
        <div>
          <p className="ls-label mono">{t.pick}</p>
          <ul className="ls-blogs">
            {ids.map((id) => (
              <li key={id}>
                <button
                  type="button"
                  className="ls-blog mono"
                  aria-pressed={selected.has(id)}
                  onClick={() => toggle(id)}
                >
                  Blog {id}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="ls-note">{t.notes[strategy]}</p>

      <div>
        <p className="ls-label mono">{t.code}</p>
        <pre>
          <code>{CODE[strategy]}</code>
        </pre>
      </div>

      <div>
        <p className="ls-label mono">{t.sql}</p>
        <ol className="ls-queries">
          {queries.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ol>
      </div>

      <p className="ls-count" aria-live="polite">
        <strong>{queries.length}</strong> {t.trips}
      </p>
    </div>
  );
}
