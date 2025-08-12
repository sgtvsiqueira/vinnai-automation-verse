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
                className="group hover:shadow-primary transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg group-hover:animate-glow">
                      <Icon className="w-6 h-6 text-primary-foreground" />
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