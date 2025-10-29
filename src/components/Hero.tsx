import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const skills = ["Android Developer", "Full Stack Developer", "Java Expert", "React Enthusiast"];
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = skills[skillIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentSkill.length) {
            setDisplayText(currentSkill.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentSkill.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setSkillIndex((skillIndex + 1) % skills.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, skillIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Your Name</span>
          </h1>

          <div className="text-2xl md:text-3xl text-muted-foreground mb-2">
            Aspiring Software Engineer
          </div>

          <div className="text-xl md:text-2xl h-8 text-primary font-semibold mb-8">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Passionate about building innovative solutions with modern technologies.
            Specialized in Android development and full-stack web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
