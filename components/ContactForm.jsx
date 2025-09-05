// components/ContactForm.jsx
import { useEffect, useState } from "react";

/**
 * Stable, responsive shell for the GoHighLevel Contact Form.
 * - Enforces a default height so it never renders short.
 * - Forces a client-side re-render so the GHL script reliably attaches.
 */
export default function ContactForm() {
  const [key, setKey] = useState(0);
  useEffect(() => setKey(Date.now()), []);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <iframe
        key={key}
        src="https://api.leadconnectorhq.com/widget/form/bOg3QMtZ6E519uGw8PTO"
        title="Contact Us Form"
        className="block w-full border-0"
        style={{
          height: "1100px",        // use your data-height baseline (was ~1055)
          borderRadius: "12px",
        }}
        id="inline-bOg3QMtZ6E519uGw8PTO"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact Us Form"
        data-height="1100"
        data-layout-iframe-id="inline-bOg3QMtZ6E519uGw8PTO"
        data-form-id="bOg3QMtZ6E519uGw8PTO"
      />
      <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript" async></script>
    </div>
  );
}
