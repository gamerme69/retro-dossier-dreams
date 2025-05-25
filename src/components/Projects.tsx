
const Projects = () => {
  const projects = [
    {
      title: 'MERN Stack Project',
      description: 'Developed a Student Database Management System, for college.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      title: 'IoT Project',
      description: 'Created Anti-Sleep Glasses with low-power sensors, for drivers.',
      tech: ['IoT', 'Sensors', 'Arduino']
    },
    {
      title: 'Music Player (Python Fullstack)',
      description: 'Built an interactive music player with playlist customization.',
      tech: ['Python', 'Tkinter', 'SQLite']
    },
    {
      title: 'Music and Lyrics Sharing App (React)',
      description: 'Designed an app with to share songs and lyrics.',
      tech: ['React', 'JavaScript', 'CSS']
    },
    {
      title: 'Personalized Workout App (React)',
      description: 'Developed a fitness app with tracking features with ai, with api integration.',
      tech: ['React', 'AI', 'API Integration']
    },
    {
      title: 'File Sharing App (Home Assignment Sharing App)',
      description: 'Created a secure platform for students to share assignments, for college students.',
      tech: ['File System', 'Security', 'Web Dev']
    },
    {
      title: 'SLync (GitHub Sync System)',
      description: 'Developed a notes, todo and bookmarks system with Git token authentication and repo-based storage.',
      tech: ['GitHub API', 'Authentication', 'Storage']
    },
    {
      title: 'Travel Tracker',
      description: 'Built a travel management system for itinerary planning and expense tracking.',
      tech: ['Planning', 'Tracking', 'Management']
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl font-bold neon-text text-cyber-green mb-4">
            <span className="text-cyber-red">[</span>PROJECTS<span className="text-cyber-red">]</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-red via-cyber-purple to-cyber-cyan mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-cyber text-lg font-bold text-cyber-red neon-text mb-3 group-hover:text-cyber-cyan transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 font-mono text-sm mb-4 leading-relaxed">
                <span className="text-cyber-purple">&gt;</span> {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-cyber-cyan/20 text-cyber-cyan rounded border border-cyber-cyan/30 hover:border-cyber-cyan transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-red/10 to-cyber-purple/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
