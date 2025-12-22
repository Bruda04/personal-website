import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TechStack from "../components/TechStack";
import StatusWidget from "../components/Status";
import ExperienceTimeline from "../components/ExpirienceTimeline";
import TypingRoles from "../components/TypingRoles";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pb-20"
    >
      <section className="py-10 flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/5">
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <div className="mb-12">
            <StatusWidget />
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter uppercase italic">
            Hi, my name <br /> is
            <span className="text-primary not-italic"> Luka Bradic.</span>
          </h2>

          <TypingRoles />

          <Link to="/projects" className="mt-8">
            <button className="cursor-pointer px-8 py-4 bg-primary text-background rounded-sm font-black uppercase tracking-widest transition-all duration-300 border-2 border-transparent hover:bg-white/3 hover:text-primary hover:border-primary active:scale-95 shadow-lg shadow-primary/10">
              Explore Projects
            </button>
          </Link>
        </div>

        <div className="w-full md:w-auto md:min-w-75 flex flex-col items-center md:items-start pt-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary/50 mb-10 md:pl-8">
            Experience // Path
          </h3>
          <ExperienceTimeline />
        </div>
      </section>

      <section className="py-10 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] border-b border-white/5">
        <TechStack />
      </section>

      <section className="py-10 relative px-6 overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden lg:block">
          <span className="text-[12rem] font-black uppercase italic tracking-tighter select-none">
            LUKA // 004
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-10"
        >
          <div className="hidden md:block flex-1 border-l border-primary/20 pl-6">
            <p className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-2">
              Core Philosophy
            </p>
            <p className="text-secondary/40 text-[11px] uppercase leading-relaxed max-w-50 font-bold tracking-tight">
              Details make the difference, <br />
              Breaking things to learn, <br />
              Make it work, then make it fast.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-12">
            <Link to="/bio" className="order-2 md:order-1">
              <button className="cursor-pointer px-8 py-4 bg-primary text-background rounded-sm font-black uppercase tracking-widest transition-all duration-300 border-2 border-transparent hover:bg-white/3 hover:text-primary hover:border-primary active:scale-95 shadow-lg shadow-primary/10 whitespace-nowrap">
                About Me
              </button>
            </Link>

            <div className="text-center md:text-right order-1 md:order-2">
              <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
                Engineering{" "}
                <span className="text-primary not-italic">Perspective.</span>
              </h3>
              <p className="text-secondary text-sm font-medium leading-relaxed opacity-70 max-w-sm md:ml-auto">
                Diving deep into how complex systems work "under the hood". I'm
                all about balancing academic theory with a hands-on drive to
                build things that actually matter.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
