import { Button } from "./ui/Button";
export default function StickyCTA({ show, onOpen }) {
  if (!show) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40">
      <div className="mx-auto max-w-3xl rounded-t-2xl bg-brand-blue px-6 py-4 text-white shadow-2xl flex items-center justify-between">
        <span className="font-heading">Need help? Book a call.</span>
        <Button onClick={onOpen}>Book a Call</Button>
      </div>
    </div>
  );
}
