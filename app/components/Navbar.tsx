import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b backdrop-blur-lg bg-background/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          AuditAI
        </h1>

        <div className="flex items-center gap-4">
          <a href="#audit">
            Audit
          </a>

          <a href="#features">
            Features
          </a>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}