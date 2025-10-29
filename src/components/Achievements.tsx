import { Trophy, Award, Medal, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Hackathon Winner",
      event: "College Tech Fest 2024",
      description: "First place for innovative mobile app solution",
      date: "March 2024",
    },
    {
      icon: Medal,
      title: "Coding Competition",
      event: "HackerRank Challenge",
      description: "Top 100 ranking in Data Structures competition",
      date: "February 2024",
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
      title: "Open Source Contributor",
      event: "GitHub Contributions",
      description: "50+ contributions to various open-source projects",
      date: "2023-2024",
    },
    {
      icon: Trophy,
      title: "Smart India Hackathon",
      event: "National Level Competition",
      description: "Finalist in Software Edition",
      date: "August 2023",
    },
    {
      icon: Medal,
      title: "CodeChef Rating",
      event: "Competitive Programming",
      description: "Achieved 4-star rating on CodeChef",
      date: "2023",
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
              "React Fundamentals",
              "Node.js",
              "MongoDB",
              "Python",
              "Data Structures",
              "Web Development",
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
