import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, Clock, DollarSign, Building } from 'lucide-react';

const Contracts = () => {
  const ongoingContracts = [
    {
      id: 1,
      title: 'Smart City Infrastructure Project',
      client: 'Metro City Council',
      value: '$15.2M',
      startDate: '2024-01-15',
      endDate: '2025-06-30',
      progress: 35,
      status: 'In Progress',
      description: 'Comprehensive smart city infrastructure including IoT sensors, traffic management systems, and energy-efficient lighting across the metropolitan area.',
      keyDeliverables: ['Traffic Management System', 'Smart Lighting Network', 'IoT Sensor Installation', 'Data Analytics Platform']
    },
    {
      id: 2,
      title: 'Manufacturing Automation Upgrade',
      client: 'Industrial Solutions Corp',
      value: '$8.5M',
      startDate: '2024-03-01',
      endDate: '2024-12-15',
      progress: 60,
      status: 'In Progress',
      description: 'Complete automation upgrade for three manufacturing facilities including robotic systems, quality control, and predictive maintenance.',
      keyDeliverables: ['Robotic Assembly Lines', 'Quality Control Systems', 'Predictive Maintenance', 'Staff Training']
    },
    {
      id: 3,
      title: 'Renewable Energy Grid Integration',
      client: 'Green Energy Alliance',
      value: '$22.8M',
      startDate: '2024-02-01',
      endDate: '2025-08-30',
      progress: 25,
      status: 'In Progress',
      description: 'Integration of renewable energy sources into the regional power grid with advanced storage and distribution systems.',
      keyDeliverables: ['Grid Integration Systems', 'Energy Storage Solutions', 'Distribution Network', 'Monitoring Systems']
    }
  ];

  const completedContracts = [
    {
      id: 4,
      title: 'Pharmaceutical Production Facility',
      client: 'HealthTech Pharmaceuticals',
      value: '$12.3M',
      completedDate: '2024-01-30',
      duration: '18 months',
      description: 'Design and construction of a state-of-the-art pharmaceutical production facility with full regulatory compliance.',
      achievements: ['FDA Compliance Achieved', 'Zero Safety Incidents', 'Delivered 2 Weeks Early', '98% Client Satisfaction']
    },
    {
      id: 5,
      title: 'Aerospace Testing Laboratory',
      client: 'AeroSpace Technologies',
      value: '$9.7M',
      completedDate: '2023-11-15',
      duration: '14 months',
      description: 'Advanced testing laboratory for aerospace components with specialized equipment and environmental chambers.',
      achievements: ['ISO 17025 Certification', 'Advanced Testing Capabilities', 'Environmental Compliance', '100% Quality Standards Met']
    },
    {
      id: 6,
      title: 'Water Treatment Expansion',
      client: 'Regional Water Authority',
      value: '$18.5M',
      completedDate: '2023-09-22',
      duration: '24 months',
      description: 'Expansion of regional water treatment capacity serving 500,000 additional residents with advanced filtration.',
      achievements: ['Capacity Doubled', 'Water Quality Improved', 'Environmental Awards', 'Community Recognition']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-accent text-accent-foreground';
      case 'Completed':
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
            Our Contracts
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our ongoing and completed contracts that demonstrate our 
            commitment to delivering exceptional engineering solutions.
          </p>
        </div>

        {/* Ongoing Contracts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Ongoing Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {ongoingContracts.map((contract) => (
              <Card key={contract.id} className="card-professional">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-primary mb-2">
                        {contract.title}
                      </CardTitle>
                      <CardDescription>
                        {contract.client}
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(contract.status)}>
                      {contract.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {contract.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-accent" />
                      <span className="font-medium">{contract.value}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-accent" />
                      <span>{new Date(contract.endDate).getFullYear()}</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">{contract.progress}%</span>
                    </div>
                    <Progress value={contract.progress} className="h-2" />
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Key Deliverables:</p>
                    <div className="flex flex-wrap gap-1">
                      {contract.keyDeliverables.map((deliverable) => (
                        <Badge key={deliverable} variant="secondary" className="text-xs">
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Completed Contracts */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8">Recently Completed</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {completedContracts.map((contract) => (
              <Card key={contract.id} className="card-professional">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-primary mb-2">
                        {contract.title}
                      </CardTitle>
                      <CardDescription>
                        {contract.client}
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-500 text-white">
                      Completed
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {contract.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-accent" />
                      <span className="font-medium">{contract.value}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-accent" />
                      <span>{contract.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    <span>Completed: {new Date(contract.completedDate).toLocaleDateString()}</span>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Key Achievements:</p>
                    <div className="space-y-1">
                      {contract.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="mt-20">
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-primary text-center mb-8">
              Contract Performance
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">$87M+</div>
                <div className="text-muted-foreground">Total Contract Value</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">24</div>
                <div className="text-muted-foreground">Active Contracts</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-muted-foreground">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">Client Retention</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contracts;