import { motion } from "framer-motion";
import { Trophy, Users, Swords } from "lucide-react";

const items = [
  { icon: Trophy, title: "Hackathon Prototyping", desc: "Rapid development of security tools and fintech solutions under time constraints." },
  { icon: Swords, title: "Red vs Blue Team Simulations", desc: "Participating in offensive and defensive cybersecurity exercises to sharpen real-world skills." },
  { icon: Users, title: "Cybersecurity Events", desc: "Engaging with the security community through CTFs, workshops, and collaborative learning." },
];

const Community = () => (
  <section id="community" className="py-24 px-6">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-xs text-primary tracking-widest mb-2">
          <span className="text-muted-foreground">//</span> HACKATHONS & COMMUNITY
        </h2>
        <div className="section-divider mb-10" />
      </motion.div>

      <div className="space-y-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="flex gap-4 items-start"
          >
            <item.icon size={18} className="text-primary/50 mt-0.5 shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-foreground mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Community;
