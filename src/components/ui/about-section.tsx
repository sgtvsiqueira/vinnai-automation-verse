import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Users, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Simples e acessível",
      description: "Você não precisa saber nada de tecnologia. Tornamos tudo fácil de entender."
    },
    {
      icon: Lightbulb,
      title: "Economia real de tempo",
      description: "Processos demorados viram minutos — com menos erros e mais produtividade."
    },
    {
      icon: Users,
      title: "Foco no que importa",
      description: "A IA cuida da rotina; você pode pensar no crescimento do seu negócio."
    },
    {
      icon: CheckCircle,
      title: "Para todos os setores",
      description: "Seja varejo, serviços, produção ou profissional, a IA se adapta à sua realidade."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Por que escolher a VinnAI?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden hover:shadow-primary transition-all duration-500 border-2 border-border/20 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-lg hover:scale-[1.03] hover:border-primary/40"
              >
                {/* Decorative corner elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-sm" />
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-sm" />
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    {/* Enhanced icon container */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-primary blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-2xl group-hover:shadow-primary/50 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                        <div className="absolute inset-1 rounded-xl bg-white/20 backdrop-blur-sm" />
                        <Icon className="relative w-8 h-8 text-primary-foreground drop-shadow-lg" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="relative mb-4">
                        <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {value.title}
                        </h4>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full opacity-60 group-hover:w-20 group-hover:opacity-100 transition-all duration-500" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;