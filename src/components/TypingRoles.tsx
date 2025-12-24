import { Typewriter } from "react-simple-typewriter";
import { SITE_CONTENT } from "../data/content";

const roleWords = SITE_CONTENT.hero.roles;

const TypingRoles = () => {
  return (
    <div className="text-xl text-secondary max-w-xl font-light leading-relaxed mb-10 min-h-24 md:min-h-16 text-center md:text-left">
      <span className="text-text/80">I am </span>

      <span className="text-primary font-medium uppercase inline">
        <Typewriter
          words={roleWords}
          loop={0}
          cursor
          cursorStyle="_"
          cursorBlinking={true}
          typeSpeed={65}
          deleteSpeed={30}
          delaySpeed={2500}
        />
      </span>
    </div>
  );
};

export default TypingRoles;
