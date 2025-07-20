import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,119,198,0.3),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(56,189,248,0.2),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para <span className="bg-gradient-accent bg-clip-text text-transparent">Automatizar</span> 
            <br />sua Empresa?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vamos conversar sobre como podemos transformar seus processos com automações 
            inteligentes e soluções de IA personalizadas para o seu negócio.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/20 backdrop-blur-xl border-border/30 shadow-glow">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    Entre em Contato
                  </h3>
                  <p className="text-muted-foreground">
                    Oferecemos uma consulta gratuita para analisar suas necessidades 
                    e propor soluções personalizadas.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <span>Resposta em até 24h</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-accent" />
                      </div>
                      <span>Consultoria gratuita</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-full bg-primary-glow/20 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary-glow" />
                      </div>
                      <span>Suporte personalizado</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300 text-lg py-6"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-accent/50 text-accent hover:bg-accent/10 text-lg py-6"
                  >
                    Agendar Reunião
                    <MessageCircle className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <p className="text-center text-sm text-muted-foreground">
                    Ou envie um email para: <br />
                    <span className="text-primary font-medium">contato@vinnai.com</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;