import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Bot, Send, User, Phone, Mail } from "lucide-react";

const CTASection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    celular: '',
    email: '',
    descricaoDesafio: ''
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
      const response = await fetch('https://webhookn8n.vsiqueira.online/webhook/site', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        // Reset form
        setFormData({
          nome: '',
          celular: '',
          email: '',
          descricaoDesafio: ''
        });
        alert('Desafio enviado com sucesso! Entraremos em contato em breve.');
      } else {
        alert('Erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      alert('Erro ao enviar. Verifique sua conexão e tente novamente.');
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
            <Bot className="w-12 h-12" />
            Conte-me seu <span className="bg-gradient-accent bg-clip-text text-transparent">desafio</span>
          </h2>
          <div className="text-xl text-muted-foreground max-w-4xl mx-auto space-y-4">
            <p>
              Quais são os problemas ou processos que você deseja automatizar ou solucionar na sua empresa?
            </p>
            <p>
              Descreva-os brevemente abaixo - pode citar quantos problemas desejar e seja o mais detalhista possível 
              para melhor entendimento. Eu entrarei em contato com uma proposta personalizada usando inteligência 
              artificial para aumentar sua eficiência e resultados.
            </p>
            <p className="text-lg font-medium text-primary">
              A resposta será totalmente personalizada com base em IA para suas necessidades específicas!
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

                {/* Challenge Description */}
                <div className="space-y-2">
                  <Label htmlFor="descricaoDesafio" className="flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    Descreva seus desafios
                  </Label>
                  <Textarea
                    id="descricaoDesafio"
                    name="descricaoDesafio"
                    rows={6}
                    value={formData.descricaoDesafio}
                    onChange={handleInputChange}
                    placeholder="Ex: Quero automatizar o atendimento ao cliente pelo WhatsApp e reduzir o tempo de resposta em até 70%. Também preciso automatizar a geração de relatórios de vendas que hoje leva 3 horas por dia..."
                    required
                    className="bg-background/50 border-border/50 resize-none"
                  />
                  <p className="text-sm text-muted-foreground">
                    💡 Dica: Quanto mais detalhes você fornecer, melhor será nossa proposta personalizada!
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
                    "Enviar"
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