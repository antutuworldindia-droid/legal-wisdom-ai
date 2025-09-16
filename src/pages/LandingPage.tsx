import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Upload, Brain, Shield, FileText, Zap, Star } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Enhanced scroll reveal animation
      const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
      scrollRevealElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < window.innerHeight - elementVisible) {
          setTimeout(() => {
            element.classList.add('visible');
          }, index * 150);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Upload,
      title: "Upload Sources",
      description: "Drag and drop your legal PDFs instantly",
      preview: "PDF Upload Interface"
    },
    {
      icon: Brain,
      title: "Instant Insights",
      description: "AI analyzes and summarizes in seconds",
      preview: "AI Analysis Dashboard"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your documents stay completely private",
      preview: "Security Dashboard"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero font-sans relative overflow-hidden">
      {/* Floating Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="particle w-32 h-32 top-1/4 left-1/4"
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`
          }}
        />
        <div 
          className="particle w-24 h-24 top-3/4 right-1/4"
          style={{
            transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.03}px)`
          }}
        />
        <div 
          className="particle w-40 h-40 bottom-1/4 left-1/3"
          style={{
            transform: `translate(${scrollY * 0.06}px, ${-scrollY * 0.04}px)`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-filter backdrop-blur-lg bg-background/10 border-b border-border/20">
        <div className="container mx-auto px-8 py-4 flex justify-between items-center">
          <div className="heading-sans text-xl font-medium text-foreground">
            LegalAI
          </div>
          <div className="hidden md:flex items-center gap-8 text-muted-foreground">
            <span className="hover:text-foreground transition-smooth cursor-pointer">Overview</span>
            <span className="hover:text-foreground transition-smooth cursor-pointer">Features</span>
            <span className="hover:text-foreground transition-smooth cursor-pointer">Contact</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + scrollY * 0.01}% ${50 + scrollY * 0.005}%, hsl(var(--primary) / 0.1) 0%, transparent 70%)`,
            transform: `scale(${1 + scrollY * 0.0001})`
          }}
        />
        
        <div className="container mx-auto px-8 text-center relative z-10 max-w-4xl">
          <div 
            className="opacity-0 animate-fade-in-up"
            style={{
              transform: `translateY(${-scrollY * 0.1}px)`
            }}
          >
            <h1 className="heading-sans text-6xl md:text-7xl lg:text-8xl mb-8 font-light leading-tight text-foreground">
              Understand Legal Documents
              <span className="bg-gradient-primary bg-clip-text text-transparent block mt-4 font-medium">
                Smarter
              </span>
            </h1>
          </div>
          
          <p 
            className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed font-light opacity-0 animate-fade-in-up"
            style={{animationDelay: '0.3s'}}
          >
            AI that helps you analyze, summarize, and reason with your legal PDFs.
          </p>

          <div 
            className="opacity-0 animate-fade-in-up"
            style={{animationDelay: '0.6s'}}
          >
            <Button 
              size="lg"
              className="glass-button px-12 py-6 text-lg font-medium rounded-3xl text-primary-foreground hover:scale-105 transition-smooth"
              onClick={() => navigate("/chat")}
            >
              Try Now
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>

          <div 
            className="flex items-center justify-center gap-12 mt-20 text-muted-foreground opacity-0 animate-fade-in-up"
            style={{animationDelay: '0.9s'}}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium">No Sign-up Required</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Instant Analysis</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium">Completely Private</span>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Feature Sections */}
      {features.map((feature, index) => (
        <section 
          key={feature.title}
          className="min-h-screen flex items-center relative"
          style={{
            background: `linear-gradient(${index % 2 === 0 ? '135deg' : '225deg'}, 
              hsl(var(--background)) 0%, 
              hsl(var(--primary) / 0.02) 50%, 
              hsl(var(--background)) 100%)`
          }}
        >
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              transform: `translateY(${scrollY * 0.1 * (index + 1)}px)`
            }}
          >
            <div className={`absolute ${index % 2 === 0 ? 'top-1/4 right-1/4' : 'bottom-1/4 left-1/4'} w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl`} />
          </div>
          
          <div className="container mx-auto px-8 relative z-10">
            <div className={`grid lg:grid-cols-2 gap-20 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`scroll-reveal ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="mb-8 p-6 bg-gradient-glass rounded-3xl w-fit backdrop-filter backdrop-blur-lg border border-border/20">
                  <feature.icon className="h-12 w-12 text-primary" />
                </div>
                <h2 className="heading-sans text-4xl md:text-5xl mb-6 font-light text-foreground">
                  {feature.title}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-light mb-8">
                  {feature.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span>Powered by advanced AI technology</span>
                </div>
              </div>
              
              <div className={`scroll-reveal ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <Card 
                  className="p-12 bg-gradient-glass backdrop-filter backdrop-blur-lg border border-border/20 rounded-3xl shadow-glass hover:shadow-glow-primary transition-smooth"
                  style={{
                    transform: `translateY(${-scrollY * 0.05}px) rotateX(${scrollY * 0.02}deg)`
                  }}
                >
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-8 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <feature.icon className="h-16 w-16 text-white" />
                    </div>
                    <h3 className="heading-sans text-xl mb-4 font-medium text-foreground">
                      {feature.preview}
                    </h3>
                    <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full animate-pulse"
                        style={{
                          width: `${70 + (index * 10)}%`,
                          animationDelay: `${index * 0.5}s`
                        }}
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section className="py-32 relative">
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, hsl(var(--primary) / 0.05) 0%, transparent 70%)`,
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        />
        
        <div className="container mx-auto px-8 text-center relative z-10">
          <div className="scroll-reveal max-w-3xl mx-auto">
            <h2 className="heading-sans text-5xl md:text-6xl mb-12 font-light text-foreground">
              Ready to Get Started?
            </h2>
            
            <Button 
              size="lg"
              className="glass-button px-16 py-6 text-xl font-medium rounded-3xl text-primary-foreground hover:scale-105 transition-smooth shadow-glow-primary"
              onClick={() => navigate("/chat")}
            >
              Start Analysis Now
              <ArrowRight className="ml-4 h-6 w-6" />
            </Button>
            
            <p className="text-muted-foreground mt-8 font-light">
              No credit card required • Instant setup • Completely secure
            </p>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-16 border-t border-border/20 backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-8 text-center">
          <p className="text-muted-foreground font-light">
            &copy; 2024 LegalAI. Transforming legal document analysis with AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;