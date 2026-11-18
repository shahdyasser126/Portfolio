import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  ["about", "About"], ["experience", "Experience"], ["projects", "Projects"], ["skills", "Skills"], ["contact", "Contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={close}>shahd<span>.</span></a>
        <div className="desktop-nav">{links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
        <a className="nav-cta" href="mailto:shahdyasser1289@gmail.com">Let's talk <span>↗</span></a>
        <button className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && <motion.div className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22 }}>
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={close}>{label}<span>↗</span></a>)}
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}