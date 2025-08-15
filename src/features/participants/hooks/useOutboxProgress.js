import { useEffect, useMemo, useRef, useState } from "react";


/**
 * Polls /api/outbox/progress/:projectId[?runId=...]
 * Returns the raw API + convenient derived fields for the UI.
 */
export default function useOutboxProgress(projectId, { intervalMs = 4000, runId } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const timer = useRef(null);

  const fetchOnce = async (signal) => {
    if (!projectId) return;
    try {
      setLoading(true);
      setErr(null);
      const url =
        `${process.env.REACT_APP_API_URL}/api/outbox/progress/${encodeURIComponent(projectId)}` +
        (runId ? `?runId=${encodeURIComponent(runId)}` : "");
      const res = await fetch(url, { signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setData(json);
    } catch (e) {
      if (e.name !== "AbortError") {
        console.error("outbox/progress error:", e);
        setErr(e);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const ctrl = new AbortController();
    fetchOnce(ctrl.signal);
    timer.current = setInterval(() => fetchOnce(ctrl.signal), intervalMs);
    return () => {
      ctrl.abort();
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId, runId, intervalMs]);

  // Derived helpers for the UI
  const derived = useMemo(() => {
    const s = data?.summary || {};
    const phases = data?.phases || {};
    const phaseOrder = ["households", "participants", "attendance"];
    const niceName = {
      households: "Households",
      participants: "Participants",
      attendance: "Attendance",
    };

    const phaseList = phaseOrder.map((k) => ({
      key: k,
      name: niceName[k],
      ...phases[k],
    }));

    return {
      isSyncing: Boolean(s.isSyncing),
      overallPercent: typeof s.percent === "number" ? s.percent : null,
      totals: {
        total: s.total ?? 0,
        sent: s.sent ?? 0,
        failed: s.failed ?? 0,
        leftToSend: s.leftToSend ?? 0,
      },
      run: data?.run || null,
      failedRows: data?.failed || [],
      phaseList,
      raw: data,
    };
  }, [data]);

  return {
    loading,
    error: err,
    ...derived,
    refetch: () => fetchOnce(), // convenience
  };
}
