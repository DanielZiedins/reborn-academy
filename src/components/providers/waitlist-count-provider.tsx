"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type WaitlistCountContextValue = {
  count: number | null;
  loading: boolean;
  refresh: () => Promise<void>;
};

const WaitlistCountContext = createContext<WaitlistCountContextValue>({
  count: null,
  loading: true,
  refresh: async () => {},
});

export function WaitlistCountProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/waitlist/count");
      const data = await res.json();
      if (data.ok && typeof data.count === "number") setCount(data.count);
    } catch {
      /* keep last known */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/waitlist/count");
        const data = await res.json();
        if (!cancelled && data.ok && typeof data.count === "number") setCount(data.count);
      } catch {
        if (!cancelled) setCount(0);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    const id = setInterval(() => {
      if (!cancelled) void refresh();
    }, 90_000);

    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [refresh]);

  const value = useMemo(
    () => ({ count, loading, refresh }),
    [count, loading, refresh],
  );

  return (
    <WaitlistCountContext.Provider value={value}>{children}</WaitlistCountContext.Provider>
  );
}

export function useWaitlistCount() {
  return useContext(WaitlistCountContext);
}
