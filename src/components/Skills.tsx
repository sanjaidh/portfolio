import { motion } from "framer-motion";

const categories = [
  { name: "Programming", items: ["C", "C++", "Python"] },
  { name: "Security", items: ["Cryptography basics", "Network security", "Security tool development"] },
  { name: "Hardware", items: ["Arduino", "Embedded systems", "Sensor integration"] },
  { name: "Tools", items: ["Git", "Linux", "Wireshark"] },
];

const Skills = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-xs text-primary tracking-widest mb-2">
          <span className="text-muted-foreground">//</span> SKILLS
        </h2>
        <div className="section-divider mb-10" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <h3 className="font-mono text-xs text-primary/70 tracking-wider mb-3 uppercase">{cat.name}</h3>
            <ul className="space-y-1.5">
              {cat.items.map((item) => (
                <li key={item} className="font-mono text-xs text-muted-foreground flex items-center gap-2">
                  <span className="text-primary/40">›</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
