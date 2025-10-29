import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-card py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-primary animate-pulse" /> by{" "}
            <span className="text-gradient font-semibold">Your Name</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
