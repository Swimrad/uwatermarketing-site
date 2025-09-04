// components/ContactForm.jsx
import React from "react";

export default function ContactForm() {
  return (
    <div className="relative w-full min-h-[1100px]">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/bOg3QMtZ6E519uGw8PTO"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "6px",
          minHeight: "1055px",
        }}
        id="inline-bOg3QMtZ6E519uGw8PTO"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name="Contact Us Form"
        data-height="1055"
        data-layout-iframe-id="inline-bOg3QMtZ6E519uGw8PTO"
        data-form-id="bOg3QMtZ6E519uGw8PTO"
        title="Contact Us Form"
      />
      <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
    </div>
  );
}
