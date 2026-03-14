export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-semibold text-slate-950">Contact</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Engage AfriBridge for customs clearing, freight execution, compliance support, and enterprise logistics planning.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Get in touch</h2>
          <div className="mt-5 grid gap-3 text-slate-600">
            <p>Email: info@afribridge.example</p>
            <p>Phone: +260 000 000 000</p>
            <p>Hours: Mon–Fri, 08:00–17:00</p>
          </div>
        </div>

        <form className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Your name" />
          <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Email address" />
          <textarea className="min-h-40 rounded-xl border border-slate-300 px-4 py-3" placeholder="How can we help?" />
          <button className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 md:w-fit">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
