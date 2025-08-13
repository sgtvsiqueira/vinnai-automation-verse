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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden hover:shadow-primary transition-all duration-700 border-2 border-border/30 bg-gradient-to-br from-card/90 via-card/70 to-card/50 backdrop-blur-lg hover:scale-[1.05] hover:border-primary/40"
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full" />
                  <div className="absolute top-8 right-6 w-1 h-1 bg-accent rounded-full" />
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-primary rounded-full" />
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-accent rounded-full" />
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <CardHeader className="text-center relative z-10 p-8">
                  {/* Multi-layered icon design */}
                  <div className="relative mx-auto mb-6 w-fit">
                    {/* Outer glow */}
                    <div className="absolute inset-0 w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/30 blur-xl group-hover:blur-2xl transition-all duration-500" />
                    {/* Middle layer */}
                    <div className="absolute inset-1 w-18 h-18 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-sm" />
                    {/* Main icon container */}
                    <div className={`relative w-20 h-20 rounded-3xl bg-gradient-to-br ${offering.gradient} flex items-center justify-center shadow-2xl group-hover:shadow-primary/60 transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110`}>
                      <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm" />
                      <div className="absolute inset-3 rounded-xl bg-gradient-to-br from-transparent to-black/10" />
                      <Icon className="relative w-10 h-10 text-background drop-shadow-2xl" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-tight">
                    {offering.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 px-8 pb-8">
                  <div className="relative">
                    {/* Decorative quote mark */}
                    <div className="absolute -top-2 -left-2 text-6xl text-primary/10 font-serif leading-none select-none">"</div>
                    <CardDescription className="text-muted-foreground leading-relaxed text-center relative z-10 pl-4">
                      {offering.description}
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

export default WhatWeOfferSection;