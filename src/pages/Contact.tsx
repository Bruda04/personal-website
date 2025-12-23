import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiDevpost } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <title>Luka Bradic | Contact</title>
      <meta
        name="description"
        content="Get in touch with Luka Bradić for collaborations or software engineering opportunities."
      />
      <link rel="canonical" href="https://bradic.dev/#/contact" />
      <div className="py-12 max-w-4xl mx-auto text-text">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <header className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-secondary text-lg">
              Have an interesting project or just want to connect? Feel free to
              drop me a message!
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary uppercase tracking-wider">
                  Email
                </h3>
                <a
                  href="mailto:luka@bradic.dev"
                  className="group flex items-center gap-3 text-text hover:text-primary transition-all duration-300 font-medium w-fit"
                >
                  <FiMail className="h-5 w-5 transition-transform group-hover:scale-110" />
                  <span className="text-lg">luka@bradic.dev</span>
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary uppercase tracking-wider">
                  Social Media
                </h3>
                <div className="flex flex-wrap gap-8 mt-2">
                  <a
                    href="https://github.com/bruda04"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-all uppercase text-sm font-bold group"
                  >
                    <FiGithub className="h-5 w-5 transition-transform group-hover:scale-110" />
                    GitHub
                  </a>

                  <a
                    href="https://linkedin.com/in/luka-bradic"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-all uppercase text-sm font-bold group"
                  >
                    <FiLinkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
                    LinkedIn
                  </a>

                  <a
                    href="https://devpost.com/Bruda04"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-all uppercase text-sm font-bold group"
                  >
                    <SiDevpost className="h-5 w-5 transition-transform group-hover:scale-110" />
                    Devpost
                  </a>
                </div>
              </div>
            </div>

            <form
              action="https://formspree.io/f/mlgrlonn"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full bg-text/5 border border-secondary/20 rounded-sm px-4 py-3 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-secondary/30"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full bg-text/5 border border-secondary/20 rounded-sm px-4 py-3 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-secondary/30"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full bg-text/5 border border-secondary/20 rounded-sm px-4 py-3 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-secondary/30 max-h-37.5 resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="cursor-pointer w-full py-4 bg-primary text-background rounded-sm font-black uppercase tracking-widest transition-all duration-300 border-2 border-transparent hover:bg-white/3 hover:text-primary hover:border-primary active:scale-95 shadow-lg shadow-primary/10"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
