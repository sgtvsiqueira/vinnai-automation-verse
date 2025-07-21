import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";
import ProjectsSection from "@/components/ui/projects-section";
import AboutSection from "@/components/ui/about-section";
import CTASection from "@/components/ui/cta-section";
import Footer from "@/components/ui/footer";

const Index = () => {
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
                Conte-nos em detalhes sobre seu processo atual e nossa IA irá analisar e sugerir automações personalizadas
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg">
                <div className="space-y-4 max-h-96 overflow-y-auto mb-4" id="chat-messages">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">AI</span>
                    </div>
                    <div className="flex-1 bg-muted/50 rounded-lg p-3">
                      <p className="text-sm">
                        Olá! Sou sua assistente de automação. Descreva em detalhes qual processo você gostaria de automatizar - pode ser sobre vendas, atendimento, marketing, gestão ou qualquer área do seu negócio. Quanto mais detalhes, melhor posso te ajudar!
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <textarea
                    id="user-message"
                    placeholder="Descreva seu processo atual em detalhes... Ex: 'Preciso automatizar o atendimento no WhatsApp, hoje respondo manualmente mais de 100 mensagens por dia sobre...'"
                    className="flex-1 min-h-[100px] resize-none rounded-lg border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  ></textarea>
                  <button
                    id="send-message"
                    className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:opacity-90 transition-opacity animate-breathe hover:animate-none"
                  >
                    Enviar
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
