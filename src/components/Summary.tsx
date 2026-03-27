import { motion } from "motion/react";
import { ExternalLink, Github, Code2, Layers, Cpu, Globe } from "lucide-react";
import logo from "../images/logo.png";
import logoGestor from "../images/Logo_Gestor.png"
import fotoTaba from "../images/FotoTaba.png"

const projects = [
  {
    title: "PeriffApp",
    description:
      "O objetivo é facilitar o encontro entre clientes e falar de serviços de comunidades periféricas, promovendo oportunidades e valorizando o empreendedorismo local.",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "Node.js",
      "Firebase Authentication",
      "Firebase Firestore",
      "Firebase Hosting",
    ],
    image: logo,
    link: "https://periff-app.web.app/",
    github: "https://github.com/PeriffApp/PeriffApp",
  },
  {
    title: "Gestor de nota escolares",
    description:
      "Um aplicativo web para gerenciamento de notas escolares, com autenticação, gerenciamento de turmas, aulas, lançamento de notas e geração de relatórios em PDF.",
    tech: [
      "Firebase Studio IA",
      "React",
      "Firebase Auth",
      "Firebase Firestore",
      "Vite",
      "Tailwind CSS",
      "Typescript",
    ],
    image: logoGestor,
    link: "https://projetoes-14c61.web.app/",
    github: "https://github.com/leonrd01/gestor-de-notas-escolares",
  },
  {
    title: "Tabacaria Online / Site E-commerce",
    description:
      "E-commerce desenvolvido com Next.js para apresentação e navegação de produtos, com foco em uma experiência visual moderna, responsiva e organizada.",
    tech: [
      "Firebase Studio IA",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Hosting",
      "Firebase Firestore",
      "Lucid React",
    ],
    image: fotoTaba,
    link: "https://brisaf-fab37.web.app",
    github: "https://github.com/leonrd01/BrisaFuertOfc",
  },
];

const technologies = [
  { name: "Google Studio IA", icon: Cpu },
  { name: "React", icon: Code2 },
  { name: "Node.js", icon: Cpu },
  { name: "TypeScript", icon: Globe },
  { name: "Next.js", icon: Layers },
  { name: "Tailwind CSS", icon: Code2 },
  { name: "Firebase", icon: Cpu },
  { name: "Vite", icon: Globe },
];

export default function Summary() {
  return (
    <section
      id="summary"
      className="py-24 px-6 md:px-12 lg:px-24 bg-bg-dark relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <div className="mb-16">
            <span className="text-brand font-bold uppercase tracking-widest text-sm mb-4 block">
              Portfólio
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8 leading-tight">
              MEUS <span className="text-brand">PROJETOS</span>
            </h2>
            <div className="w-24 h-1.5 bg-brand rounded-full mb-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card rounded-3xl overflow-hidden group border border-white/5 hover:border-brand/30 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-bg-dark/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity duration-500 flex items-center justify-center gap-4">
                    <a
                      href={project.link}
                      className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center hover:bg-brand-dark transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.title === "Tabacaria Online / Site E-commerce" && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest border border-brand/30 mb-4">
                      Em desenvolvimento
                    </span>
                  )}
                  {project.title === "PeriffApp" && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest border border-brand/30 mb-4">
                      Em Manuntenção
                    </span>
                  )}
                  <p className="text-white/60 mb-8 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-white/5 text-white/40 text-xs font-bold uppercase tracking-widest border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-16">
            <span className="text-brand font-bold uppercase tracking-widest text-sm mb-4 block">
              Stack
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8 leading-tight">
              TECNOLOGIAS <span className="text-brand">QUE USO</span>
            </h2>
            <div className="w-24 h-1.5 bg-brand rounded-full mb-12" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-brand/30 hover:bg-brand/5 transition-all duration-300 group"
              >
                <tech.icon
                  size={32}
                  className="text-white/20 group-hover:text-brand transition-colors duration-300"
                />
                <span className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
