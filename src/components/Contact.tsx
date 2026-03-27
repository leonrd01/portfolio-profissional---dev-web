import { motion } from "motion/react";
import { Mail, Phone, Instagram, Linkedin, Github, Send } from "lucide-react";
import fotoPerfill from "../images/FotoPerfil.jpeg"





export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24 bg-bg-card/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="mb-12">
              <span className="text-brand font-bold uppercase tracking-widest text-sm mb-4 block">
                Contato
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8 leading-tight">
                VAMOS <br /> CONVERSAR <span className="text-brand">?</span>
              </h2>
              <div className="w-24 h-1.5 bg-brand rounded-full mb-12" />
            </div>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <span className="text-white/40 text-sm uppercase font-bold tracking-widest block mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:dev.leonrd@outlook.com"
                    className="text-white font-medium text-xl hover:text-brand transition-colors"
                  >
                    dev.leonrd@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <span className="text-white/40 text-sm uppercase font-bold tracking-widest block mb-1">
                    WhatsApp
                  </span>
                  <a
                    href="https://wa.me/5571985263512"
                    className="text-white font-medium text-xl hover:text-brand transition-colors"
                  >
                    +55 (71) 98526-3512
                  </a>
                </div>
              </div>

              <div className="pt-8 flex items-center gap-6">
                <a
                  href="https://www.linkedin.com/in/leonardopinh0/"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-brand hover:text-white transition-all duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/leonrd01"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-brand hover:text-white transition-all duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.instagram.com/dev.leonrd/"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-brand hover:text-white transition-all duration-300"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full flex flex-col items-center lg:items-center text-center"
          >
            <div className="rounded-full p-2 bg-white/5 border border-white/10">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-bg-dark/80 p-2">
                <img
                  src={fotoPerfill}
                  alt="Foto de perfil"
                  className="w-full h-full rounded-full object-cover border-4 border-white/10"
                />
              </div>
            </div>
            <p className="mt-6 text-2xl md:text-3xl font-display font-bold text-white">
              Leonardo Pinho dos Santos
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
