
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/PavanDurgaSaiGupta',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/ch-pavan325374254/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:2200032476cser@gmail.com',
      label: 'Email'
    },
    {
      icon: Phone,
      href: 'tel:+918333875955',
      label: 'Phone'
    }
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-morphism border-b border-cyber-cyan/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-cyber text-xl font-bold neon-text text-cyber-cyan">
            CH. PAVAN DURGA SAI GUPTA
          </div>
          
          <nav className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-lg transition-all duration-300 hover:bg-cyber-red/20"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-cyber-cyan group-hover:text-cyber-red transition-colors duration-300" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-cyber-black border border-cyber-cyan/30 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {label}
                </div>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
