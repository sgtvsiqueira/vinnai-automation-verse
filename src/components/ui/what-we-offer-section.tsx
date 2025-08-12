import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, FileText, Link } from "lucide-react";

const WhatWeOfferSection = () => {
  const offerings = [
    {
      icon: Workflow,
      title: "Automatização descomplicada",
      description: "Inclui tarefas como responder clientes, organizar planilhas, enviar lembretes — tudo no piloto automático.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Bot,
      title: "IA que aprende e ajuda você",
      description: "Se adapta ao que sua empresa precisa: analisa dados, sugere ações inteligentes, tudo de forma fácil e sem jargões técnicos.",
      gradient: "from-accent to-primary"
    },
    {
      icon: FileText,
      title: "Conteúdo que fala com seu cliente",
      description: "Posts, e-mails, redes sociais — programamos o que as pessoas gostam de ver e quando querem ver, sem esforço.",
      gradient: "from-primary-glow to-accent"
    },
    {
      icon: Link,
      title: "Ações que conversam entre si",
      description: "Conectamos suas ferramentas (WhatsApp, planilhas, redes sociais etc.) para criar um sistema que funciona como um só — automático e eficiente.",
      gradient: "from-accent to-primary-glow"
    }
  ];

  return (
    <section className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              O que oferecemos:
            </span> Automação com IA que qualquer pessoa entende
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-primary transition-all duration-500 border-border/50 bg-card/70 backdrop-blur-sm hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${offering.gradient} flex items-center justify-center shadow-glow group-hover:animate-glow`}>
                    <Icon className="w-8 h-8 text-background" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {offering.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed text-center">
                    {offering.description}
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

export default WhatWeOfferSection;