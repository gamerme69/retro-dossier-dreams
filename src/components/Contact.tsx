
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl font-bold neon-text text-cyber-cyan mb-4">
            <span className="text-cyber-red">[</span>INITIALIZE_CONTACT<span className="text-cyber-red">]</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-red via-cyber-purple to-cyber-cyan mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-morphism rounded-lg p-8 space-y-6">
            <div>
              <label className="block text-cyber-green font-mono text-sm mb-2">
                <span className="text-cyber-red">&gt;&gt;</span> ENTER_NAME:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-cyber-black/50 border border-cyber-cyan/30 rounded-md px-4 py-3 text-cyber-cyan font-mono focus:border-cyber-cyan focus:outline-none transition-colors duration-300"
                placeholder="Your name..."
                required
              />
            </div>

            <div>
              <label className="block text-cyber-green font-mono text-sm mb-2">
                <span className="text-cyber-red">&gt;&gt;</span> ENTER_EMAIL:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-cyber-black/50 border border-cyber-cyan/30 rounded-md px-4 py-3 text-cyber-cyan font-mono focus:border-cyber-cyan focus:outline-none transition-colors duration-300"
                placeholder="your.email@domain.com"
                required
              />
            </div>

            <div>
              <label className="block text-cyber-green font-mono text-sm mb-2">
                <span className="text-cyber-red">&gt;&gt;</span> ENTER_MESSAGE:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-cyber-black/50 border border-cyber-cyan/30 rounded-md px-4 py-3 text-cyber-cyan font-mono focus:border-cyber-cyan focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Type your message here..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyber-red to-cyber-purple hover:from-cyber-purple hover:to-cyber-red text-white font-cyber font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyber-cyan"
            >
              <span className="text-cyber-black">[</span> TRANSMIT_MESSAGE <span className="text-cyber-black">]</span>
            </button>
          </form>

          <div className="text-center mt-12">
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
