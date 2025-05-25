
const Experience = () => {
  const experiences = [
    {
      company: 'CODTECH IT SOLUTIONS',
      position: 'Cloud Computing Intern',
      period: 'Jan 2025 - Mar 2025',
      achievements: [
        'Implemented AWS cloud solutions Tasks Given',
        'Integrated two different Cloud services'
      ]
    },
    {
      company: 'Prodigy Education',
      position: 'Web Development Intern',
      period: 'Jul 2024',
      achievements: [
        'Improved user interfaces and developed browser application, reducing load time'
      ]
    },
    {
      company: 'AICTE EDU SKILLS',
      position: 'Intern (AWS)',
      period: 'Oct 2024',
      achievements: [
        'Implemented cloud-based solutions, improving system efficiency according to given tasks'
      ]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl font-bold neon-text text-cyber-purple mb-4">
            <span className="text-cyber-red">[</span>WORK_EXPERIENCE<span className="text-cyber-red">]</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-red via-cyber-purple to-cyber-cyan mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company}
              className="timeline-item"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="glass-morphism rounded-lg p-6 ml-6 hover:scale-102 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="font-cyber text-xl font-bold text-cyber-red neon-text">
                      {exp.company}
                    </h3>
                    <p className="text-cyber-cyan font-medium">{exp.position}</p>
                  </div>
                  <div className="text-cyber-green font-mono text-sm mt-2 md:mt-0">
                    <span className="text-cyber-purple">[</span>{exp.period}<span className="text-cyber-purple">]</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-2">
                      <span className="text-cyber-red mt-1">&gt;</span>
                      <span className="text-gray-300 font-mono text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
