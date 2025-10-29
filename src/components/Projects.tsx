import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description:
        "Full-featured Android e-commerce application with Firebase backend, real-time inventory, and secure payment integration.",
      tech: ["Android", "Java", "Firebase", "Material Design"],
      github: "https://github.com",
      image: "🛒",
    },
    {
      title: "Task Management Web App",
      description:
        "Responsive web application for task and project management with drag-and-drop interface and real-time collaboration.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com",
      image: "📋",
    },
    {
      title: "Weather Forecast App",
      description:
        "Android weather application with location services, 7-day forecasts, and beautiful weather animations.",
      tech: ["Android", "Java", "REST API", "XML"],
      github: "https://github.com",
      image: "🌤️",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with interactive charts and real-time data visualization.",
      tech: ["React", "Express.js", "MySQL", "Chart.js"],
      github: "https://github.com",
      image: "📊",
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with group messaging, file sharing, and end-to-end encryption.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      github: "https://github.com",
      image: "💬",
    },
    {
      title: "Fitness Tracker",
      description:
        "Android fitness tracking app with workout plans, calorie counter, and progress tracking features.",
      tech: ["Android", "Kotlin", "SQLite", "Material Design"],
      github: "https://github.com",
      image: "💪",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:border-primary/40 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                  <span>Live</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
