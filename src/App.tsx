import { motion, useScroll, useSpring } from "motion/react";
import { ArrowRight, CheckCircle2, ChevronRight, Globe, Search, ShieldCheck, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";

const NAV_LINKS = [
  { name: "The Gap", href: "#what-i-solve" },
  { name: "The Audit", href: "#audit" },
  { name: "Insights", href: "#insights" },
  { name: "About", href: "#about" },
];

const ISHOLA_IMAGE = "https://i.postimg.cc/YqVqgf7f/1000287157.png";

const Section = ({ children, id, className = "", light = false }: any) => (
  <section id={id} className={`py-24 md:py-40 px-6 ${light ? 'bg-black/40' : 'bg-brand-bg'} border-b border-white/5 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

const Button = ({ children, variant = 'primary', className = "", href }: any) => {
  const base = "inline-flex items-center justify-center px-8 py-4 font-bold text-xs uppercase tracking-[0.2em]";
  const variants: any = {
    primary: "bg-white text-black",
    secondary: "border border-white/20 text-white",
  };

  return href ? (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>{children}</a>
  ) : (
    <button className={`${base} ${variants[variant]} ${className}`}>{children}</button>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white bg-black">
      
      {/* NAV */}
      <header className="fixed top-0 w-full z-40 p-6 flex justify-between">
        <h1 className="font-bold">ISHOLA OLUWASEYI DAVID</h1>
        <div className="flex gap-6">
          {NAV_LINKS.map(l => <a key={l.name} href={l.href}>{l.name}</a>)}
        </div>
      </header>

      <main className="pt-32 px-6">

        {/* HERO */}
        <section className="max-w-5xl mx-auto mb-32">
          <h1 className="text-6xl font-bold mb-6 uppercase">
            AI Search Optimization Specialist
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Traditional SEO helps you rank. AI Search Optimization helps AI trust and recommend you.
          </p>
        </section>

        {/* WHAT I SOLVE */}
        <Section id="what-i-solve">
          <h2 className="text-4xl font-bold mb-6">
            Your Brand Might Be Invisible to AI
          </h2>
          <ul className="space-y-4 text-gray-400">
            <li>Not recommended by AI</li>
            <li>No strong entity signals</li>
            <li>Weak trust across web</li>
          </ul>
        </Section>

        {/* ARTICLE SECTION (🔥 IMPORTANT) */}
        <section id="ai-search-optimization" className="py-32 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            What is AI Search Optimization?
          </h1>

          <p className="mb-4 text-gray-400">
            AI Search Optimization (AIEO) is the process of making a brand discoverable, understandable, and recommendable by AI systems like ChatGPT, Claude, Gemini, and Perplexity.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-2">
            Why Traditional SEO Is Not Enough
          </h2>
          <p className="text-gray-400">
            Traditional SEO helps websites rank on Google, but AI generates answers—not rankings.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-2">
            How AI Decides
          </h2>
          <ul className="list-disc pl-6 text-gray-400">
            <li>Entity authority</li>
            <li>Trust signals</li>
            <li>Content clarity</li>
          </ul>

          <p className="mt-8 font-bold">
            Written by Ishola Oluwaseyi David, AI Search Optimization Specialist.
          </p>
        </section>

      </main>

      <footer className="p-10 text-gray-500 text-sm">
        © 2026 Ishola Oluwaseyi David
      </footer>
    </div>
  );
}
