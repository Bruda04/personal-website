import { motion } from "framer-motion";

const Bio = () => {
  return (
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
              Software engineering student dedicated to building{" "}
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
              <span className="text-text font-bold">Software Engineering</span>,
              I bridge the gap between low-level infrastructure and high-level
              application logic.
            </p>
            <p className="text-secondary/70 text-base leading-relaxed">
              Known for excelling as both a team player and an independent
              contributor. My academic foundation at{" "}
              <a
                href="https://www.ftn.uns.ac.rs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-bold decoration-primary/30 underline-offset-4"
              >
                FTN Novi Sad
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

          {/* Education Timeline */}
          <div className="relative ml-4 pl-8 space-y-12 flex flex-col items-start pt-8">
            <div className="absolute left-0.75 top-11 bottom-6 w-px bg-linear-to-b from-primary via-white/10 to-transparent"></div>

            {/* University */}
            <div className="relative group flex flex-col items-start text-left w-full">
              <div className="absolute -left-8.25 top-1.5 h-2.5 w-2.5 z-10">
                <div className="absolute inset-0 border border-primary bg-primary shadow-[0_0_10px_#DCF763] transition-all duration-300"></div>
                <span className="absolute inset-0 h-full w-full bg-primary animate-ping opacity-20"></span>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">
                  2022 — Present
                </span>
                <h4 className="text-xl font-bold text-text uppercase italic tracking-tighter leading-tight">
                  Software Engineering & Information Technologies
                </h4>
                <a
                  href="https://www.ftn.uns.ac.rs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-text/40 font-medium tracking-widest uppercase hover:text-text transition-colors w-fit border-b border-transparent hover:border-text/20 pb-0.5"
                >
                  @ Faculty of Technical Sciences, University of Novi Sad
                </a>
                <div className="mt-3">
                  <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-black text-primary uppercase tracking-tighter italic">
                    GPA: 9.71 / 10.0
                  </div>
                </div>
              </div>
            </div>

            {/* High School */}
            <div className="relative group flex flex-col items-start text-left w-full opacity-70 hover:opacity-100 transition-opacity">
              <div className="absolute -left-8.25 top-1.5 h-2.5 w-2.5 z-10">
                <div className="absolute inset-0 border border-text/20 bg-background group-hover:border-primary transition-all duration-300"></div>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <span className="text-[10px] font-bold text-text/40 tracking-[0.2em] uppercase">
                  2018 — 2022
                </span>
                <h4 className="text-lg font-bold text-text uppercase italic tracking-tighter leading-tight">
                  Network Administrator
                </h4>
                <a
                  href="http://www.teslabg.edu.rs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-text/40 font-medium tracking-widest uppercase hover:text-text transition-colors w-fit border-b border-transparent hover:border-text/20 pb-0.5"
                >
                  @ Electrical Engineering High School "Nikola Tesla", Belgrade
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Bio;
