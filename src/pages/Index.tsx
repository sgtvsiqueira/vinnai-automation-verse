import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";
import WhatWeOfferSection from "@/components/ui/what-we-offer-section";
import ProjectsSection from "@/components/ui/projects-section";
import AboutSection from "@/components/ui/about-section";
import BlogSection from "@/components/ui/blog-section";
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
        <WhatWeOfferSection />
        <ProjectsSection />
        <AboutSection />
        <BlogSection />
        <section id="contact">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
