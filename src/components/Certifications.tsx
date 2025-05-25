
const Certifications = () => {
  const certifications = [
    'Salesforce AI Associate Certification',
    'Automation Anywhere Certification',
    'Multicloud Network Associate Certification',
    'AWS Fundamentals and Cloud Architect Badges (Credly)',
    'MongoDB DBA certification(Credly)'
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl font-bold neon-text text-cyber-pink mb-4">
            <span className="text-cyber-red">[</span>CERTIFICATIONS<span className="text-cyber-red">]</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-red via-cyber-purple to-cyber-cyan mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert}
                className="glass-morphism rounded-lg p-6 hover:scale-105 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyber-green to-cyber-cyan animate-pulse"></div>
                  <span className="text-gray-300 font-mono text-sm group-hover:text-cyber-cyan transition-colors duration-300">
                    {cert}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
