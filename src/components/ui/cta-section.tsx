import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Bot, Send, User, Phone, Mail, Instagram, Globe } from "lucide-react";

const CTASection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    celular: '',
    email: '',
    instagram: '',
    site: '',
    areaAtuacao: '',
    descricaoNegocio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Fire and forget - não espera resposta
      fetch('https://webhookn8n.vsiqueira.online/webhook/site', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Reset form imediatamente
      setFormData({
        nome: '',
        celular: '',
        email: '',
        instagram: '',
        site: '',
        areaAtuacao: '',
        descricaoNegocio: ''
      });
      
      alert('Informações enviadas com sucesso! Entraremos em contato em breve.');
    } catch (error) {
      alert('Erro ao enviar. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="solucao-ia" className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,119,198,0.3),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(56,189,248,0.2),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">Vamos conversar?</span>
          </h2>
          <div className="text-xl text-muted-foreground max-w-4xl mx-auto space-y-4">
            <p>
              Queremos ouvir: qual o maior atrito no seu dia a dia empresarial?
            </p>
            <p>
              Atender cliente, gerar relatórios, postar nas redes, comparar preços, lembrar de compromissos?
            </p>
            <p>
              Conte aqui e nós vamos criar uma proposta personalizada com IA para melhorar sua rotina e resultados — de forma simples e eficiente.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/20 backdrop-blur-xl border-border/30 shadow-glow">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nome completo
                    </Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="celular" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Celular (WhatsApp)
                    </Label>
                    <Input
                      id="celular"
                      name="celular"
                      type="tel"
                      value={formData.celular}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="instagram" className="flex items-center gap-2">
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </Label>
                    <Input
                      id="instagram"
                      name="instagram"
                      type="text"
                      value={formData.instagram}
                      onChange={handleInputChange}
                      placeholder="@seu_instagram"
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="site" className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Site
                    </Label>
                    <Input
                      id="site"
                      name="site"
                      type="url"
                      value={formData.site}
                      onChange={handleInputChange}
                      placeholder="https://seusite.com.br"
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                </div>

                {/* Area of Business */}
                <div className="space-y-2">
                  <Label htmlFor="areaAtuacao" className="flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    Área de atuação
                  </Label>
                  <Input
                    id="areaAtuacao"
                    name="areaAtuacao"
                    type="text"
                    value={formData.areaAtuacao}
                    onChange={handleInputChange}
                    placeholder="Ex: Alimentício, Varejo, Serviços..."
                    required
                    className="bg-background/50 border-border/50"
                  />
                </div>

                {/* Business Description */}
                <div className="space-y-2">
                  <Label htmlFor="descricaoNegocio" className="flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    Descreva seu negócio
                  </Label>
                  <Textarea
                    id="descricaoNegocio"
                    name="descricaoNegocio"
                    rows={6}
                    value={formData.descricaoNegocio}
                    onChange={handleInputChange}
                    placeholder="Ex: Tenho uma loja de alimentação com 3 funcionários. Atendemos clientes presenciais e pelo WhatsApp, mas demora muito para responder. Fazemos controle de estoque manual em planilhas e sempre tem produto em falta. Gostaria de automatizar o atendimento e ter controle melhor do estoque para não perder vendas..."
                    required
                    className="bg-background/50 border-border/50 resize-none"
                  />
                  <p className="text-sm text-muted-foreground">
                    💡 Dica: Conte sobre seu negócio, processos e dificuldades. Vamos criar um plano personalizado para você!
                  </p>
                </div>

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300 text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;