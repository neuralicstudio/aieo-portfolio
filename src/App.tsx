// (imports unchanged)
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowRight, CheckCircle2, ChevronRight, Globe, Search, ShieldCheck, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";

/* --- EVERYTHING ABOVE REMAINS SAME --- */

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen text-white bg-brand-bg">

      {/* KEEP ALL YOUR EXISTING SECTIONS ABOVE */}

      <main>
        {/* ALL YOUR CURRENT SECTIONS (UNCHANGED) */}

        {/* 🔥 NEW SECTION — AI ARTICLE (ADDED CLEANLY) */}
        <section id="ai-search-optimization" className="py-32 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-10 uppercase tracking-tight">
              What is AI Search Optimization?
            </h2>

            <p className="text-white/60 mb-6 text-lg">
              AI Search Optimization (AIEO) is the process of making a brand discoverable, understandable, and recommendable by AI systems like ChatGPT, Claude, Gemini, and Perplexity.
            </p>

            <p className="text-white/60 mb-10 text-lg">
              Unlike traditional SEO, which focuses on ranking in search engines, AI Search Optimization focuses on whether AI systems trust your brand enough to recommend it.
            </p>

            <h3 className="text-2xl font-bold mt-12 mb-4">Why Traditional SEO Is Not Enough</h3>
            <p className="text-white/50 mb-4">
              Traditional SEO helps websites rank on Google, but AI systems generate answers—not rankings.
            </p>

            <ul className="list-disc pl-6 text-white/50 space-y-2 mb-10">
              <li>Clearly defined entity</li>
              <li>Trusted signals across the web</li>
              <li>Structured content AI can extract</li>
            </ul>

            <h3 className="text-2xl font-bold mt-12 mb-4">How AI Systems Decide What to Recommend</h3>
            <ul className="list-disc pl-6 text-white/50 space-y-2 mb-10">
              <li>Entity authority</li>
              <li>Third-party validation</li>
              <li>Content structure</li>
              <li>Consistency across the web</li>
            </ul>

            <h3 className="text-2xl font-bold mt-12 mb-4">Final Thought</h3>
            <p className="text-white/60 mb-6">
              The future of discovery is shifting from search to AI.
            </p>

            <p className="text-white font-bold text-xl mb-10">
              Does AI trust you enough to recommend you?
            </p>

            <p className="text-white/40 text-sm">
              Written by Ishola Oluwaseyi David, AI Search Optimization Specialist.
            </p>
          </div>
        </section>

      </main>

      {/* KEEP YOUR FOOTER EXACTLY AS IS */}

    </div>
  );
}
