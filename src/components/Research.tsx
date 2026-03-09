import { motion } from "framer-motion";
import { Atom, Lightbulb, Radio, ShieldCheck, Zap, Cpu } from "lucide-react";

const areas = [
  { icon: Atom, title: "Optical Computing", desc: "Exploring computation using photons instead of electrons for next-generation processing architectures." },
  { icon: Lightbulb, title: "Light-Based Logic Gates", desc: "Designing AND, OR, NOT gates using phototransistors and LED arrays as proof-of-concept optical circuits." },
  { icon: Radio, title: "Phototransistor Circuits", desc: "Building light-sensitive switching circuits for signal processing and binary data representation." },
  { icon: Zap, title: "Secure Optical Transmission", desc: "Investigating light-based data channels as inherently secure alternatives to electromagnetic communication." },
  { icon: ShieldCheck, title: "Hardware Security", desc: "Analyzing physical attack vectors and side-channel vulnerabilities in embedded systems." },
  { icon: Cpu, title: "Low-Power Architectures", desc: "Researching energy-efficient computing designs for constrained embedded environments." },
];

const Research = () => (
  <section id="research" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-xs text-primary tracking-widest mb-2">
          <span className="text-muted-foreground">//</span> RESEARCH INTERESTS
        </h2>
        <div className="section-divider mb-3" />
        <p className="text-muted-foreground text-xs font-mono mb-10 italic">
          "The future of computing may not be electronic — it may be photonic."
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {areas.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="border border-border rounded p-4 hover:border-primary/20 transition-all duration-300 group"
          >
            <a.icon size={16} className="text-primary/60 mb-3 group-hover:text-primary transition-colors" />
            <h3 className="text-xs font-semibold text-foreground mb-1.5">{a.title}</h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Research;
