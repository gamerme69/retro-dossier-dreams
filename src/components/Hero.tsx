
import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = "Motivated Computer Science student with hands-on experience in web development, cloud computing, and IoT projects.";

  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setIsTyping(false);
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentText, isTyping, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 animate-grid-move"></div>
      
      {/* CRT effect overlay */}
      <div className="crt-effect absolute inset-0"></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="space-y-8 animate-fade-in">
          {/* Main title with glitch effect */}
          <h1 className="font-cyber text-5xl md:text-7xl font-black neon-text text-cyber-red mb-4">
            CH. PAVAN DURGA SAI GUPTA
          </h1>
          
          {/* Subtitle */}
          <div className="text-cyber-cyan text-xl md:text-2xl font-medium mb-8">
            <span className="text-cyber-purple">&gt;&gt;</span> COMPUTER SCIENCE STUDENT <span className="text-cyber-purple">&lt;&lt;</span>
          </div>
          
          {/* Typing animation */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-morphism rounded-lg p-8 cyber-border">
              <div className="text-lg md:text-xl text-cyber-cyan font-mono leading-relaxed">
                <span className="text-cyber-green">[PROFESSIONAL_SUMMARY]:</span>
                <br />
                <span className="text-cyber-red">&gt;</span> 
                <span className="ml-2">
                  {currentText}
                  {isTyping && <span className="animate-blink text-cyber-red">|</span>}
                </span>
              </div>
            </div>
          </div>
          
          {/* Status indicators */}
          <div className="flex justify-center space-x-8 mt-12">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-cyber-green animate-glow-pulse"></div>
              <span className="text-cyber-green text-sm font-mono">AVAILABLE FOR HIRE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-cyber-cyan animate-pulse"></div>
              <span className="text-cyber-cyan text-sm font-mono">ACTIVELY LEARNING</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
