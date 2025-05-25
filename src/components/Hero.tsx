
import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = "A tech enthusiast who loves to tinker, learn, and create — not an expert yet, just having fun figuring things out.";

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Animated background grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 animate-grid-move"></div>
      
      {/* CRT effect overlay */}
      <div className="crt-effect absolute inset-0"></div>
      
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/60 via-transparent to-cyber-black/60"></div>
      
      <div className="container mx-auto text-center z-10 relative">
        <div className="space-y-6 sm:space-y-8 animate-fade-in">
          {/* Main title with glitch effect */}
          <h1 className="font-cyber text-3xl sm:text-5xl md:text-7xl font-black neon-text text-cyber-red mb-4 relative">
            <span className="relative z-10 bg-cyber-black/40 px-2 py-1 rounded">
              PAVAN DURGA SAI GUPTA
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-cyber-cyan text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8">
            <span className="text-cyber-purple">&gt;&gt;</span> COMPUTER SCIENCE STUDENT <span className="text-cyber-purple">&lt;&lt;</span>
          </div>
          
          {/* Typing animation */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-morphism rounded-lg p-4 sm:p-6 md:p-8 cyber-border relative">
              {/* Background overlay for better text visibility */}
              <div className="absolute inset-0 bg-cyber-black/30 rounded-lg"></div>
              
              <div className="text-base sm:text-lg md:text-xl text-cyber-cyan font-mono leading-relaxed relative z-10">
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
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8 sm:mt-12">
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
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
