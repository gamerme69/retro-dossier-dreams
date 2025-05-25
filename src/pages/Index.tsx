
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      
      {/* Footer */}
      <footer className="border-t border-cyber-cyan/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-cyber-cyan font-mono text-sm">
            <span className="text-cyber-red">[</span>
            © 2025 CH. PAVAN DURGA SAI GUPTA - DIGITAL PORTFOLIO v2.0
            <span className="text-cyber-red">]</span>
          </p>
          <p className="text-cyber-purple font-mono text-xs mt-2">
            Designed with cyberpunk aesthetics • Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
