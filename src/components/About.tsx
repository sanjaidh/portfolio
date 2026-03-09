import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-xs text-primary tracking-widest mb-2">
          <span className="text-muted-foreground">//</span> ABOUT
        </h2>
        <div className="section-divider mb-8" />

        <div className="space-y-4 text-secondary-foreground/80 text-sm leading-relaxed">
          <p>
            Computer science student based in India with a deep focus on{" "}
            <span className="text-primary font-medium">cybersecurity</span>,{" "}
            <span className="text-primary font-medium">embedded systems</span>, and{" "}
            <span className="text-primary font-medium">hardware security</span>.
          </p>
          <p>
            I build security tools that analyze password strength, scan network
            vulnerabilities, and detect suspicious payment behavior. On the hardware
            side, I design Arduino-based systems for GPS tracking, sensor integration,
            and real-time data transmission.
          </p>
          <p>
            My research interests lie at the intersection of computing and physics —
            exploring light-based logic circuits, phototransistor arrays, and optical
            data transmission as alternatives to conventional electronic architectures.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
