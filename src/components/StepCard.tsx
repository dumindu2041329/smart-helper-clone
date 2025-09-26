interface StepCardProps {
  number: number;
  title: string;
  children: React.ReactNode;
  color?: string;
}

const StepCard = ({ number, title, children, color = "bg-primary" }: StepCardProps) => {
  return (
    <div className="gradient-card p-6 md:p-8 rounded-2xl mb-8 transition-smooth hover:transform hover:scale-[1.02]">
      <div className="flex items-start space-x-4">
        <div className={`${color} text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0`}>
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            {title}
          </h3>
          <div className="text-foreground/80 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;