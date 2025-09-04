// components/AnnouncementBar.jsx
export default function AnnouncementBar() {
  return (
    <div className="w-full bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-400/20">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-6 py-2 text-xs font-medium">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
        <span>Setup fee waived if you start this week.</span>
        <a href="#start" className="underline decoration-cyan-400/60 underline-offset-4 hover:decoration-cyan-300">
          Start Quickstart →
        </a>
      </div>
    </div>
  );
}
