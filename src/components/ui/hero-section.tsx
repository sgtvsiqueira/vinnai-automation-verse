import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Modern background effects */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,hsl(267_84%_81%_/_0.1)_60deg,transparent_120deg)] animate-pulse" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-float" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-accent rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-breathe" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Modern logo */}
        <div className="w-24 h-24 mx-auto mb-8 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow backdrop-blur-sm border border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-20 animate-pulse" />
          <Bot className="w-12 h-12 text-primary-foreground relative z-10" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-primary bg-clip-text text-transparent">VinnAI</span> — IA ao alcance do seu negócio
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
          Revolucione seu negócio com IA — <span className="text-primary font-semibold">fácil, prática e para todos</span>
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
          Na VinnAI, acreditamos que inteligência artificial não é coisa de filme — e sim uma ferramenta real e acessível para melhorar o dia a dia de qualquer empresa. A IA não escolhe área — ela ajuda todos os setores!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <div className="flex items-center gap-2 text-foreground/80">
            <Zap className="w-5 h-5 text-primary" />
            <span>2 anos de experiência</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <TrendingUp className="w-5 h-5 text-accent" />
            <span>Automações personalizadas</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <Bot className="w-5 h-5 text-primary-glow" />
            <span>Integração com IA</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-smooth text-lg px-10 py-7 rounded-2xl font-semibold backdrop-blur-sm border border-primary/20"
          >
            Ver Como Funciona
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 hover:shadow-elegant hover:scale-105 transition-smooth text-lg px-10 py-7 rounded-2xl font-semibold backdrop-blur-sm"
          >
            Vamos Conversar?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;