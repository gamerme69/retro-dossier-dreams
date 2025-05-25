
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: '2200032476cser@gmail.com',
      href: 'mailto:2200032476cser@gmail.com',
      color: 'cyber-cyan'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8333875955',
      href: 'tel:+918333875955',
      color: 'cyber-green'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/PavanDurgaSaiGupta',
      href: 'https://github.com/PavanDurgaSaiGupta',
      color: 'cyber-purple'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ch-pavan-325374254/',
      href: 'https://www.linkedin.com/in/ch-pavan-325374254/',
      color: 'cyber-red'
    }
  ];

  return (
    <section className="py-12 sm:py-20 relative px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-cyber text-3xl sm:text-4xl font-bold neon-text text-cyber-cyan mb-4 relative">
            <span className="relative z-10 bg-cyber-black/40 px-2 py-1 rounded">
              <span className="text-cyber-red">[</span>CONTACT_INFO<span className="text-cyber-red">]</span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-red via-cyber-purple to-cyber-cyan mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {contactLinks.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-morphism rounded-lg p-4 sm:p-6 group hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-${contact.color}/20 border border-${contact.color}/30 group-hover:border-${contact.color} transition-colors duration-300`}>
                    <contact.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${contact.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-cyber text-sm sm:text-base font-bold text-${contact.color} mb-1`}>
                      {contact.label.toUpperCase()}
                    </div>
                    <div className="text-cyber-cyan font-mono text-xs sm:text-sm truncate group-hover:text-white transition-colors duration-300">
                      {contact.value}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-cyber-cyan font-mono text-sm">
              <span className="text-cyber-green">STATUS:</span> Ready for new opportunities
            </p>
            <p className="text-cyber-purple font-mono text-xs mt-2">
              Response time: &lt; 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
