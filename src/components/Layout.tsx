import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Previous Works', href: '/works' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Wrench className="h-8 w-8 text-accent" />
              <span className="font-bold text-xl text-primary">Madina Engineering Works</span>
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-accent bg-accent/10'
                      : 'text-foreground hover:text-accent hover:bg-accent/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Wrench className="h-8 w-8 text-accent" />
                <span className="font-bold text-xl">Madina Engineering Works</span>
              </div>
              <p className="text-primary-foreground/80 max-w-md">
                Delivering excellence in engineering solutions with precision, innovation, 
                and unwavering commitment to quality.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Industrial Engineering</li>
                <li>Project Management</li>
                <li>Quality Assurance</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>+91 79957 76135, 95734 53546</li>
                <li>subahanmech1989@gmail.com</li>
                <li>Auto Nagar, Nellore</li>
                <li>Andhra Pradesh-524004</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-light/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Madina Engineering Works. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;