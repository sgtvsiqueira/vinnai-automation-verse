import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Users, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    "2 anos de experiência em automações",
    "Especialista em integrações com IA",
    "Foco em pequenas e médias empresas",
    "Soluções personalizadas e escaláveis"
  ];

  const values = [
    {
      icon: Target,
      title: "Precisão",
      description: "Cada automação é desenvolvida com foco na eficiência e resultados mensuráveis."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Utilizamos as mais recentes tecnologias de IA para criar soluções únicas."
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Trabalhamos junto ao cliente para entender suas necessidades específicas."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sobre a <span className="bg-gradient-primary bg-clip-text text-transparent">VinnAI</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Somos uma empresa especializada em transformar processos empresariais através de 
                automações inteligentes e soluções com inteligência artificial. Com 2 anos de 
                experiência no mercado, focamos em pequenas e médias empresas que buscam otimizar 
                suas operações e crescer de forma sustentável.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa missão é democratizar o acesso à tecnologia avançada, oferecendo soluções 
                personalizadas que se adaptam às necessidades específicas de cada cliente.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Nossos Diferenciais</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                Web Scraping
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-accent/10 text-accent border-accent/20">
                Machine Learning
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-primary-glow/10 text-primary-glow border-primary-glow/20">
                Análise de Dados
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                Automação
              </Badge>
            </div>
          </div>

          {/* Right Column - Values Cards */}
          <div className="space-y-6">
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
      </div>
    </section>
  );
};

export default AboutSection;