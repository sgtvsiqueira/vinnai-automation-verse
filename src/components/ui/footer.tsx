import { Bot, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Serviços", href: "#services" },
    { label: "Projetos", href: "#projects" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" },
  ];

  const services = [
    "Automações Personalizadas",
    "Integração com IA",
    "Web Scraping",
    "Análise de Dados",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                VinnAI
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Revolucionamos negócios com tecnologia de ponta que trabalha 24h por dia, aumentando produtividade e reduzindo custos operacionais.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Links Rápidos</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Serviços</h3>
            <div className="space-y-2">
              {services.map((service) => (
                <div key={service} className="text-muted-foreground">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">contato@vinnai.tech</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+55 (71) 98122-6491</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Salvador, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} VinnAI. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-sm">
              Desenvolvido com tecnologia de ponta para automações inteligentes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;