import { motion, useScroll, useSpring } from "motion/react";
import { ArrowRight, CheckCircle2, ChevronRight, Globe, Search, ShieldCheck, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- Types & Constants ---

const NAV_LINKS = [
  { name: "The Gap", href: "#what-i-solve" },
  { name: "The Audit", href: "#audit" },
  { name: "Insights", href: "#insights" },
  { name: "About", href: "#about" },
];

const ISHOLA_IMAGE = "https://i.ibb.co/2Yqk24b5/1000287157.png";

// --- Components ---

const Section = ({ 
  children, 
  id, 
  className = "", 
  light = false 
}: { 
  children: React.ReactNode; 
  id?: string; 
  className?: string; 
  light?: boolean;
}) => (
  <section 
    id={id} 
    className={`py-24 md:py-40 px-6 ${light ? 'bg-black/40' : 'bg-brand-bg'} border-b border-white/5 ${className}`}
  >
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = "",
  href
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline'; 
  className?: string;
  href?: string;
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 active:scale-95";
  const variants = {
    primary: "bg-white text-black hover:bg-brand-accent hover:text-white",
    secondary: "bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5",
    outline: "bg-transparent text-brand-accent border border-brand-accent hover:bg-brand-accent hover:text-white"
  };

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Tag = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.3em] text-white/50 mb-6 ${className}`}>
    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
    {children}
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.15 }
  };

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white font-sans text-brand-ink bg-brand-bg overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-brand-accent z-50 origin-[0%]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 border-b ${
          isScrolled 
            ? "bg-brand-bg/95 backdrop-blur-xl py-4 border-white/10" 
            : "bg-transparent py-8 border-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-40 leading-none mb-1">AIE Specialist</span>
            <a href="#" className="font-display font-bold text-xl tracking-tighter hover:text-brand-accent transition-colors">
              ISHOLA OLUWASEYI DAVID
            </a>
          </div>
          
          <div className="hidden lg:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/50 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-6">
             <span className="text-[10px] font-bold tracking-[0.25em] uppercase opacity-30">NeuralicAI</span>
             <Button href="mailto:neuralicstudio@gmail.com" variant="secondary" className="px-5 py-2.5 text-[9px] border-white/10">
                Contact Me
             </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-48 pb-24 md:pt-64 md:pb-40 px-6 min-h-screen flex items-center bg-[radial-gradient(circle_at_20%_30%,_#1a1a1a_0%,_transparent_50%)]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Tag>Principal Consultant & AI Engineer</Tag>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter mb-10 text-balance uppercase">
                AI Search<br />
                Optimization<br />
                Specialist
              </h1>
              
              <div className="max-w-2xl">
                <p className="text-xl md:text-2xl text-brand-accent font-medium mb-10 leading-snug text-balance">
                  Traditional SEO helps you rank on search engines. AI Search Optimization helps AI trust your brand enough to recommend it.
                </p>

                <div className="space-y-6 mb-12 text-white/50 text-lg leading-relaxed border-l border-white/10 pl-8">
                  <p>In a world where customers ask AI before they ask Google, visibility alone is no longer enough—recommendability is the new competitive advantage.</p>
                  <p className="italic font-serif text-white/80 text-xl">"If AI does not trust your brand, it will not recommend it."</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Button href="mailto:neuralicstudio@gmail.com" variant="primary" className="px-10 py-5">
                    Book an AI Visibility Audit
                  </Button>
                  <Button href="mailto:neuralicstudio@gmail.com" variant="secondary" className="px-10 py-5 border-white/10">
                    Work With Me
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-white/5 group-hover:bg-brand-accent/20 transition-colors duration-700 blur"></div>
                <div className="relative aspect-[3/4] overflow-hidden grayscale contrast-125 brightness-75">
                  <img 
                    src={ISHOLA_IMAGE} 
                    alt="Ishola Oluwaseyi David" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-80 pointer-events-none"></div>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-2">NeuralicAI Founder</p>
                  <p className="text-lg font-serif italic text-white/90">Bridging the gap between technical search systems and business recommendability.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHAT I SOLVE */}
        <Section id="what-i-solve" light>
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div 
              {...fadeIn}
              className="lg:col-span-5"
            >
              <Tag>The Discovery Gap</Tag>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[0.9] uppercase tracking-tighter">
                Your Brand Might Be Invisible to AI — Even If You Rank on Google
              </h2>
              <div className="space-y-8 text-xl text-white/60 leading-relaxed font-light">
                <p>Most businesses today are still optimizing for search engines.</p>
                <p>But your customers are no longer just searching—they are asking AI.</p>
                <p className="font-bold text-white uppercase tracking-tight text-2xl">And when they do, your brand may not appear at all.</p>
              </div>
            </motion.div>

            <motion.div 
              {...stagger}
              className="lg:col-span-7 space-y-px bg-white/5 border border-white/10"
            >
              {[
                "Your business ranks on Google, but AI tools rarely mention or recommend you",
                "You have a strong website, but little to no third-party validation across the web",
                "Your brand lacks consistent entity signals that AI systems can recognize and trust",
                "Your content is not structured for AI retrieval, making it difficult to extract and cite",
                "You are losing high-intent customers who rely on AI for recommendations"
              ].map((point, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn} 
                  className="p-10 bg-brand-bg flex gap-8 items-center border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-4xl font-display font-light text-white/10">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-lg text-white/80 font-medium tracking-tight leading-snug">{point}</p>
                </motion.div>
              ))}
              
              <motion.div variants={fadeIn} className="p-10 pt-16 bg-brand-bg italic text-white/40">
                <p className="mb-6 leading-relaxed max-w-lg">AI-driven discovery is rapidly replacing traditional search behavior. Visibility is no longer enough.</p>
                <h4 className="text-4xl md:text-5xl font-bold text-brand-accent not-italic tracking-tighter uppercase leading-[0.9]">
                  If AI does not trust your brand, it will not recommend it.
                </h4>
              </motion.div>
            </motion.div>
          </div>
        </Section>

        {/* AI VISIBILITY AUDIT */}
        <section id="audit" className="py-32 md:py-48 px-6 bg-brand-bg relative border-y border-white/5 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 blur-[150px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeIn}>
              <Tag>Strategic Analysis</Tag>
              <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-[0.9] uppercase tracking-tighter">AI Visibility Audit</h2>
              <p className="text-2xl text-white/80 mb-10 font-serif italic leading-snug">
                Understand why AI systems are not recommending your brand—and what to fix.
              </p>
              <div className="space-y-8 text-lg text-white/50 mb-12 max-w-md">
                <p>This is a deep analysis of how AI systems perceive your brand across the web. I assess your visibility, authority, and trust signals.</p>
              </div>
              <Button href="mailto:neuralicstudio@gmail.com" variant="primary" className="px-12 py-6">
                Request Audit
              </Button>
            </motion.div>

            <motion.div 
              {...stagger}
              className="grid gap-px bg-white/10 border border-white/10"
            >
              {[
                { label: "Assessment", text: "Full AI visibility assessment across key platforms" },
                { label: "Authority", text: "Entity authority analysis and signal review" },
                { label: "Retrieval", text: "Technical content retrieval evaluation" },
                { label: "Trust", text: "Third-party trust signal verification" },
                { label: "Execution", text: "Actionable roadmap to improve discoverability" }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn} 
                  className="p-8 bg-brand-bg flex flex-col group relative"
                >
                  <span className="text-[9px] uppercase font-bold tracking-[0.4em] text-brand-accent mb-2">{item.label}</span>
                  <p className="text-lg text-white/80 group-hover:text-white transition-colors">{item.text}</p>
                </motion.div>
              ))}
              <div className="p-10 bg-brand-accent text-white group">
                 <p className="text-xl font-bold uppercase tracking-tighter group-hover:translate-x-2 transition-transform inline-flex items-center">
                    Get Clarity →
                 </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* INSIGHTS / AUTHORITY */}
        <Section id="insights">
          <motion.div {...fadeIn} className="max-w-4xl mb-32">
            <Tag>Market Intelligence</Tag>
            <h2 className="text-5xl md:text-8xl font-bold mb-10 uppercase leading-[0.9]">
              How AI Decides<br /> Which Brands to Recommend
            </h2>
            <p className="text-2xl text-brand-accent font-medium leading-snug">
              AI systems evaluate brands differently—and most companies are not optimized for how AI actually retrieves and recommends information.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 border-t border-white/10 pt-16">
            {[
              {
                title: "AI Does Not Trust Self-Promotion",
                content: "AI systems do not rely on what your website says about you. They rely on what the web says about you. Without third-party validation—reviews, mentions, citations—your brand remains low-trust."
              },
              {
                title: "Visibility Without Structure Is Useless",
                content: "Even if your content is valuable, AI may not use it. If your content is not structured for retrieval—clear answers, semantic relevance, entity clarity—it becomes invisible to AI systems."
              },
              {
                title: "Entity Authority Determines Recommendation",
                content: "AI connects signals across the web to understand who you are. If your brand lacks consistent entity signals, AI cannot confidently recommend you."
              },
              {
                title: "AI Discovery Is Replacing Search",
                content: "Users are increasingly asking AI directly instead of browsing search results. If your brand is not part of AI-generated answers, you are missing high-intent opportunities."
              }
            ].map((insight, index) => (
              <motion.div 
                key={index}
                {...fadeIn}
                className="flex flex-col border-b border-white/5 pb-16 last:border-0"
              >
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></div>
                   <h3 className="text-xs uppercase font-bold tracking-[0.3em] text-white/40">Insight 0{index + 1}</h3>
                </div>
                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter">{insight.title}</h3>
                <p className="text-white/50 leading-relaxed text-lg font-light max-w-lg">{insight.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-40 text-center py-20 border-y border-white/10 border-dashed">
            <p className="text-sm uppercase tracking-[0.4em] text-white/30 mb-8 font-bold">The Strategic Question</p>
            <p className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
              “Does AI trust you<br /> enough to recommend you?”
            </p>
          </motion.div>
        </Section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-32 md:py-64 px-6 bg-brand-bg relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="lg:col-span-5 relative"
              >
                <div className="aspect-[4/5] overflow-hidden grayscale contrast-125 brightness-50 sepia-[20%]">
                    <img 
                      src={ISHOLA_IMAGE} 
                      alt="About Ishola David" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                </div>
                <div className="absolute top-0 right-0 p-12 bg-brand-accent text-white -mr-12 mt-12 hidden lg:block">
                    <p className="text-4xl font-bold leading-none tracking-tighter uppercase mb-2">Since<br />2018</p>
                    <p className="text-[9px] uppercase tracking-[0.3em] opacity-80 font-bold">In AI Systems</p>
                </div>
              </motion.div>

              <motion.div 
                {...fadeIn}
                className="lg:col-span-7"
              >
                <Tag>The Consultant</Tag>
                <h2 className="text-5xl md:text-8xl font-bold mb-12 uppercase leading-[0.85] tracking-tighter">Ishola<br />Oluwaseyi David</h2>
                <div className="space-y-8 text-xl text-white/50 leading-relaxed max-w-2xl font-light">
                  <p>I’m an AI engineer and automation specialist, and the founder of <span className="text-white font-bold tracking-tight">NeuralicAI</span>—where I build systems that help businesses operate faster and smarter.</p>
                  
                  <div className="p-10 bg-white/5 border-l border-brand-accent italic font-serif text-2xl text-white/90">
                    <p className="mb-4">"Customers are no longer just searching—they are asking AI. That gap is where I operate."</p>
                  </div>
                  
                  <p>Today, I focus on AI Search Optimization—helping brands become discoverable, trusted, and recommended inside systems like ChatGPT, Claude, Gemini, and Perplexity.</p>
                  
                  <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-white/10">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent mb-4">Technical Prowess</p>
                        <p className="text-sm font-medium text-white/80 leading-relaxed italic">Deep understanding of LLM retrieval architecture and entity-first search logic.</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent mb-4">Implementation</p>
                        <p className="text-sm font-medium text-white/80 leading-relaxed italic">Bridging real-world business strategy with practical AI-focused optimization.</p>
                    </div>
                  </div>

                  <p className="text-4xl font-bold text-white uppercase tracking-tighter pt-12 leading-none">I help you become<br /> recommendable.</p>

                  <p>I am Ishola Oluwaseyi David, an AI Search Optimization Specialist and founder of NeuralicAI.</p>
                  <p>I am not affiliated with any political organization or public office. My work focuses on AI systems, automation, and helping brands become discoverable and recommended by modern AI platforms.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-48 md:py-64 px-6 bg-brand-bg relative overflow-hidden text-center border-t border-white/10">
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div {...fadeIn}>
              <Tag className="mx-auto">Immediate Next Step</Tag>
              <h2 className="text-5xl md:text-9xl font-bold mb-12 uppercase leading-[0.85] tracking-tighter">
                Ready for<br />AI Clarity?
              </h2>
              <div className="max-w-2xl mx-auto space-y-6 mb-16 text-2xl text-white/60 font-serif italic">
                <p>Let’s identify where your brand stands—and what’s preventing systems from recommending you.</p>
                <p className="text-xs font-bold uppercase tracking-[0.5em] text-brand-accent pt-4">No pressure. Just clarity.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Button href="mailto:neuralicstudio@gmail.com" variant="primary" className="px-16 py-6 text-sm">
                  Book an Audit
                </Button>
                <Button href="mailto:neuralicstudio@gmail.com" variant="secondary" className="px-16 py-6 text-sm border-white/10">
                  Contact Me
                </Button>
              </div>

              <div className="mt-48 grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-white/5 opacity-30">
                 {["Search", "Entity", "AIEO", "Neuralic"].map(word => (
                   <div key={word} className="text-[10px] uppercase font-bold tracking-[0.6em] whitespace-nowrap">{word}</div>
                 ))}
              </div>
            </motion.div>
          </div>
        </section>
        {/* ARTICLE SECTION */}
        <section id="ai-search-optimization" style={{padding: "80px 20px", maxWidth: "900px", margin: "0 auto"}}>
          <h1>What is AI Search Optimization?</h1>
          <p>
            AI Search Optimization (AIEO) is the process of making a brand discoverable, understandable, and recommendable by AI systems like ChatGPT, Claude, Gemini, and Perplexity.
          </p>
          <p>
            Unlike traditional SEO, which focuses on ranking in search engines, AI Search Optimization focuses on whether AI systems trust your brand enough to recommend it.
          </p>
          <h2>Why Traditional SEO Is Not Enough</h2>
          <p>Traditional SEO helps websites rank on search engines like Google.</p>
          <ul>
            <li>Clearly defined entity</li>
            <li>Trusted signals across the web</li>
            <li>Structured content AI can extract</li>
          </ul>
          <h2>How AI Systems Decide What to Recommend</h2>
          <ul>
            <li>Entity authority</li>
            <li>Third-party validation</li>
            <li>Content structure</li>
            <li>Consistency across the web</li>
          </ul>
          <h2>Key Components of AI Search Optimization</h2>
          <ul>
            <li>Entity building</li>
            <li>Retrieval-friendly content</li>
            <li>External trust signals</li>
            <li>Semantic relevance</li>
          </ul>
          <h2>Final Thought</h2>
          <p>The future of discovery is shifting from search to AI.</p>
          <p>Does AI trust you enough to recommend you?</p>
          <p><strong>Written by Ishola Oluwaseyi David, AI Search Optimization Specialist.</strong></p>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-start gap-12 md:flex-row">
          <div>
            <p className="font-display font-bold text-2xl tracking-tighter mb-4">
              ISHOLA<span className="text-brand-accent">.</span>
            </p>
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest leading-loose">
              © 2026 Ishola Oluwaseyi David.<br />
              Founder of NeuralicAI.<br />
              All Rights Reserved.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
             <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Connect</p>
                <a href="#" className="block text-xs font-bold uppercase tracking-widest text-white/60 hover:text-brand-accent transition-colors">LinkedIn</a>
                <a href="https://x.com/NeuralicAI" target="_blank" rel="noopener noreferrer" className="block text-xs font-bold uppercase tracking-widest text-white/60 hover:text-brand-accent transition-colors">Twitter</a>
             </div>
             <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Company</p>
                <a href="#" className="block text-xs font-bold uppercase tracking-widest text-white/60 hover:text-brand-accent transition-colors">NeuralicAI</a>
                <a href="#" className="block text-xs font-bold uppercase tracking-widest text-white/60 hover:text-brand-accent transition-colors">AIEO Audit</a>
             </div>
             <div className="space-y-4 hidden md:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Services</p>
                <p className="text-xs text-white/40 italic font-serif leading-relaxed">Helping brands become discoverable inside AI.</p>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
