import { motion } from "framer-motion";
import { Mail, Github, Linkedin, PhoneCall } from "lucide-react";

const links = [
  { icon: PhoneCall, label: "Phone", href: "tel:+919841254471", text: "+91 98412 54471" },
  { icon: Mail, label: "Email", href: "mailto:sanjaidh2006@gmail.com", text: "sanjaidh2006@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/sanjaidh", text: "linkedin.com/in/sanjaidh" },
  { icon: Github, label: "GitHub", href: "https://github.com/sanjaidh", text: "github.com/sanjaidh" },
];

const Contact = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-xs text-primary tracking-widest mb-2">
          <span className="text-muted-foreground">//</span> CONTACT
        </h2>
        <div className="section-divider mb-8" />
        <p className="text-muted-foreground text-xs mb-8">
          Open to collaborations, research discussions, and hackathon teams.
        </p>
      </motion.div>

      <div className="flex flex-col gap-3 items-center">
        {links.map((l, i) => (
          <motion.a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-center gap-3 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <l.icon size={14} />
            {l.text}
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
