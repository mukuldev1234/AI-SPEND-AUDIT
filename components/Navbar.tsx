export default function Navbar() {
  return (
    <header className="border-b border-white/10 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black tracking-tight">
            AuditAI
          </h1>

          <p className="text-xs text-gray-400">
            AI Spend Optimizer
          </p>
        </div>

        <button className="gradient px-5 py-2 rounded-xl font-medium">
          Start Audit
        </button>
      </div>
    </header>
  );
}