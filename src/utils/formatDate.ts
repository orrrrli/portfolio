const RELATIVE_LABELS: Record<string, Record<string, string>> = {
  en: { y: "y ago", mo: "mo ago", d: "d ago", h: "h ago", m: "m ago", now: "just now" },
  es: { y: "hace %n a", mo: "hace %n mes", d: "hace %n d", h: "hace %n h", m: "hace %n min", now: "ahora mismo" },
};

const LOCALE_MAP: Record<string, string> = { en: "en-US", es: "es-MX" };

export function formatDate(date: string, includeRelative = false, lang = "en") {
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);
  const timeDifference = currentDate.getTime() - targetDate.getTime();
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));

  const labels = RELATIVE_LABELS[lang] ?? RELATIVE_LABELS.en;
  const rel = (n: number, key: string) => labels[key].replace("%n", String(n));

  let formattedDate = "";

  if (daysAgo >= 365) {
    formattedDate = rel(Math.floor(daysAgo / 365), "y");
  } else if (daysAgo >= 30) {
    formattedDate = rel(Math.floor(daysAgo / 30), "mo");
  } else if (daysAgo > 0) {
    formattedDate = rel(daysAgo, "d");
  } else if (hoursAgo > 0) {
    formattedDate = rel(hoursAgo, "h");
  } else if (minutesAgo > 0) {
    formattedDate = rel(minutesAgo, "m");
  } else {
    formattedDate = labels.now;
  }

  const fullDate = targetDate.toLocaleString(LOCALE_MAP[lang] ?? "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
