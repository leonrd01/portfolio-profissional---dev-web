import { motion } from "motion/react";
import { Layout, Code, Database, Smartphone, Palette, Zap } from "lucide-react";

const services = [
  {
    title: "Criação de Sites Responsivos",
    description: "Desenvolvimento de sites que se adaptam perfeitamente a qualquer dispositivo, garantindo a melhor experiência para o usuário.",
    icon: Layout,
  },
  {
    title: "Desenvolvimento Front-end",
    description: "Interfaces modernas e interativas utilizando as tecnologias mais recentes como React, Next.js e Tailwind CSS e IA para otimizar o desenvolvimento",
    icon: Code,
  },
  {
    title: "Desenvolvimento Back-end",
    description: "Criação de APIs robustas, escaláveis e seguras com Node.js, Express e integração com bancos de dados com os serviços da Firebase.",
    icon: Database,
  },
  {
    title: "Desenvolvimento Mobile",
    description: "Aplicativos nativos e híbridos para iOS e Android com foco em performance e usabilidade.",
    icon: Smartphone,
  },
  {
    title: "Design de Interfaces (UI/UX)",
    description: "Prototipagem e design de interfaces focadas no usuário, unindo estética e funcionalidade.",
    icon: Palette,
  },
  {
    title: "Otimização de Performance",
    description: "Melhoria da velocidade de carregamento e performance geral de aplicações web e mobile.",
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-bg-card/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-brand font-bold uppercase tracking-widest text-sm mb-4 block">Serviços</span>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8 leading-tight">
            O QUE EU <span className="text-brand">FAÇO</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-10 rounded-3xl hover:border-brand/30 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-8 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
