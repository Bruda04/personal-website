import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValue,
} from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const location = useLocation();

  const scrollProgress = useMotionValue(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.onChange((v) => scrollProgress.set(v));
  }, [scrollYProgress, scrollProgress]);

  useEffect(() => {
    scrollProgress.set(0);
    window.scrollTo(0, 0);

    const checkScrollable = () => {
      const hasScroll =
        document.documentElement.scrollHeight > window.innerHeight + 10;
      setIsScrollable(hasScroll);

      if (!hasScroll) scrollProgress.set(0);
    };

    const timer = setTimeout(checkScrollable, 0);

    window.addEventListener("resize", checkScrollable);

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkScrollable);
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
    };
  }, [isOpen, location.pathname, scrollProgress]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Bio", path: "/bio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        key={location.pathname + "-progress"}
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary z-120 origin-left"
        style={{
          scaleX: isScrollable ? scrollProgress : 0,
          opacity: isOpen || !isScrollable ? 0 : 1,
        }}
        initial={{ scaleX: 0 }}
        transition={{ opacity: { duration: 0.2 } }}
      />

      <nav className="fixed top-0 left-0 right-0 z-100 h-20 bg-background/40 backdrop-blur-md border-b border-white/5 flex items-center">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center w-full">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="z-110 relative"
          >
            <h1 className="text-2xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tighter uppercase cursor-pointer">
              BRADIC.DEV
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-[11px] font-bold tracking-[0.2em]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative pb-1 transition-all duration-300 uppercase ${
                    isActive
                      ? "text-primary"
                      : "text-text opacity-50 hover:opacity-100 hover:text-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-primary shadow-[0_0_8px_rgba(220,247,99,0.8)]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 z-110 cursor-pointer relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-primary"
            />
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-primary"
            />
            <motion.div
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-primary"
            />
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 w-full h-screen bg-background backdrop-blur-2xl z-105 flex items-center justify-center overflow-hidden"
            >
              <div className="flex flex-col items-center space-y-10">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-3xl font-black tracking-[0.3em] uppercase transition-colors ${
                          isActive ? "text-primary" : "text-text"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
