import { Code2, Database, Wrench, BookOpen, Brain, Bot} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "XML", level: 90 },
      ],
    },
    {
      icon: Database,
      title: "Backend & Databases",
      skills: [
        { name: "Firebase", level: 80 },
        { name: "Spring Boot", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 70 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Postman", level: 75 },
        { name: "Android Studio", level: 80 },
        { name: "Kafka", level: 85 },
      ],
    },
    {
      icon: Bot,
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "C/C++", level: 80 },
        { name: "Python", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "Flutter", level: 85 },
      ],
    },
    {
      icon: BookOpen,
      title: "CourseWork",
      skills: [
        { name: "Operating Systems", level: 90 },
        { name: "Computer Networks", level: 75 },
        { name: "Computer Organization", level: 80 },
        { name: "System Design", level: 85 },
        { name: "Blockchain", level: 85 },
      ],
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: [
        { name: "Python", level: 90 },
        { name: "Numpy", level: 75 },
        { name: "Pandas", level: 70 },
        { name: "Scikit-learn", level: 65 },
        { name: "TensorFlow", level: 60 },
      ],
    },
    {
      icon: BookOpen,
      title: "Other skills",
      skills: [
        { name: "Problem solving", level: 90 },
        { name: "Collaborative teamwork", level: 90 },
        { name: "Leadership", level: 90 },
        { name: "Communication", level: 75 },
        { name: "Data Structures", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-card p-8 animate-fade-in hover:border-primary/40 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <category.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-glow-gradient rounded-full transition-all duration-1000 ease-out glow-effect"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center glass-card p-8 animate-fade-in">
          <h3 className="text-2xl font-bold mb-4 text-primary">Always Learning</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Currently exploring: Machine Learning, Cloud Technologies (AWS, Azure), 
            Advanced Android Development, and Modern Web Frameworks
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
