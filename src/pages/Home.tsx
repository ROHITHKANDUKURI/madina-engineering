import { ArrowRight, Target, Users, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-engineering.jpg';
import geometricBg from '@/assets/geometric-bg.jpg';

const Home = () => {
  const services = [
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Delivering accurate and efficient engineering solutions with cutting-edge technology.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our skilled professionals bring decades of experience to every project.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control ensure excellence in every deliverable.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' },
    { number: '10+', label: 'Expert Engineers' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/construction-bg-video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary/75"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Engineering
            <span className="block text-accent">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2 max-w-2xl mx-auto animate-slide-up">
            Madina Engineering Works - Your trusted partner in Nellore
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-slide-up">
            Transforming ideas into reality through precision engineering, 
            innovative solutions, and unwavering commitment to quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/works">
              <Button className="btn-hero">
                View Our Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>

        
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive engineering solutions tailored to meet 
              your specific requirements and exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-professional hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section 
        className="py-20 relative"
        style={{ backgroundImage: `url(${geometricBg})` }}
      >
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Our Vision
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            To be the leading engineering solutions provider, driving innovation 
            and excellence in every project we undertake. We envision a future 
            where our engineering expertise creates lasting value for our clients 
            and contributes to building a better, more efficient world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="flex items-center space-x-3 text-white">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
              <span className="text-lg">Innovation-Driven Solutions</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
              <span className="text-lg">Sustainable Engineering</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
              <span className="text-lg">Client-Centric Approach</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
              <span className="text-lg">Continuous Improvement</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our engineering expertise can bring your vision to life.
          </p>
          <Link to="/contact">
            <Button className="btn-hero">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;