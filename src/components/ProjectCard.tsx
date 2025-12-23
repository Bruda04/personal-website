import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronDown } from "react-icons/fi";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    link: string | null;
    repositories: { url: string; label: string }[] | null;
    image: string;
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-text/5 border border-text/10 rounded-xl overflow-hidden backdrop-blur-md flex flex-col group h-fit"
    >
      {/* Image Section */}
      <motion.div
        layout
        className="relative h-48 overflow-hidden bg-text/1 flex items-start justify-center border-b border-text/5"
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-fit object-top transition-opacity duration-500 opacity-90 group-hover:opacity-100"
        />

        <AnimatePresence>
          {project.link && (
            <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-primary text-background rounded-full hover:scale-110 transition-transform flex items-center justify-center shadow-xl shadow-primary/20"
              >
                <FiExternalLink size={20} />
              </a>
            </div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Content Section */}
      <div className="p-6 flex flex-col">
        <motion.div layout className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-primary/5 text-primary text-[9px] font-bold uppercase tracking-widest rounded border border-primary/10"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.h3
          layout
          className="text-xl font-bold mb-2 group-hover:text-primary transition-colors italic tracking-tighter"
        >
          {project.title}
        </motion.h3>

        <div className="relative">
          <motion.p
            layout
            className={`text-secondary text-sm leading-relaxed ${
              !isExpanded ? "line-clamp-2" : ""
            }`}
          >
            {project.description}
          </motion.p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 hover:text-primary flex items-center gap-1 transition-colors cursor-pointer"
          >
            {isExpanded ? "Show Less" : "Read More"}
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
              <FiChevronDown />
            </motion.div>
          </button>
        </div>

        {/* Links Footer*/}
        {project.repositories && project.repositories.length > 0 && (
          <motion.div
            layout
            className="mt-6 pt-4 border-t border-text/5 flex flex-col gap-3"
          >
            <span className="text-[10px] text-text/20 font-bold uppercase tracking-[0.3em]">
              Repositories
            </span>
            <div className="flex flex-wrap gap-2">
              {project.repositories.map((git) => (
                <a
                  key={git.url}
                  href={git.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2 py-1 bg-text/5 hover:bg-primary/20 border border-text/10 hover:border-primary/30 rounded text-[9px] font-bold text-text/60 hover:text-primary transition-all uppercase tracking-tighter"
                >
                  <FiGithub size={12} />
                  {git.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
