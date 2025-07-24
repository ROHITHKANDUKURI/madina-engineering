import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import port from '@/assets/port.jpg'
import steel_plant from '@/assets/steel_plant.webp'
import vedanta from '@/assets/vedanta.jpg'

const Works = () => {
  const projects = [
    {
      id: 1,
      title: 'Adani Port',
      description: 'Complete Design and Construction of Operator Cabins for Cranes in Ports, Wheel Stopers and Fire Engines.',
      image: port,
      category: 'Industrial',
      location: 'AKPL Port',
      completedDate: '2023',
      technologies: ['CAD Design', 'Fabrication','Instrallations', 'Quality Assurance'],
      client: 'Adani Ports',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Vedanta Aluminum',
      description: 'Fabrication and Maintenance of Wooden Pallets.',
      image: vedanta,
      category: 'Energy',
      location: 'Nellore',
      completedDate: '2025',
      technologies: ['Fabrication','Maintenance'],
      client: 'Vedanta Alumium',
      status: 'Completed'
    },
    
    {
      id: 3,
      title: 'Pushpit Steels Private Limited',
      description: 'Design and Fabrication of Crane and its Parts and Maintenance.',
      image: steel_plant,
      category: 'Infrastructure',
      location: 'Srikalahasti, Tirupathi',
      completedDate: '2025',
      technologies: ['Fabrication', 'Maintenance'],
      client: 'Pushpit Steels Private Limited',
      status: 'Completed'
    },
    
  ];

  const categories = ['All', 'Industrial', 'Energy',  'Infrastructure'];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Previous Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful engineering projects that showcase 
            our expertise, innovation, and commitment to excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant={category === 'All' ? 'default' : 'secondary'}
              className="px-4 py-2 cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="card-professional group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/90">
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {project.location}
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  Completed in {project.completedDate}
                </div>
                
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your engineering vision to life with 
              our proven expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-engineering">
                Start Your Project
              </button>
              <button className="btn-engineering bg-secondary text-secondary-foreground hover:bg-secondary/80">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;