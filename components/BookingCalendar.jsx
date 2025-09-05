// components/BookingCalendar.jsx
import { useEffect, useState } from "react";

/**
 * Stable, responsive shell for the GoHighLevel Booking widget.
 * - Gives the iframe a guaranteed height (prevents "short" mode).
 * - Forces a client-side re-render once (key) so the GHL script reliably hooks.
 */
export default function BookingCalendar() {
  const [key, setKey] = useState(0);
  useEffect(() => setKey(Date.now()), []);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <iframe
        key={key}
        src="https://api.leadconnectorhq.com/widget/booking/moLbhpNSHi4Hd4YxkCLP"
        title="Booking Calendar"
        // Critical: block + full width + real height to avoid collapsed/short view
        className="block w-full border-0"
        style={{
          height: "1000px",        // default height; adjust if needed
          overflow: "hidden",
        }}
        loading="lazy"
        scrolling="no"
        id="moLbhpNSHi4Hd4YxkCLP_1757012671380"
      />
      {/* Keep the embed script so GHL can enhance/resize internally */}
      <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript" async></script>
    </div>
  );
}
