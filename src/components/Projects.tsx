import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Virtual Server",
      description:
        "QuickConnectEase is a native Android app built using Java and XML that enables secure SSH-based remote connections to Ubuntu servers over LAN and the internet, simplifying server access through an intuitive user interface.",
      tech: ["Android", "Java", "Firebase", "Networking"],
      github: "https://github.com/pratikshinde84/Quick-Connect-Ease",
      image: "🖥️",
    },
    {
      title: "Expense Tracker App",
      description:
        "An Android app that automatically detects and extracts debit transactions from SMS across multiple bank formats, handling incomplete data and displaying structured records for easy expense tracking.",
      tech: ["Android", "Java", "Firebase", "SharedPreferences"],
      github: "https://github.com/pratikshinde84/Track-Mate-Pratik/tree/master",
      image: "💰",
    },
    {
      title: "Sponsify",
      description:"A social media–based Android application that connects sponsors with event management teams, allowing organizers to post events and enabling sponsors to discover and fund relevant opportunities.",
      tech: ["Android", "Java", "REST API", "Firebase"],
      github: "https://github.com/pratikshinde84/SPONSI-FY",
      image: "🤝",
    },
    {
      title: "Worker-Hub",
      description:
        "A platform that connects workers with people seeking services, allowing workers to register their skills and enabling users to find suitable workers through search and filter-based discovery.",
      tech: ["Android", "Github", "Firebase", "Docker"],
      github: "https://github.com/pratikshinde84/Worker-Hub",
      image: "👷",
    },
    {
      title: "Mediloon",
      description:
        "An AI-powered web application that enables users to order medicines through a conversational interface using natural language processing, fuzzy search, and multi-turn interactions, combined with a full-stack e-commerce system.",
      tech: ["Python", "Postgres", "FastAPI", "Docker"],
      github: "https://github.com/pratikshinde84/mediloon-backend/tree/main",
      image: "💊",
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
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
