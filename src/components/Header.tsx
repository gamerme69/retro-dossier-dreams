
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [showPhone, setShowPhone] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/PavanDurgaSaiGupta',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ch-pavan-325374254/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:2200032476cser@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-morphism border-b border-cyber-cyan/20">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="font-cyber text-lg sm:text-xl font-bold neon-text text-cyber-cyan text-center sm:text-left">
            PAVAN DURGA SAI GUPTA
          </div>
          
          <nav className="flex items-center space-x-4 sm:space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-lg transition-all duration-300 hover:bg-cyber-red/20"
                aria-label={label}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-cyan group-hover:text-cyber-red transition-colors duration-300" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-cyber-black border border-cyber-cyan/30 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {label}
                </div>
              </a>
            ))}
            
            {/* Phone Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowPhone(!showPhone)}
                className="group relative p-2 rounded-lg transition-all duration-300 hover:bg-cyber-red/20 flex items-center"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-cyan group-hover:text-cyber-red transition-colors duration-300" />
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-cyber-cyan group-hover:text-cyber-red transition-colors duration-300 ml-1" />
              </button>
              
              {showPhone && (
                <div className="absolute top-full right-0 mt-2 px-3 py-2 bg-cyber-black border border-cyber-cyan/30 rounded text-cyber-cyan text-sm whitespace-nowrap z-10">
                  8333875955
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
