import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Como Chatbots com IA Estão Revolucionando o Atendimento ao Cliente",
      excerpt: "Descubra como chatbots inteligentes podem transformar sua empresa, reduzindo custos e melhorando a satisfação do cliente em até 80%.",
      category: "Automação",
      date: "9 de dez.",
      readTime: "5 min",
      author: "VinnAI Team",
      tags: ["Chatbot", "IA"],
      gradient: "from-primary to-primary-glow"
    },
    {
      id: 2,
      title: "Automação para Pequenas Empresas: Por Onde Começar",
      excerpt: "Guia completo para pequenos negócios implementarem automação sem complicação. Veja quais processos automatizar primeiro e os resultados esperados.",
      category: "Negócios",
      date: "7 de dez.",
      readTime: "7 min",
      author: "VinnAI Team",
      tags: ["Pequenas Empresas", "Automação"],
      gradient: "from-accent to-primary"
    },
    {
      id: 3,
      title: "IA na Análise de Dados: Como Tomar Decisões Mais Inteligentes",
      excerpt: "Aprenda como a inteligência artificial pode analisar os dados do seu negócio e fornecer insights valiosos para decisões estratégicas mais assertivas.",
      category: "Inteligência Artificial",
      date: "4 de dez.",
      readTime: "6 min",
      author: "VinnAI Team",
      tags: ["IA", "Análise de Dados"],
      gradient: "from-primary-glow to-accent"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Últimas do Blog
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, dicas práticas e tendências sobre IA e automação para manter seu negócio sempre à frente da concorrência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            return (
              <Card 
                key={index} 
                className="group hover:shadow-primary transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      variant="secondary" 
                      className={`bg-gradient-to-r ${post.gradient} text-background`}
                    >
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="text-xs border-border/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost"
                    className="w-full justify-between group-hover:text-primary transition-colors"
                  >
                    Ler mais
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10"
          >
            Ver Todos os Artigos
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;