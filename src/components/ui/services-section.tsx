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

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden hover:shadow-primary transition-all duration-700 border-2 border-border/30 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-md hover:scale-[1.02] hover:border-primary/30"
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-full" />
                
                {/* Animated border gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-sm" />
                </div>

                <CardHeader className="text-center relative z-10 pb-8">
                  {/* Enhanced icon container with multiple layers */}
                  <div className="relative mx-auto mb-6">
                    <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-lg group-hover:blur-xl transition-all duration-500" />
                    <div className={`relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl group-hover:shadow-primary/50 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110`}>
                      <div className="absolute inset-1 rounded-xl bg-white/10 backdrop-blur-sm" />
                      <Icon className="relative w-10 h-10 text-background drop-shadow-lg" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-4 leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 px-8 pb-8">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-500" />
                    <CardDescription className="text-muted-foreground leading-relaxed text-lg pl-6">
                      {service.description}
                    </CardDescription>
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

export default ServicesSection;