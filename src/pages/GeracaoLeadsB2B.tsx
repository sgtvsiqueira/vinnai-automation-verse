import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Target, BarChart3, FileSpreadsheet, Zap, Users, TrendingUp, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GeracaoLeadsB2B = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    celular: "",
    email: "",
    busca: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`https://vplcuepyzexsjaulmyan.functions.supabase.co/functions/v1/teste-automacao-leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Solicitação enviada!",
          description: "Você receberá os resultados em seu email e WhatsApp em breve.",
        });
        setFormData({
          nome: "",
          celular: "",
          email: "",
          busca: ""
        });
      } else {
        throw new Error('Erro ao enviar solicitação');
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Falha ao enviar solicitação. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="secondary" className="mb-4">🚀 Automação Inteligente</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Geração Automática de Leads B2B
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transforme buscas no Google Maps em um pipeline de vendas altamente estruturado — sem trabalho manual.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
            Começar Agora
          </Button>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Como Funciona</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">1. Extração Inteligente</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Identificamos empresas no Google Maps conforme seu perfil ideal de cliente (segmento, localização, porte).
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  Capturamos dados como nome, endereço, telefone, site, avaliação e reviews diretamente das fichas cadastradas.
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">2. Enriquecimento via IA</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Com o poder da OpenAI, analisamos e classificamos cada lead:
                </p>
                <ul className="mt-4 text-sm text-muted-foreground space-y-1">
                  <li>• Qualidade do potencial (score)</li>
                  <li>• Relevância comercial</li>
                  <li>• Priorização automática</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileSpreadsheet className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">3. Organização Automática</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Os leads selecionados são automaticamente enviados e organizados em planilhas no Google Sheets.
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  Cada registro contém campos padronizados: dados de contato, score, tags de interesse, status de follow‑up.
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">4. Setup Sem Esforço</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Integração via Google Maps API (sem scraping arriscado) ou por scraping estruturado com cuidados anticaptcha.
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  Fluxo totalmente automatizado: dali, é possível acionar rotinas de outreach, e-mail ou pipeline no CRM.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Por que escolher nossa solução?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Velocidade incomparável</h3>
              <p className="text-muted-foreground">Monte listas segmentadas em minutos, não dias.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alta precisão</h3>
              <p className="text-muted-foreground">Evite leads irrelevantes com scoring e filtros inteligentes.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Escalabilidade real</h3>
              <p className="text-muted-foreground">Gere centenas ou milhares de leads mensais com baixo custo operacional.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ação imediata</h3>
              <p className="text-muted-foreground">Planilhas já entregam nutrição ou envio direto via integração com CRMs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona na prática */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Como funciona na prática?</h2>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Você define:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Segmento alvo</p>
                      <p className="text-sm text-muted-foreground">Ex: bombas d'água industriais, clínicas veterinárias</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Região geográfica</p>
                      <p className="text-sm text-muted-foreground">Área de interesse para busca</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Volume estimado</p>
                      <p className="text-sm text-muted-foreground">Quantidade de leads desejada</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full">
                <span>O sistema executa o workflow completo</span>
              </div>
              <p className="mt-4 text-muted-foreground">coleta → análise IA → classificação → envio à planilha</p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <FileSpreadsheet className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <p className="text-lg font-medium">Você acessa uma planilha pronta para iniciar contatos personalizados.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Para quem é ideal */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Para quem é ideal</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Agências e Consultorias B2B</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Que visam empresas locais ou de médio porte e precisam de leads qualificados constantemente.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Startups de SaaS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  E serviços que querem acelerar sua geração de pipeline com leads altamente segmentados.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Equipes de Vendas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Internas que desejam enriquecer listas com precisão e organização automatizada.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulário de Teste */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary mb-4">
                🚀 Teste nossa automação gratuitamente
              </CardTitle>
              <CardDescription className="text-lg">
                Informe o que você deseja buscar e receba uma amostra dos leads encontrados diretamente no seu email e WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome completo *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="celular">WhatsApp *</Label>
                    <Input
                      id="celular"
                      name="celular"
                      type="tel"
                      value={formData.celular}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="busca">O que você quer buscar? *</Label>
                  <Textarea
                    id="busca"
                    name="busca"
                    value={formData.busca}
                    onChange={handleInputChange}
                    placeholder="Ex: Clínicas veterinárias em São Paulo, Lojas de autopeças em Campinas, Academias de ginástica no Rio de Janeiro..."
                    rows={4}
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Seja específico sobre o tipo de negócio e localização para melhores resultados
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Processando..." : "Testar Automação Gratuita 🎯"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  * Campos obrigatórios. Você receberá uma amostra de até 10 leads qualificados.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GeracaoLeadsB2B;