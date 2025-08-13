import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, BarChart3, Search, Globe, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Workflow,
      title: "Torne tarefas cansativas rápidas e automáticas",
      description: "A IA substitui trabalhos manuais e repetitivos — como responder perguntas frequentes ou gerar relatórios — de forma mais rápida e com menos erros. Isso poupa tempo, dinheiro e dor de cabeça mesmo para quem não sabe nada de tecnologia.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: BarChart3,
      title: "Tome decisões com base em dados reais e previsões inteligentes",
      description: "A IA analisa padrões do seu negócio — como vendas ou comportamento de clientes — para te mostrar o que pode dar certo no futuro, como prever demandas ou ajustar estoques.",
      gradient: "from-accent to-primary"
    },
    {
      icon: Bot,
      title: "Deixe o atendimento mais ágil e humanizado ao mesmo tempo",
      description: "Com chatbots inteligentes, é possível responder seus clientes 24/7 com rapidez — mas sem perder a empatia —, melhorando a experiência sem precisar de uma pessoa sempre disponível.",
      gradient: "from-primary-glow to-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Como a IA facilita sua vida
            </span> (sem complicação)
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Torne tarefas cansativas rápidas e automáticas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
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