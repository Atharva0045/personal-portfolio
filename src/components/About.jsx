import { motion } from "framer-motion";

const Line = ({ indent = 0, hang = 0, children }) => (
  <div
    className="break-words"
    style={{
      paddingLeft: `${indent + hang}ch`,
      textIndent: hang ? `-${hang}ch` : undefined,
    }}
  >
    {children}
  </div>
);

const About = () => {
  return (
    <section id="about" className="p-6 bg-transparent">
      <h2 className="text-3xl font-mono font-bold text-center mb-6 text-green-400">
        cat about.py
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 min-w-0">
          <motion.img
            src="./Profile.jpeg"
            alt="Atharva Aher"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-green-500 flex-shrink-0 object-cover"
            whileHover={{ scale: 1.1 }}
          />
          <div className="bg-gray-900 p-4 md:p-6 rounded-lg border border-gray-700 w-full min-w-0 overflow-hidden">
            <div className="text-sm md:text-lg leading-relaxed font-mono">
              <Line>
                <span className="text-purple-400">class</span>{" "}
                <span className="text-yellow-400">Developer</span>:
              </Line>
              <Line indent={4}>
                <span className="text-blue-400">def</span>{" "}
                <span className="text-green-400">__init__</span>(self):
              </Line>
              <Line indent={8} hang={"self.name = ".length}>
                self.name ={" "}
                <span className="text-orange-400">"Atharva Vilasrao Aher"</span>
              </Line>
              <Line indent={8} hang={"self.role = ".length}>
                self.role ={" "}
                <span className="text-orange-400">"Aspiring Software Engineer"</span>
              </Line>
              <Line indent={8} hang={"self.education = ".length}>
                self.education ={" "}
                <span className="text-orange-400">
                  "B.E. AI & Data Science | CGPA 8.99"
                </span>
              </Line>
              <Line indent={8} hang={"self.languages = [".length}>
                self.languages = [
                <span className="text-orange-400">"Python"</span>,{" "}
                <span className="text-orange-400">"C++"</span>,{" "}
                <span className="text-orange-400">"Bash"</span>,{" "}
                <span className="text-orange-400">"JavaScript"</span>]
              </Line>
              <Line indent={8} hang={"self.ml_libraries = [".length}>
                self.ml_libraries = [
                <span className="text-orange-400">"TensorFlow"</span>,{" "}
                <span className="text-orange-400">"Scikit-Learn"</span>,{" "}
                <span className="text-orange-400">"NumPy"</span>,{" "}
                <span className="text-orange-400">"Pandas"</span>]
              </Line>
              <Line indent={8} hang={"self.devops = [".length}>
                self.devops = [
                <span className="text-orange-400">"Kubernetes"</span>,{" "}
                <span className="text-orange-400">"Docker"</span>,{" "}
                <span className="text-orange-400">"GitHub Actions"</span>,{" "}
                <span className="text-orange-400">"Prometheus"</span>,{" "}
                <span className="text-orange-400">"Linux"</span>]
              </Line>
              <Line indent={8} hang={"self.tools = [".length}>
                self.tools = [
                <span className="text-orange-400">"Git"</span>,{" "}
                <span className="text-orange-400">"GitHub"</span>,{" "}
                <span className="text-orange-400">"Flask"</span>,{" "}
                <span className="text-orange-400">"MongoDB"</span>]
              </Line>
              <Line indent={8} hang={"self.interests = [".length}>
                self.interests = [
                <span className="text-orange-400">"Deep Learning"</span>,{" "}
                <span className="text-orange-400">"Cloud Computing"</span>,{" "}
                <span className="text-orange-400">"MLOps"</span>]
              </Line>
              <Line indent={8} hang={"self.status = ".length}>
                self.status ={" "}
                <span className="text-orange-400">"Always learning"</span>
              </Line>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
