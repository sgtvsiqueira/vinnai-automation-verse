import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo placeholder */}
        <div className="w-20 h-20 mx-auto mb-8 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
          <Bot className="w-10 h-10 text-primary-foreground" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-primary bg-clip-text text-transparent">VinnAI</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
          Transformando pequenas e médias empresas através de 
          <span className="text-primary font-semibold"> automações inteligentes</span> e 
          <span className="text-accent font-semibold"> soluções com IA</span>
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
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-primary transition-all duration-300 text-lg px-8 py-6"
          >
            Ver Projetos
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 py-6"
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;