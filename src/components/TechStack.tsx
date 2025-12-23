import { motion } from "framer-motion";
import { SITE_CONTENT } from "../data/content";

const TechStack = () => {
  const technologies = SITE_CONTENT.techStack;

  return (
    <div className="py-12 border-y border-white/5 bg-black/20 overflow-hidden flex whitespace-nowrap relative">
      <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-r from-background via-transparent to-background opacity-100" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 140 }}
        className="flex gap-16 pr-16 text-5xl md:text-7xl font-black opacity-10 uppercase tracking-tighter"
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <span
            key={index}
            className="hover:opacity-100 hover:text-primary transition-all duration-500 cursor-default"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
