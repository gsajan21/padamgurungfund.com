import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/members", label: "Members" },
  { to: "/donors", label: "Donors" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
      <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <NavLink to="/" className="font-extrabold tracking-tight">Padam Gurung Fund</NavLink>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm ${isActive ? 'text-sky-600 font-semibold' : 'text-slate-700 hover:text-slate-900'}`
              }
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
