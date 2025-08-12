import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MessageSquare, Share2, BarChart3, DollarSign, MapPin } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Loja de bairro",
      description: "Chatbot no WhatsApp que responde dúvidas de preço, horário ou produtos mesmo quando o dono está longe, ajudando a não perder vendas.",
      icon: MessageSquare,
      tags: ["WhatsApp", "Chatbot", "Atendimento", "Vendas"],
      gradient: "from-primary to-primary-glow"
    },
    {
      id: 2,
      title: "Consultório pequeno",
      description: "Lembretes automáticos de consulta por mensagem e feedbacks pós-atendimento, criando um serviço mais cuidadoso e eficiente sem precisar de staff extra.",
      icon: Share2,
      tags: ["Saúde", "Lembretes", "Feedback", "Automação"],
      gradient: "from-accent to-primary"
    },
    {
      id: 3,
      title: "Consultoria ou escritório",
      description: "Extrai os dados relevantes de relatórios e já monta gráficos em tempo real, pronto pra você decidir o que fazer.",
      icon: BarChart3,
      tags: ["Relatórios", "Análise", "Gráficos", "Decisões"],
      gradient: "from-primary-glow to-accent"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Exemplos práticos
            </span> (para entender de verdade)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-glow transition-all duration-500 border-border/50 bg-card/70 backdrop-blur-sm overflow-hidden"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs bg-secondary/50 text-secondary-foreground border-border/50"
                      >
                        {tag}
                      </Badge>
                    ))}
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

export default ProjectsSection;