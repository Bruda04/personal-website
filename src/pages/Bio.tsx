import { motion } from "framer-motion";
import ExperienceTimeline from "../components/ExpirienceTimeline";
import { SITE_CONTENT } from "../data/content";

const Bio = () => {
  return (
    <>
      <title>Luka Bradic | Bio</title>
      <meta
        name="description"
        content="Software Engineer at Drenik ND, FTN bachelor’s graduate, and current master’s student."
      />
      <link rel="canonical" href="https://bradic.dev/bio" />
      <section className="py-24 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start px-4"
        >
          {/* Left Side: Branding */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-0.5 w-12 bg-primary"></div>
                <span className="text-primary tracking-[0.4em] text-[10px] font-black uppercase">
                  System Profile
                </span>
              </div>
              <h3 className="text-5xl font-black leading-[0.9] uppercase italic tracking-tighter mb-6">
                Hi, I'm <br />
                <span className="text-primary">Luka Bradic.</span>
              </h3>
              <p className="text-text/80 text-lg font-medium leading-relaxed max-w-sm">
                Software Engineer at Drenik ND dedicated to building{" "}
                <span className="text-secondary italic">
                  impactful applications
                </span>{" "}
                through clean architecture and rapid technological adaptation.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "System Design",
                "Full-Stack",
                "Cloud Infrastructure",
                "System/Network Administration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-text/5 border border-text/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Details & Education */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6 text-left">
              <p className="text-secondary text-lg leading-relaxed font-light">
                With a background spanning from{" "}
                <span className="text-text font-bold">
                  Network Administration
                </span>{" "}
                to{" "}
                <span className="text-text font-bold">
                  Software Engineering
                </span>
                , I bridge the gap between low-level infrastructure and
                high-level application logic.
              </p>
              <p className="text-secondary/70 text-base leading-relaxed">
                Known for excelling as both a team player and an independent
                contributor. My academic foundation at{" "}
                <a
                  href="https://ftn.uns.ac.rs/engfaculty-of-technical-sciences-eng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-bold decoration-primary/30 underline-offset-4"
                >
                  Faculty of Technical Sciences
                </a>{" "}
                (GPA: 9.71/10) combined with hands-on development reflects my
                ability to quickly grasp complex concepts.
              </p>
            </div>

            {/* Education Section Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
                Education
              </span>
              <div className="h-px flex-1 bg-text/5"></div>
            </div>

            <ExperienceTimeline experiences={SITE_CONTENT.education} />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Bio;
