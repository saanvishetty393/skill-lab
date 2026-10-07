import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link
        href="/"
        className="text-[13px] font-bold tracking-[0.25em] text-[#b5a4f0]"
      >
        PORTFOLIO
      </Link>

      <ul className="hidden gap-8 text-[13px] text-[#cfc8c3] md:flex">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="transition hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#contact"
        className="rounded-md border border-white bg-[#b5a4f0] px-5 py-2 text-[13px] font-semibold text-white outline-offset-2 transition hover:brightness-110"
      >
        Hire me
      </Link>
    </nav>
  );
}
