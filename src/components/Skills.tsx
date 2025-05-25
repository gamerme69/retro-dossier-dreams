
const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['C', 'Java', 'JavaScript', 'Python'],
      color: 'cyber-red'
    },
    {
      category: 'Web Development',
      skills: ['HTML', 'CSS', 'MERN Stack'],
      color: 'cyber-purple'
    },
    {
      category: 'Cloud Platforms',
      skills: ['AWS', 'GCP'],
      color: 'cyber-cyan'
    },
    {
      category: 'Databases',
      skills: ['DBMS', 'SQL', 'NoSQL', 'Supabase', 'Firebase'],
      color: 'cyber-green'
    },
    {
      category: 'Other Skills',
      skills: ['IoT', 'Data Structures & Algorithms', 'AI Tools'],
      color: 'cyber-pink'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl font-bold neon-text text-cyber-cyan mb-4">
            <span className="text-cyber-red">[</span>TECHNICAL_SKILLS<span className="text-cyber-red">]</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-red via-cyber-purple to-cyber-cyan mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(({ category, skills, color }, index) => (
            <div 
              key={category}
              className="glass-morphism rounded-lg p-6 animate-fade-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className={`font-cyber text-lg font-bold mb-4 text-${color} neon-text`}>
                {category.toUpperCase()}
              </h3>
              <div className="space-y-3">
                {skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className={`skill-tag animate-slide-in-left border-${color}/30 hover:border-${color}`}
                    style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <span className="text-cyber-cyan font-mono">&gt;</span>
                    <span className="ml-2 text-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
