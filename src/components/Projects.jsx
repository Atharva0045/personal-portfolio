import { motion } from "framer-motion";
import { VscCode } from "react-icons/vsc";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "InspireAPI Backend CI",
      description:
        "Full CI pipeline with dependency caching, Jest tests on in-memory MongoDB, and ESLint/Prettier — cutting test time by ~50% and lint issues by ~80%.",
      technologies: ["GitHub Actions", "Node.js", "MongoDB", "Jest"],
      github: "https://github.com/Atharva0045/inspireapi-backend",
      website: "",
    },
    {
      title: "InspireAPI FullStack Orchestration",
      description:
        "Docker Compose orchestration for backend, frontend, and database with a single-command local setup, layer-optimized images, and portable Linux/Windows configs.",
      technologies: ["Docker", "Compose", "Node.js", "React"],
      github: "https://github.com/Atharva0045/inspireapi-backend",
      website: "",
    },
    {
      title: "News Headline Analyzer",
      description:
        "End-to-end sentiment classification pipeline with a custom neural network (78% accuracy) and a Flask inference server with a lightweight UI.",
      technologies: ["Python", "TensorFlow", "Flask"],
      github:
        "https://github.com/Atharva0045/Sentiment-Analysis-Using-Neural-Network",
      website: "https://sentiment-analysis-nn.koyeb.app/",
    },
  ];

  return (
    <section id="projects" className="p-6 bg-transparent">
      <h2 className="text-3xl font-mono font-bold text-center mb-6 text-green-400">
        ls projects/
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-4 md:p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors w-full max-w-md"
            >
              <div className="flex justify-between items-start mb-4">
                <VscCode className="text-green-400" size={24} />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                    title="View Source Code"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 transition-colors"
                      title="View Live Demo"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold font-mono mb-2">{project.title}</h3>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs md:text-sm bg-gray-800 text-green-400 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
