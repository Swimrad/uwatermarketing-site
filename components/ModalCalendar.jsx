export default function ModalCalendar({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-3xl rounded-2xl bg-white p-4 shadow-2xl">
        <button aria-label="Close" onClick={onClose} className="absolute right-3 top-3 rounded-full border px-3 py-1 text-sm hover:bg-gray-50">Close</button>
        <div className="mt-6">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/moLbhpNSHi4Hd4YxkCLP"
            style={{ width: "100%", border: "none", overflow: "hidden", height: 720 }}
            scrolling="no"
            id="moLbhpNSHi4Hd4YxkCLP_1756838233028"
            title="Book a Call"
          />
          <br />
          <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
        </div>
      </div>
    </div>
  );
}
