import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, BarChart3, Search, Globe, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Workflow,
      title: "Automações Personalizadas",
      description: "Criamos fluxos automatizados únicos para otimizar os processos da sua empresa, economizando tempo e recursos.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Bot,
      title: "Integração com IA",
      description: "Implementamos soluções de inteligência artificial para tornar seus processos mais inteligentes e eficientes.",
      gradient: "from-accent to-primary"
    },
    {
      icon: Search,
      title: "Web Scraping",
      description: "Coletamos dados valiosos da web de forma automatizada para alimentar suas análises e decisões estratégicas.",
      gradient: "from-primary-glow to-accent"
    },
    {
      icon: BarChart3,
      title: "Análise de Dados com IA",
      description: "Transformamos seus dados em insights acionáveis utilizando algoritmos de machine learning e IA.",
      gradient: "from-accent to-primary-glow"
    },
    {
      icon: Globe,
      title: "Automação de Redes Sociais",
      description: "Automatizamos sua presença digital com posts inteligentes e gestão otimizada de conteúdo.",
      gradient: "from-primary to-accent"
    },
    {
      icon: Zap,
      title: "Integração de Sistemas",
      description: "Conectamos diferentes ferramentas e plataformas para criar um ecossistema digital integrado e eficiente.",
      gradient: "from-primary-glow to-primary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Nossos Serviços
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em automação e inteligência artificial 
            para transformar a eficiência da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-primary transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-glow group-hover:animate-glow`}>
                    <Icon className="w-8 h-8 text-background" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;