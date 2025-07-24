import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Users, Award, Globe, Handshake } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'TechFlow Industries',
      logo: '🏭',
      category: 'Manufacturing',
      partnership: 'Strategic Partner',
      since: '2019',
      description: 'Leading manufacturing technology provider specializing in automation solutions and industrial equipment.',
      collaboration: 'Joint development of smart manufacturing systems and Industry 4.0 solutions.',
      projects: 12,
      website: 'techflow-industries.com'
    },
    {
      id: 2,
      name: 'GreenPower Solutions',
      logo: '🌱',
      category: 'Renewable Energy',
      partnership: 'Technology Partner',
      since: '2020',
      description: 'Renewable energy specialist focused on solar, wind, and energy storage technologies.',
      collaboration: 'Collaborative engineering for large-scale renewable energy projects and grid integration.',
      projects: 8,
      website: 'greenpower-solutions.com'
    },
    {
      id: 3,
      name: 'AeroSpace Dynamics',
      logo: '✈️',
      category: 'Aerospace',
      partnership: 'Research Partner',
      since: '2018',
      description: 'Advanced aerospace engineering company specializing in materials science and testing.',
      collaboration: 'Joint research in advanced materials and precision engineering for aerospace applications.',
      projects: 6,
      website: 'aerospace-dynamics.com'
    },
    {
      id: 4,
      name: 'Smart City Innovations',
      logo: '🏙️',
      category: 'Infrastructure',
      partnership: 'Strategic Partner',
      since: '2021',
      description: 'Urban technology solutions provider for smart city infrastructure and IoT implementations.',
      collaboration: 'Partnership in developing intelligent infrastructure solutions for modern cities.',
      projects: 15,
      website: 'smartcity-innovations.com'
    },
    {
      id: 5,
      name: 'BioTech Engineering',
      logo: '🧬',
      category: 'Healthcare',
      partnership: 'Technology Partner',
      since: '2020',
      description: 'Biotechnology engineering firm specializing in pharmaceutical and medical device manufacturing.',
      collaboration: 'Joint engineering services for clean room design and pharmaceutical production systems.',
      projects: 9,
      website: 'biotech-engineering.com'
    },
    {
      id: 6,
      name: 'Digital Automation Group',
      logo: '🤖',
      category: 'Automation',
      partnership: 'Preferred Partner',
      since: '2019',
      description: 'Digital transformation and automation solutions provider for industrial applications.',
      collaboration: 'Integrated automation solutions combining our engineering expertise with their digital platforms.',
      projects: 18,
      website: 'digital-automation.com'
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
    { name: 'ISO 14001:2015', description: 'Environmental Management' },
    { name: 'OHSAS 18001', description: 'Health & Safety Management' },
    { name: 'API Certified', description: 'American Petroleum Institute' }
  ];

  const getPartnershipColor = (partnership: string) => {
    switch (partnership) {
      case 'Strategic Partner':
        return 'bg-accent text-accent-foreground';
      case 'Technology Partner':
        return 'bg-engineering-blue text-white';
      case 'Research Partner':
        return 'bg-purple-500 text-white';
      case 'Preferred Partner':
        return 'bg-green-500 text-white';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Partners
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver comprehensive engineering 
            solutions and drive innovation across multiple sectors.
          </p>
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-muted rounded-lg">
            <Handshake className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary">25+</div>
            <div className="text-muted-foreground">Active Partners</div>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <Globe className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary">12</div>
            <div className="text-muted-foreground">Countries</div>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <Users className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary">68</div>
            <div className="text-muted-foreground">Joint Projects</div>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <Award className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary">5</div>
            <div className="text-muted-foreground">Years Average</div>
          </div>
        </div>

        {/* Partners Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Strategic Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <Card key={partner.id} className="card-professional group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{partner.logo}</div>
                      <div>
                        <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                          {partner.name}
                        </CardTitle>
                        <CardDescription>
                          {partner.category}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <Badge className={getPartnershipColor(partner.partnership)}>
                      {partner.partnership}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Since {partner.since}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {partner.description}
                  </p>
                  
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm font-medium text-foreground mb-1">Collaboration:</p>
                    <p className="text-xs text-muted-foreground">
                      {partner.collaboration}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {partner.projects} Joint Projects
                    </span>
                    <div className="flex items-center text-accent hover:text-accent/80 cursor-pointer">
                      <span className="mr-1">{partner.website}</span>
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Certifications & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-professional text-center">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partnership Benefits */}
        <section>
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">
              Partner With Us
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join our network of industry leaders and unlock new opportunities 
              for innovation, growth, and mutual success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-4">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Collaborative Innovation</h4>
                <p className="text-sm text-primary-foreground/80">
                  Work together on cutting-edge projects that push industry boundaries.
                </p>
              </div>
              <div className="p-4">
                <Globe className="h-8 w-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Global Reach</h4>
                <p className="text-sm text-primary-foreground/80">
                  Expand your market presence through our international network.
                </p>
              </div>
              <div className="p-4">
                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Shared Excellence</h4>
                <p className="text-sm text-primary-foreground/80">
                  Benefit from our quality standards and industry certifications.
                </p>
              </div>
            </div>
            <button className="btn-hero bg-accent hover:bg-accent-light">
              Become a Partner
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Partners;