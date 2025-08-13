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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-smooth border-border/30 bg-card/70 backdrop-blur-sm hover:scale-105 hover:-translate-y-1 rounded-2xl"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow group-hover:shadow-primary group-hover:scale-110 transition-smooth relative overflow-hidden border border-primary/20">
                      <div className="absolute inset-0 bg-gradient-primary opacity-20 animate-pulse" />
                      <Icon className="w-8 h-8 text-primary-foreground relative z-10" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
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