import { GraduationCap, Award, Code2, Calendar } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code2, label: "Years Experience", value: "2+" },
    { icon: Award, label: "Projects Completed", value: "15+" },
    { icon: GraduationCap, label: "Certifications", value: "8+" },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Bachelor's in Computer Science",
      institution: "Your University Name",
      description: "Currently pursuing degree with focus on Software Engineering and AI",
    },
    {
      year: "2023",
      title: "Android Development Certification",
      institution: "Online Platform",
      description: "Completed comprehensive Android development bootcamp",
    },
    {
      year: "2022",
      title: "Started Coding Journey",
      institution: "Self-taught",
      description: "Began learning programming with C and Java",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my journey and passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="glass-card p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-primary">My Story</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate software engineering student with a deep interest in Android
              development and full-stack web technologies. My journey in coding began with
              curiosity and has evolved into a commitment to building innovative solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I love exploring new technologies, participating in hackathons, and contributing
              to open-source projects. My goal is to leverage technology to solve real-world
              problems and create meaningful impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me learning about AI, reading tech blogs, or
              working on personal projects that challenge my skills and creativity.
            </p>
          </div>

          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 flex items-center gap-4 hover:border-primary/40 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <stat.icon size={32} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">
            Education & Journey
          </h3>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="p-2 rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Calendar size={20} />
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2"></div>
                  )}
                </div>
                <div className="pb-8 flex-1">
                  <div className="text-primary font-semibold mb-1">{item.year}</div>
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <div className="text-muted-foreground mb-2">{item.institution}</div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
