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
              🚀 Automação de Conteúdo com IA para Redes Sociais
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma ferramenta que cria e publica automaticamente posts nas suas redes sociais usando inteligência artificial
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* What is it */}
            <Card className="border-border bg-card/50 backdrop-blur p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. O que é isso?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Uma ferramenta que cria e publica automaticamente posts nas suas redes sociais (X, Instagram, Facebook, LinkedIn etc.), 
                usando inteligência artificial para escrever os textos, escolher hashtags, emojis e até sugerir imagens.
              </p>
            </Card>

            {/* Why it makes difference */}
            <Card className="border-border bg-card/50 backdrop-blur p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Por que isso faz diferença?</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <strong className="text-foreground">Economia de tempo:</strong> tarefas como escrever e postar manualmente em cada rede social podem levar horas. 
                  Com essa automação, você ganha de 40% a 80% de economia de tempo.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <strong className="text-foreground">Presença constante:</strong> mantém suas redes ativas mesmo quando você está ocupado, 
                  de férias ou focado em outras tarefas.
                </p>
              </div>
            </Card>

            {/* Who benefits */}
            <Card className="border-border bg-card/50 backdrop-blur p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Quem se beneficia disso?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-primary">Médias e pequenas empresas</h3>
                  <p className="text-muted-foreground">
                    Possibilita uma presença digital profissional e regular sem precisar contratar equipe de marketing.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-primary">Autônomos e profissionais liberais</h3>
                  <p className="text-muted-foreground">
                    Dá mais tempo para o que importa, sem deixar de se conectar com o público.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-primary">Consultores e pequenas agências</h3>
                  <p className="text-muted-foreground">
                    Conseguem oferecer conteúdo consistente e escalável para clientes sem esforço manual.
                  </p>
                </div>
              </div>
            </Card>

            {/* How it works */}
            <Card className="border-border bg-card/50 backdrop-blur p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Como funciona, sem complicação</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">1</div>
                  <p className="text-muted-foreground">Você entrega um tema ou ideia.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">2</div>
                  <p className="text-muted-foreground">A IA gera o texto, com formato e emojis certos para cada rede.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">3</div>
                  <p className="text-muted-foreground">Sugestões de imagem são feitas automaticamente.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">4</div>
                  <p className="text-muted-foreground">Você recebe para aprovar (antes de publicar, para garantir que está tudo certo).</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">5</div>
                  <p className="text-muted-foreground">O post é publicado nos dias e horários que você escolheu.</p>
                </div>
              </div>
            </Card>

            {/* Practical benefits */}
            <Card className="border-border bg-card/50 backdrop-blur p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Benefícios práticos</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-muted-foreground">Frequência constante de publicações, sem falhas</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-muted-foreground">Textos adaptados para cada rede, aumentando engajamento</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-muted-foreground">Imagem ou vídeo incluído, sem precisar de designer</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-muted-foreground">Você revisa antes, garantindo tom e qualidade</p>
                </div>
                <div className="flex items-center gap-3 md:col-span-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-muted-foreground">Crescimento sem aumentar o trabalho manual — ajuda a escalar seu atendimento ou negócios</p>
                </div>
              </div>
            </Card>

            {/* Why it works */}
            <Card className="border-border bg-card/50 backdrop-blur p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Veja por que isso funciona</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Em testes, médias e pequenas empresas economizam até metade do tempo dedicado ao marketing de conteúdo.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Quem não automatiza gasta muito tempo copiando e colando em cada rede todos os dias.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section className="py-16 px-4 bg-gradient-dark">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              📞 Quer começar?
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Teste um fluxo piloto com um ou dois posts por semana.
            </p>
            <p className="text-muted-foreground">
              Avalie a economia de tempo e o alcance. Se achar legal, ampliamos a frequência, as redes, a geração de imagem e o pipeline de publicação.
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