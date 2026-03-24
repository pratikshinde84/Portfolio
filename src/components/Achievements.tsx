import { Trophy, Award, Medal, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Star,
      title: "Vice President, Tech Club",
      event: "Hackit - Club",
      description: "Technical club at SGGSIE&T Nanded",
      date: "2025-2026",
    },
    {
      icon: Medal,
      title: "GATE Qualified",
      event: "Graduate Aptitude Test in Engineering",
      description: "Qualified in GATE 2026 from Computer Science",
      date: "March 2026",
    },
    {
      icon: Award,
      title: "Android Developer Certification",
      event: "Google Associate Certification",
      description: "Successfully completed Android development certification",
      date: "January 2024",
    },
    {
      icon: Star,
      title: "Technical Lead, ITSA",
      event: "Information Technology Student Association",
      description: "Organized workshops and coding competitions for IT students at SGGSIE&T",
      date: "2025-2026",
    },
    {
      icon: Medal,
      title: "HackHound 3.0 finalist",
      event: "National Level Hackathon",
      description: "SRM Institute of Science and Technology, Gaziabad",
      date: "Feb 2025",
    },
    {
      icon: Medal,
      title: "Reckon 6.0 Finalist",
      event: "National Level Hackathon",
      description: "Jodhpur Institute of Engineering and Technology",
      date: "April 2025",
    },
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Achievements & Awards
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition and milestones throughout my coding journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:border-primary/40 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <achievement.icon size={32} />
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {achievement.title}
              </h3>

              <div className="text-primary font-semibold mb-2">{achievement.event}</div>

              <p className="text-muted-foreground mb-3">{achievement.description}</p>

              <div className="text-sm text-muted-foreground">{achievement.date}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center glass-card p-8 animate-fade-in">
          <h3 className="text-2xl font-bold mb-4 text-primary">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Java Programming",
              "Android Development",
              "Glide",
              "Cryptography",
              "Docker",
              "Python",
              "Data Structures",
              "Cybersecurity",
            ].map((cert, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full glass-card text-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
