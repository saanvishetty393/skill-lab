import Navbar from "@/Navbar";

const socials = ["LinkedIn", "Instagram", "Dribbble"];
const stats = [
  { value: "02+", label: "Years Experience" },
  { value: "20+", label: "Projects" },
  { value: "30+", label: "Happy Clients" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 md:p-7">
      <section className="flex min-h-[620px] w-full max-w-[900px] flex-col rounded-2xl bg-[var(--bg)] px-10 pb-8 pt-12 shadow-2xl">
        <Navbar />

        {/* Hero */}
        <div className="grid flex-1 items-center gap-10 py-10 md:grid-cols-2">
          <div className="pl-2 md:pt-16">
            <h1 className="text-6xl font-normal leading-none tracking-tight text-[var(--text)] md:text-[56px]">
              UI/UX <span className="text-[var(--orange)]">designer</span>
            </h1>
            <p className="mt-6 max-w-sm text-[13px] leading-7 text-[var(--muted)]">
              I create meaningful digital experiences through clean, modern and
              user-friendly designs.
            </p>
            <div className="mt-7 flex gap-3">
              <a
                href="#work"
                className="rounded-sm bg-[var(--orange)] px-5 py-2.5 text-[12px] font-semibold text-white transition hover:brightness-110"
              >
                View My Work
              </a>
              <a
                href="/cv.pdf"
                className="rounded-sm border border-white/20 px-5 py-2.5 text-[12px] text-[var(--muted)] transition hover:border-white/50"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Portrait with soft glow */}
          <div className="relative flex justify-center md:justify-end md:pr-10">
            <div className="absolute right-0 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#4a3530]/40 blur-3xl" />
            <div className="relative h-[350px] w-[230px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Portrait"
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--bg)] to-transparent" />
            </div>
          </div>
        </div>

        {/* Footer row */}
        <footer className="flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-5">
          <div className="flex items-center gap-5 text-[10px]">
            <span className="text-[var(--muted)]">Follow me</span>
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                className="font-bold text-[var(--pink)] hover:underline"
              >
                {s}
              </a>
            ))}
          </div>

          <div className="flex gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-[17px] text-[var(--pink)]">{s.value}</div>
                <div className="text-[9px] text-[var(--muted)]">{s.label}</div>
              </div>
            ))}
          </div>
        </footer>
      </section>
    </main>
  );
}
