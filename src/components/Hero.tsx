import { motion } from "framer-motion";
import { Shield, Cpu, FlaskConical } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(160,100%,40%) 1px, transparent 1px), linear-gradient(90deg, hsl(160,100%,40%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-terminal-dim text-sm tracking-widest mb-4">
            <span className="text-primary">$</span> whoami
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight glow-text text-primary mb-4">
            Sanjaidharshan S
          </h1>
          <p className="font-mono text-muted-foreground text-sm md:text-base tracking-wide mb-2">
            Cybersecurity • Embedded Systems • Experimental Computing
          </p>
          <p className="text-secondary-foreground/70 max-w-xl mx-auto mt-6 leading-relaxed text-sm">
            Building security tools, embedded systems, and exploring the frontiers
            of optical computing and hardware security.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          {[
            { label: "Projects", href: "#projects", icon: Shield },
            { label: "Research", href: "#research", icon: FlaskConical },
            { label: "Contact", href: "#contact", icon: Cpu },
          ].map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-2 px-5 py-2.5 border border-border rounded font-mono text-sm text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-border glow-border-hover"
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 font-mono text-muted-foreground/40 text-xs"
        >
          <span className="animate-blink">▊</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
