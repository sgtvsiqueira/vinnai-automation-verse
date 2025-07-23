import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Send, Sparkles, Target, Clock, TrendingUp } from "lucide-react";

const AutomacaoRedesSociais = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{type: 'user' | 'bot', content: string}>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setMessage("");
    setChatHistory(prev => [...prev, { type: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Simulação de resposta da automação
      setTimeout(() => {
        const botResponse = `Perfeito! Baseado em "${userMessage}", vou criar um conteúdo otimizado para suas redes sociais. A automação irá gerar posts personalizados para Instagram, Facebook e LinkedIn, incluindo hashtags relevantes e horários ideais de postagem. Você receberá o conteúdo no seu email em até 5 minutos!`;
        setChatHistory(prev => [...prev, { type: 'bot', content: botResponse }]);
        setIsLoading(false);
        toast({
          title: "Conteúdo sendo gerado!",
          description: "Você receberá o material no seu email em breve.",
        });
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Erro",
        description: "Falha ao processar sua solicitação. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Automação de Redes Sociais
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforme suas ideias em conteúdo viral para múltiplas plataformas com inteligência artificial
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-border bg-card/50 backdrop-blur">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Conteúdo Direcionado</CardTitle>
                <CardDescription>
                  IA analisa seu público e cria posts personalizados para cada plataforma
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card/50 backdrop-blur">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Agendamento Inteligente</CardTitle>
                <CardDescription>
                  Postagens automáticas nos melhores horários para máximo engajamento
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card/50 backdrop-blur">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Análise de Performance</CardTitle>
                <CardDescription>
                  Relatórios detalhados sobre alcance, engajamento e crescimento
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section className="py-16 px-4 bg-gradient-dark">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Teste a Automação Agora
            </h2>
            <p className="text-muted-foreground text-lg">
              Descreva sua ideia e receba conteúdo personalizado para suas redes sociais
            </p>
          </div>

          <Card className="border-border bg-card/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Chat com IA - Gerador de Conteúdo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Chat History */}
              <div className="min-h-[300px] max-h-[400px] overflow-y-auto space-y-4 p-4 bg-background/50 rounded-lg border border-border">
                {chatHistory.length === 0 ? (
                  <div className="text-center text-muted-foreground py-8">
                    <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary/50" />
                    <p>Conte-me sobre seu negócio ou produto para gerar conteúdo personalizado!</p>
                  </div>
                ) : (
                  chatHistory.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-lg ${
                        msg.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary text-secondary-foreground'
                      }`}>
                        {msg.content}
                      </div>
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="flex gap-2">
                <Textarea
                  placeholder="Ex: Tenho uma loja de roupas femininas e quero promover a nova coleção de verão..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[60px] resize-none"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!message.trim() || isLoading}
                  size="lg"
                  className="h-[60px] px-6"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutomacaoRedesSociais;