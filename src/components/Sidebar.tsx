import { motion } from "motion/react";
import { Home, User, Briefcase, FileText, Mail, Github, Linkedin, Instagram } from "lucide-react";

const navItems = [
  { name: "Início", href: "#home", icon: Home },
  { name: "Sobre mim", href: "#about", icon: User },
  { name: "O que eu faço", href: "#services", icon: Briefcase },
  { name: "Resumo", href: "#summary", icon: FileText },
  { name: "Contato", href: "#contact", icon: Mail },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-bg-card border-r border-white/5 hidden lg:flex flex-col z-50">
      <div className="p-8">
        <h1 className="text-2xl font-display font-bold tracking-tighter">
          DEV<span className="text-brand">.</span>LEO
        </h1>
      </div>

      <nav className="flex-1 px-4 py-8">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-4 px-4 py-3 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all group"
              >
                <item.icon
                  size={20}
                  className="group-hover:text-brand transition-colors"
                />
                <span className="font-medium">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-8 border-t border-white/5">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/leonrd01"
            className="text-white/40 hover:text-brand transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="www.linkedin.com/in/leonardopinh0"
            className="text-white/40 hover:text-brand transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/dev.leonrd/"
            className="text-white/40 hover:text-brand transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </aside>
  );
}
