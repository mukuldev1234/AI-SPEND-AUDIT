export default function Hero() {
  return (
    <section className="py-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="inline-block px-4 py-2 rounded-full border mb-6 bg-white/5">
          Save thousands on AI
          subscriptions
        </div>

        <h1 className="text-6xl font-bold leading-tight">
          Stop Overpaying For
          AI Tools
        </h1>

        <p className="mt-6 text-xl text-muted-foreground">
          Audit your AI spend
          instantly and discover
          smarter pricing,
          alternatives, and
          hidden savings.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#audit"
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground"
          >
            Run Free Audit
          </a>

          <button className="px-8 py-4 rounded-xl border">
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
}