import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MessageSquare, Share2, Youtube, DollarSign, MapPin } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "ChatBot com RAG",
      description: "Sistema de chatbot inteligente com Retrieval-Augmented Generation, capaz de responder perguntas complexas baseadas em documentos específicos da empresa.",
      icon: MessageSquare,
      tags: ["IA", "NLP", "RAG", "Chatbot"],
      gradient: "from-primary to-primary-glow",
      featured: true
    },
    {
      id: 2,
      title: "Automação de Redes Sociais",
      description: "Criação automática de conteúdo para múltiplas plataformas sociais usando IA, com agendamento inteligente e otimização de engajamento.",
      icon: Share2,
      tags: ["Social Media", "IA", "Automação", "Conteúdo"],
      url: "/automacao-redes-sociais",
      gradient: "from-accent to-primary"
    },
    {
      id: 3,
      title: "Monitor de Canal YouTube",
      description: "Sistema de monitoramento automatizado de canais favoritos no YouTube através de RSS feeds com notificações em tempo real.",
      icon: Youtube,
      tags: ["YouTube", "RSS", "Monitoramento", "Notificações"],
      url: "https://n8n.io/workflows/3003-monitor-favorite-youtube-channels-through-rss-feeds-and-receive-notifications/",
      gradient: "from-primary-glow to-accent"
    },
    {
      id: 4,
      title: "Pesquisa de Preços Competitivos",
      description: "Monitoramento automatizado de preços da concorrência com web scraping, integração com Google Sheets e alertas via Telegram.",
      icon: DollarSign,
      tags: ["Web Scraping", "Preços", "Google Sheets", "Telegram"],
      url: "https://n8n.io/workflows/4640-competitor-price-monitoring-with-web-scrapinggoogle-sheets-and-telegram/",
      gradient: "from-accent to-primary-glow"
    },
    {
      id: 5,
      title: "Geração de Leads B2B",
      description: "Extração automatizada de leads comerciais do Google Maps usando OpenAI para classificação e organização em Google Sheets.",
      icon: MapPin,
      tags: ["Lead Generation", "Google Maps", "OpenAI", "B2B"],
      url: "https://n8n.io/workflows/3443-scrape-business-leads-from-google-maps-using-openai-and-google-sheets/",
      gradient: "from-primary to-accent"
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
              Projetos em Destaque
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça algumas das soluções que desenvolvemos para automatizar e otimizar 
            processos empresariais com tecnologia de ponta
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className={`group hover:shadow-glow transition-all duration-500 border-border/50 bg-card/70 backdrop-blur-sm overflow-hidden ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
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
                          {project.featured && (
                            <Badge className="ml-2 bg-gradient-primary text-primary-foreground">
                              Destaque
                            </Badge>
                          )}
                        </CardTitle>
                      </div>
                    </div>
                    {project.url && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        asChild
                      >
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
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
                  
                  {project.url && (
                    <Button 
                      className="w-full bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 border border-primary/20 text-foreground animate-pulse hover:animate-none"
                      asChild
                    >
                      <a 
                        href={project.url} 
                        target={project.url.startsWith('/') ? "_self" : "_blank"} 
                        rel={project.url.startsWith('/') ? "" : "noopener noreferrer"}
                      >
                        Quero Testar
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
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