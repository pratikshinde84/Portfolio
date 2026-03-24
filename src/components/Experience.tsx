import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Android Development Intern",
      company: "Mountreach Solutions Pvt. Ltd.",
      location: "Remote",
      period: "Sept 2024 - Dec 2024",
      description: [
        "Developed and maintained Android applications using Java",
        "Collaborated with cross-functional teams to implement new features",
        "Improved app performance by 30% through code optimization",
        "Participated in code reviews and agile development processes",
      ],
      technologies: ["Android", "Java", "Postman", "Firebase"],
    },
    {
      title: "Java Developer Intern",
      company: "Codenova Solutions",
      location: "Pune, India",
      period: "Jan 2026 - Mar 2026",
      description: [
        "Built a secure web application using Spring Boot and Spring Security",
        "Developed RESTful APIs (GET, POST, PUT, DELETE) for client–server communication",
        "Implemented input validation, exception handling, and role-based access control",
        "Integrated MongoDB for data storage and optimized backend performance"
      ],
      technologies: ["React", "Spring", "Java", "Mysql"],
    },
    // {
    //   title: "Freelance Developer",
    //   company: "Self-Employed",
    //   location: "Remote",
    //   period: "2023 - Present",
    //   description: [
    //     "Developed custom mobile and web solutions for local businesses",
    //     "Managed complete project lifecycle from requirements to deployment",
    //     "Provided technical consultation and support to clients",
    //     "Built portfolio of 10+ successful projects",
    //   ],
    //   technologies: ["Full Stack", "Android", "Firebase", "React"],
    // },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and practical experience in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:border-primary/40 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gradient mb-1">
                        {exp.title}
                      </h3>
                      <div className="text-lg font-semibold text-foreground mb-1">
                        {exp.company}
                      </div>
                      <div className="text-muted-foreground">{exp.location}</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold mt-2 md:mt-0">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-4 ml-11">
                {exp.description.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 ml-11">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center glass-card p-8 max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Looking for Opportunities
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking internship and full-time opportunities in software
            development, particularly in Android development and full-stack roles.
            Feel free to reach out!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
