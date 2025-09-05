// components/AnnouncementBar.jsx
import { useEffect, useState } from "react";

/**
 * Single, dismissible announcement bar.
 * If you see two bars on the site, it means you're rendering the bar twice somewhere.
 * We will only render it once in _app.js.
 */
export default function AnnouncementBar() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const v = localStorage.getItem("uwm.annc.closed");
    if (v === "1") setOpen(false);
  }, []);

  if (!open) return null;

  return (
    <div className="w-full border-b border-emerald-400/20 bg-emerald-500/10 text-emerald-200 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs">
        <div className="truncate">
          <strong className="font-semibold text-emerald-200">This week only:</strong>
          <span className="ml-2 text-emerald-100/90"> $1,000 setup fee waived · Go-live in 72h</span>
        </div>
        <button
          aria-label="Dismiss announcement"
          className="rounded px-2 py-1 text-emerald-200/80 hover:text-emerald-50"
          onClick={() => {
            if (typeof window !== "undefined") {
              localStorage.setItem("uwm.annc.closed", "1");
            }
            setOpen(false);
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
