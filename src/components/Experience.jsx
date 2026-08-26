import { motion } from "framer-motion";
import { VscCode } from "react-icons/vsc";
import { FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Founder · Arogyalink",
      period: "Sept 2025 -- Present",
      description:
        "Healthcare SaaS for small and medium clinics. Designed the Node.js + MongoDB backend, DevOps pipeline, and Python analytics modules; onboarded 20+ clinics in two months.",
      technologies: ["Node.js", "MongoDB", "DevOps", "Python"],
      website: "https://arogyalink.in",
    },
    {
      title: "Co-Founder · Marketplace",
      period: "June 2023 -- July 2025",
      description:
        "Student academic exchange platform for books, notes, and resources. Led product from requirements through deployment; later acquired after research with 250+ students.",
      technologies: ["Product", "Auth", "Architecture"],
      website: "",
    },
    {
      title: "Data Science Intern · PianalytiX",
      period: "Oct 2024 -- Jun 2025",
      description:
        "Shipped production ML for 7 client projects across computer vision and NLP. Fine-tuned generative models and improved accuracy by ~32% using Python and Flask services.",
      technologies: ["Python", "Flask", "CV", "NLP", "GenAI"],
      website: "",
    },
    {
      title: "Principal Author · IJIRT",
      period: "Nov 2025",
      description:
        'Published "AI-Powered Cloud Resource Allocator and Manager": hybrid XGBoost and Bi-LSTM forecasting on AWS EC2 telemetry via Prometheus for proactive autoscaling.',
      technologies: ["XGBoost", "Bi-LSTM", "Prometheus", "AWS"],
      website: "https://ijirt.org/article?manuscript=186997",
    },
  ];

  return (
    <section id="experience" className="p-6 bg-transparent">
      <h2 className="text-3xl font-mono font-bold text-center mb-6 text-green-400">
        ls experience/
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-4 md:p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors w-full max-w-md"
            >
              <div className="flex justify-between items-start mb-4">
                <VscCode className="text-green-400" size={24} />
                {item.website && (
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                    title="View Link"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
              <h3 className="text-lg md:text-xl font-bold font-mono mb-1">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm font-mono text-green-400 mb-3">
                {item.period}
              </p>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, techIndex) => (
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

export default Experience;
