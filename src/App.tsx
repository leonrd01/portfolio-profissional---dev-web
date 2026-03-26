/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "./firebaseConfig";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Summary from "./components/Summary";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const hasLoggedRef = useRef(false);

  useEffect(() => {
    if (hasLoggedRef.current) return;
    hasLoggedRef.current = true;

    logEvent(analytics, "page_view", {
      page_path: window.location.pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, []);

  return (
    <div className="flex min-h-screen bg-bg-dark text-white selection:bg-brand selection:text-white">
      {/* Navigation */}
      <Sidebar />
      <MobileNav />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 w-full">
        <Hero />
        <About />
        <Services />
        <Summary />
        <Contact />
        
        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5 bg-bg-card/30 text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-display font-bold tracking-tighter mb-4">
              DEV<span className="text-brand">.</span>LEO
            </h2>
            <p className="text-white/40 text-sm font-medium">
              © {new Date().getFullYear()} Leonardo Pinho dos Santos. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>

      {/* Floating Actions */}
      <WhatsAppButton />
    </div>
  );
}
