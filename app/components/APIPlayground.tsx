import { useState } from "react";

type PathParam = { key: string; value: string };
type APIResponse = { status?: number; data?: unknown; error?: string };

type Props = {
  url?: string;
  initialPath?: PathParam[];
};

// Fills ":key" segments of the URL with the param values.
function resolveUrl(url: string, path: PathParam[]) {
  return path.reduce(
    (acc, p) => (p.key && p.value ? acc.replace(new RegExp(`:${p.key}(?=/|$)`), encodeURIComponent(p.value)) : acc),
    url,
  );
}

async function sendGet(url: string): Promise<APIResponse> {
  const res = await fetch(url, { method: "GET" });
  const isJson = (res.headers.get("content-type") ?? "").includes("application/json");
  return { status: res.status, data: isJson ? await res.json() : await res.text() };
}

/** GET-only request runner used inside MDX posts. */
export function APIPlayground({ url: initialUrl = "", initialPath = [] }: Props) {
  const [url, setUrl] = useState(initialUrl);
  const [path, setPath] = useState(initialPath);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<APIResponse | null>(null);

  const canSend = url.trim() !== "" && !loading;

  const handleSend = async () => {
    if (!canSend) return;
    setLoading(true);
    setResponse(null);
    try {
      setResponse(await sendGet(resolveUrl(url, path)));
    } catch (err) {
      setResponse({ error: err instanceof Error ? err.message : String(err) });
    } finally {
      setLoading(false);
    }
  };

  const request = { url, method: "GET", ...(path.length ? { path } : {}) };

  return (
    <div className="playground">
      <div className="pg-row">
        <span className="pg-method mono">GET</span>
        <input
          className="pg-input mono"
          aria-label="URL"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      {path.length > 0 && (
        <div className="pg-params">
          <p className="pg-label mono">Path</p>
          {path.map((param) => (
            <div key={param.key} className="pg-row">
              <input className="pg-input mono" value={param.key} disabled aria-label="Path key" />
              <input
                className="pg-input mono"
                placeholder="Value"
                aria-label={`${param.key} value`}
                value={param.value}
                onChange={(e) =>
                  setPath((prev) => prev.map((p) => (p.key === param.key ? { ...p, value: e.target.value } : p)))
                }
              />
            </div>
          ))}
        </div>
      )}

      <div className="pg-actions">
        <button type="button" className="pg-send mono" disabled={!canSend} onClick={handleSend}>
          {loading ? "Sending…" : "Send Request"}
        </button>
      </div>

      <div className="pg-panels">
        <div className="pg-panel">
          <p className="pg-label mono">Request</p>
          <pre>{JSON.stringify(request, null, 2)}</pre>
        </div>

        {response && (
          <div className="pg-panel" aria-live="polite">
            <p className="pg-label mono">
              Response
              {response.status !== undefined && (
                <span className={response.status < 400 ? "pg-ok" : "pg-bad"}> {response.status}</span>
              )}
            </p>
            <pre className={response.error ? "pg-bad" : undefined}>
              {response.error ?? JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
