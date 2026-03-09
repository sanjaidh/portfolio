import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Password Strength Checker",
    description: "Command-line security tool that evaluates password strength using entropy, length, and character complexity rules.",
    tech: ["Python", "Cryptography", "CLI"],
  },
  {
    title: "Arduino GPS Location Tracker",
    description: "Embedded system using Arduino, GPS, and GSM modules to track and transmit real-time location data.",
    tech: ["Arduino", "C++", "GPS", "GSM"],
  },
  {
    title: "WiFi Security Analyzer",
    description: "Tool for scanning nearby WiFi networks and analyzing encryption protocols and security vulnerabilities.",
    tech: ["Python", "Network Security", "Scapy"],
  },
  {
    title: "UPI Scam Shield",
    description: "Security prototype designed to detect suspicious payment behavior and prevent financial scams. Built at a hackathon.",
    tech: ["Python", "ML", "Fintech Security"],
    badge: "Hackathon",
  },
  {
    title: "Network Intrusion Detection System (NIDS)",
    description: "Python-based NIDS that analyzed 1000+ packets in a test environment and detected port scans, brute-force attempts, and other suspicious patterns.",
    tech: ["Python", "Network Security", "Packet Analysis"],
  },
];

const Projects = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-xs text-primary tracking-widest mb-2">
          <span className="text-muted-foreground">//</span> PROJECTS
        </h2>
        <div className="section-divider mb-10" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative border border-border rounded bg-card p-5 hover:border-primary/30 transition-all duration-300 glow-border-hover"
          >
            {p.badge && (
              <span className="absolute top-4 right-4 font-mono text-[10px] px-2 py-0.5 rounded bg-accent/20 text-accent">
                {p.badge}
              </span>
            )}
            <h3 className="font-semibold text-foreground mb-2 text-sm">{p.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-border text-terminal-dim">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
