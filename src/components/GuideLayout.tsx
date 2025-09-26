import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface GuideLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  iconColor: string;
  icon: string;
}

const GuideLayout = ({ children, title, subtitle, iconColor, icon }: GuideLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Header with Back Button */}
      <header className="w-full px-6 py-4 border-b border-border/50">
        <div className="max-w-4xl mx-auto flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/')}
            className="text-foreground/80 hover:text-foreground transition-smooth"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-lg ${iconColor} flex items-center justify-center`}>
              <span className="text-white font-bold text-sm">{icon}</span>
            </div>
            <span className="text-lg font-semibold text-foreground">{title}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Content */}
          {children}
        </div>
      </main>
    </div>
  );
};

export default GuideLayout;