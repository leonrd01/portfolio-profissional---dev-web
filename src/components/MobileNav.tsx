import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Home, User, Briefcase, FileText, Mail } from "lucide-react";

const navItems = [
  { name: "Início", href: "#home", icon: Home },
  { name: "Sobre mim", href: "#about", icon: User },
  { name: "O que eu faço", href: "#services", icon: Briefcase },
  { name: "Resumo", href: "#summary", icon: FileText },
  { name: "Contato", href: "#contact", icon: Mail },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-bg-card/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 z-50 lg:hidden">
      <h1 className="text-xl font-display font-bold tracking-tighter">
        DEV<span className="text-brand">.</span>LEO
      </h1>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white/80 hover:text-brand transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-bg-card border-b border-white/5 py-8 px-6 shadow-2xl"
          >
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 px-4 py-3 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all"
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
