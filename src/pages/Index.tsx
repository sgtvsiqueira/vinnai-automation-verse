
import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";
import ProjectsSection from "@/components/ui/projects-section";
import AboutSection from "@/components/ui/about-section";
import CTASection from "@/components/ui/cta-section";
import Footer from "@/components/ui/footer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState([
    {
      role: "ai",
      content: "Olá! Sou sua assistente de automação. Descreva em detalhes qual processo você gostaria de automatizar - pode ser sobre vendas, atendimento, marketing, gestão ou qualquer área do seu negócio. Quanto mais detalhes, melhor posso te ajudar!"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    const userMessage = inputValue.trim();
    
    if (!userMessage) {
      toast({
        title: "Erro",
        description: "Por favor, digite sua mensagem",
        variant: "destructive",
      });
      return;
    }

    // Adicionar mensagem do usuário
    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      console.log("Enviando dados para webhook:", {
        message: userMessage,
        timestamp: new Date().toISOString(),
        source: "site_chat"
      });

      const response = await fetch("https://webhookn8n.vsiqueira.online/webhook/site", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          timestamp: new Date().toISOString(),
          source: "site_chat"
        }),
      });

      console.log("Status da resposta:", response.status);
      console.log("Headers da resposta:", response.headers);

      if (response.ok) {
        const data = await response.json();
        console.log("Dados recebidos do webhook:", data);
        
        setMessages([...newMessages, { 
          role: "ai", 
          content: data.response || data.message || "Obrigado pela sua mensagem! Vou analisar seu processo e em breve enviarei sugestões de automação personalizadas."
        }]);
      } else {
        throw new Error(`Erro na resposta do servidor: ${response.status}`);
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setMessages([...newMessages, { 
        role: "ai", 
        content: "Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente em alguns instantes."
      }]);
      toast({
        title: "Erro",
        description: "Erro ao conectar com o assistente. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <ServicesSection />
        <section id="chat-automation" className="py-20 bg-gradient-to-br from-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Como Podemos Automatizar Seu Processo?
              </h2>
              <p className="text-lg text-muted-foreground">
                Converse em tempo real com nossa IA especializada em automação e receba sugestões personalizadas
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg">
                <div className="space-y-4 max-h-96 overflow-y-auto mb-4" id="chat-messages">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex items-start space-x-3 ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.role === 'user' ? 'bg-accent/20' : 'bg-primary/20'
                      }`}>
                        <span className={`text-sm font-medium ${
                          message.role === 'user' ? 'text-accent' : 'text-primary'
                        }`}>
                          {message.role === 'user' ? 'Você' : 'AI'}
                        </span>
                      </div>
                      <div className={`flex-1 rounded-lg p-3 ${
                        message.role === 'user' ? 'bg-accent/10' : 'bg-muted/50'
                      }`}>
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">AI</span>
                      </div>
                      <div className="flex-1 bg-muted/50 rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-75"></div>
                          <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-150"></div>
                          <span className="text-sm text-muted-foreground">Analisando seu processo...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                
                <div className="flex space-x-2">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Descreva seu processo atual em detalhes... Ex: 'Preciso automatizar o atendimento no WhatsApp, hoje respondo manualmente mais de 100 mensagens por dia sobre...'"
                    className="flex-1 min-h-[100px] resize-none rounded-lg border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    disabled={isLoading}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={isLoading || !inputValue.trim()}
                    className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:opacity-90 transition-opacity animate-breathe hover:animate-none disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-none"
                  >
                    {isLoading ? 'Enviando...' : 'Enviar'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProjectsSection />
        <AboutSection />
        <section id="contact">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
