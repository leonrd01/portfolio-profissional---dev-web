import { motion } from "motion/react";
import { ArrowDown, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop")',
          filter: 'brightness(0.2) contrast(1.1)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent via-bg-dark/50 to-bg-dark" />

      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-semibold tracking-wider uppercase mb-6 border border-brand/20">
            Disponível para novos projetos
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter mb-6 leading-[0.9]">
            LEONARDO <span className="text-brand">PINHO</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-white/60 font-medium mb-10 max-w-2xl mx-auto">
            Desenvolvedor Web Full-Stack especializado em interfaces modernas e experiências digitais de alto impacto.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact"
              className="group relative px-8 py-4 bg-brand hover:bg-brand-dark text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,77,0,0.3)] hover:shadow-[0_0_30px_rgba(255,77,0,0.5)]"
            >
              Contate-me
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#summary"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300"
            >
              Ver Projetos
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-white/40 hover:text-brand transition-colors group">
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
          <ArrowDown size={20} className="animate-bounce group-hover:text-brand" />
        </a>
      </motion.div>
    </section>
  );
}
