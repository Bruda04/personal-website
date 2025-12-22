import { useState, useMemo, useRef, useEffect } from "react"; // Dodat useRef i useEffect
import { motion, AnimatePresence } from "framer-motion";
import { FiFilter, FiChevronDown, FiX } from "react-icons/fi";
import { SITE_CONTENT } from "../data/content";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = SITE_CONTENT.projects;
  const [selectedTag, setSelectedTag] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    };

    if (isFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterOpen]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    tags.add("All");
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedTag === "All") return projects;
    return projects.filter((project) => project.tags.includes(selectedTag));
  }, [selectedTag, projects]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-5xl font-black mb-4 text-text uppercase italic tracking-tighter">
            Selected <span className="text-primary">Works</span>
          </h2>
          <div className="h-1 w-20 bg-primary mb-6" />
          <p className="text-secondary text-lg max-w-xl font-medium leading-relaxed">
            An engineering approach to problem-solving through software
            architecture, AI, and systems programming.
          </p>
        </motion.div>

        <div className="relative" ref={filterRef}>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center gap-3 px-6 py-3 border transition-all duration-300 rounded-full text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer ${
              selectedTag !== "All"
                ? "border-primary text-primary shadow-[0_0_20px_rgba(220,247,99,0.15)]"
                : "border-text/10 text-text/60 hover:border-text/30 hover:text-text"
            }`}
          >
            <FiFilter
              className={selectedTag !== "All" ? "animate-pulse" : ""}
            />
            {selectedTag === "All" ? "Filter by Tech" : `Tag: ${selectedTag}`}
            <motion.div animate={{ rotate: isFilterOpen ? 180 : 0 }}>
              <FiChevronDown />
            </motion.div>
          </button>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 15, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 top-full z-50 w-64 p-3 bg-background/95 backdrop-blur-xl border border-text/10 rounded-2xl shadow-2xl"
              >
                <div className="grid grid-cols-1 gap-1 max-h-75 overflow-y-auto custom-scrollbar">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setSelectedTag(tag);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer ${
                        selectedTag === tag
                          ? "bg-primary text-background"
                          : "hover:bg-text/5 text-text/40 hover:text-text"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                {selectedTag !== "All" && (
                  <button
                    onClick={() => {
                      setSelectedTag("All");
                      setIsFilterOpen(false);
                    }}
                    className="mt-2 pt-2 border-t border-text/5 w-full text-[9px] font-black uppercase text-primary/60 hover:text-primary transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FiX size={10} /> Reset
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.98 }}
              className="z-10 hover:z-20"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-40 text-text/10 uppercase font-black tracking-[0.5em] text-2xl"
        >
          No Matches Found
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
