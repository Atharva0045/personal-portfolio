import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800/90 via-gray-900 to-black px-3 sm:px-4 lg:px-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono font-extrabold break-words">
          <span className="text-green-400">&gt; </span>
          Hi, I'm Atharva Aher
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-mono text-gray-400">
          $ whoami
          <br />
          &gt; Aspiring Software Engineer
        </p>
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-green-500 px-4 sm:px-6 py-2 rounded-md text-black font-mono hover:bg-green-400 transition-colors text-sm sm:text-base"
          >
            ./view-projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border border-green-500 px-4 sm:px-6 py-2 rounded-md font-mono text-green-500 hover:bg-green-500 hover:text-black transition-colors text-sm sm:text-base"
          >
            ./contact
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
