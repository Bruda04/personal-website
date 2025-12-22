import { SITE_CONTENT } from "../data/content";

const ExperienceTimeline = () => {
  const experiences = SITE_CONTENT.experience;

  return (
    <div className="relative pl-8 space-y-16 flex flex-col items-start mx-auto md:mx-0 w-fit">
      <div className="absolute left-0.75 top-2 bottom-6 w-px bg-linear-to-b from-primary via-white/10 to-transparent"></div>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="relative group flex flex-col items-start text-left"
        >
          <div className="absolute -left-8.25 top-1.5 h-2.5 w-2.5 z-10">
            <div
              className={`absolute inset-0 border border-primary bg-background group-hover:bg-primary transition-all duration-300 ${
                exp.active ? "bg-primary" : ""
              }`}
            ></div>
            {exp.active && (
              <span className="absolute inset-0 h-full w-full bg-primary animate-ping opacity-75"></span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase flex items-center gap-2">
              {exp.period}
            </span>

            <h4 className="text-lg font-bold text-text group-hover:text-primary transition-colors uppercase italic tracking-tighter leading-tight">
              {exp.role}
            </h4>

            {exp.link ? (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text/40 font-medium tracking-widest uppercase hover:text-text transition-colors w-fit border-b border-transparent hover:border-text/20 pb-0.5"
              >
                @ {exp.company}
              </a>
            ) : (
              <span className="text-xs text-text/40 font-medium tracking-widest uppercase">
                @ {exp.company}
              </span>
            )}

            {exp.details && exp.details.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {exp.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-[11px] text-text/50 font-medium tracking-wide flex items-start gap-2 group-hover:text-text/70 transition-colors"
                  >
                    <span className="text-primary mt-1 text-[8px]">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
