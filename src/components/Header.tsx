import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="text-xl font-semibold text-foreground">AI Tools Hub</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-foreground/80 hover:text-foreground transition-smooth"
          >
            Free APIs
          </Link>
          <Link 
            to="/cursor-steps" 
            className="text-foreground/80 hover:text-foreground transition-smooth"
          >
            Cursor
          </Link>
          <Link 
            to="/warp-steps" 
            className="text-foreground/80 hover:text-foreground transition-smooth"
          >
            Warp
          </Link>
          <a href="#" className="text-foreground/80 hover:text-foreground transition-smooth">
            Windsurf
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </nav>
    </header>
  );
};

export default Header;