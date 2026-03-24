import { motion } from "motion/react";
import { User, Mail, MapPin, Calendar } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="mb-12">
              <span className="text-brand font-bold uppercase tracking-widest text-sm mb-4 block">Sobre mim</span>
              <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8 leading-tight">
                UM POUCO <br /> SOBRE <span className="text-brand">MIM</span>
              </h2>
              <div className="w-24 h-1.5 bg-brand rounded-full mb-12" />
            </div>

            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                Olá! Sou o Leonardo, um desenvolvedor apaixonado por transformar ideias complexas em experiências digitais intuitivas e elegantes. Com mais de 3 anos de experiência no mercado, foco em criar soluções que não apenas funcionam, mas que encantam os usuários.
              </p>
              <p>
                Minha jornada começou com a curiosidade de entender como a web funciona, e hoje me especializo em tecnologias modernas como React, Node.js e ecossistemas mobile. Acredito que o código é uma forma de arte e cada projeto é uma oportunidade de inovação.
              </p>
              <p>
                Quando não estou codando, gosto de explorar novas tecnologias, contribuir para projetos open source e compartilhar conhecimento com a comunidade.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-brand/10 transition-colors duration-500" />
              
              <h3 className="text-2xl font-display font-bold mb-10 border-b border-white/10 pb-6">Informações Pessoais</h3>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand group-hover/item:bg-brand group-hover/item:text-white transition-all duration-300">
                    <User size={24} />
                  </div>
                  <div>
                    <span className="text-white/40 text-sm uppercase font-bold tracking-widest block mb-1">Nome</span>
                    <span className="text-white font-medium text-lg">Leonardo Pinho</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand group-hover/item:bg-brand group-hover/item:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="text-white/40 text-sm uppercase font-bold tracking-widest block mb-1">Email</span>
                    <span className="text-white font-medium text-lg">dev.leonrd@outlook.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand group-hover/item:bg-brand group-hover/item:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="text-white/40 text-sm uppercase font-bold tracking-widest block mb-1">Localização</span>
                    <span className="text-white font-medium text-lg">Salvador - BA</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand group-hover/item:bg-brand group-hover/item:text-white transition-all duration-300">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <span className="text-white/40 text-sm uppercase font-bold tracking-widest block mb-1">Experiência</span>
                    <span className="text-white font-medium text-lg">3+ Anos</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
