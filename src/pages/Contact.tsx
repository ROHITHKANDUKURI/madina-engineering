import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Wrench
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    'Industrial Engineering',
    'Automation Solutions',
    'Project Management',
    'Quality Assurance',
    'Technical Consulting',
    'Research & Development',
    'Other'
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Main Office',
      details: ['Industrial Area, Nellore', 'Andhra Pradesh 524001', 'India']
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 799 577 6135', '+91 957 345 3546']
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['subahanmech1989@gmail.com','madinaweldingworks@gmail.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 8:00 AM - 8:00 PM', 'Sunday: Closed']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next engineering project? Get in touch with our 
            team of experts to discuss your requirements and explore solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-accent" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {services.map((service) => (
                        <Badge
                          key={service}
                          variant={formData.service === service ? "default" : "secondary"}
                          className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => setFormData({ ...formData, service })}
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-engineering w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-professional">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Stats */}
            <Card className="card-professional">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-primary mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-accent" />
                  Why Choose Us?
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Response Time</span>
                    <span className="font-medium text-primary">&lt; 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Project Success Rate</span>
                    <span className="font-medium text-primary">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Years of Experience</span>
                    <span className="font-medium text-primary">5+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Engineers</span>
                    <span className="font-medium text-primary">5+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
<section className="mt-16">
  <Card className="card-professional overflow-hidden">
    <CardHeader>
      <CardTitle className="text-2xl text-primary flex items-center">
        <MapPin className="h-6 w-6 mr-2 text-accent" />
        Our Location
      </CardTitle>
    </CardHeader>
    <CardContent className="p-0">
      <iframe
        title="Madina Engineering Works Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1748.549017720439!2d79.94756633953153!3d14.402986073987813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf2f6b14ae12f%3A0x6a13753aa37955a3!2sAuto%20Nagar%2C%20Nellore%2C%20Andhra%20Pradesh%20524004!5e1!3m2!1sen!2sin!4v1753363110006!5m2!1sen!2sin"
        width="100%"
        height="320"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 w-full h-64 md:h-80"
      />
      
    </CardContent>
  </Card>
</section>


        {/* Emergency Contact */}
        <section className="mt-16">
          <Card className="card-elevated border-accent/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <Wrench className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Emergency Engineering Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  Need urgent engineering assistance? Our emergency response team 
                  is available 24/7 for critical situations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+917995776135">
                    <Button className="btn-engineering">
                      Emergency Hotline: +91 799 577 6135
                    </Button>
                  </a>
                  <a href="mailto:subahanmech1989@gmail.com">
                    <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold px-6 py-3 rounded-lg">
                      subahanmech1989@gmail.com
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;