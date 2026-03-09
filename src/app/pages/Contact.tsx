import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Calendar, Linkedin, Github, Send } from 'lucide-react';
import { AIAssistant } from '../components/AIAssistant';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Let's Talk</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to build something exceptional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                    Company (Optional)
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-white/80 mb-2">
                    Project Type
                  </label>
                  <Input
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    placeholder="e.g., Mobile App, Web Platform, eCommerce"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#3B82F6] hover:bg-[#2563eb] text-white"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Direct Contact</h2>
              
              <div className="space-y-4">
                <a
                  href="mailto:hello@abedkadaan.com"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#3B82F6]/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <div>
                    <div className="font-medium text-white/90 group-hover:text-white">Email</div>
                    <div className="text-sm text-white/60">hello@abedkadaan.com</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#3B82F6]/20 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <div>
                    <div className="font-medium text-white/90 group-hover:text-white">LinkedIn</div>
                    <div className="text-sm text-white/60">Connect with me</div>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#3B82F6]/20 rounded-full flex items-center justify-center">
                    <Github className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <div>
                    <div className="font-medium text-white/90 group-hover:text-white">GitHub</div>
                    <div className="text-sm text-white/60">View my code</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Schedule Call */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Schedule a Call</h2>
              <p className="text-white/60 mb-6">
                Prefer to talk live? Book a 30-minute discovery call to discuss your project.
              </p>
              
              <Button
                size="lg"
                className="w-full bg-[#3B82F6] hover:bg-[#2563eb] text-white"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book a Time
              </Button>

              <div className="mt-6 pt-6 border-t border-white/10">
                <h3 className="font-semibold mb-3">Available Time Slots</h3>
                <div className="space-y-2">
                  <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-left text-sm transition-colors">
                    <div className="font-medium text-white/90">Today at 2:00 PM EST</div>
                    <div className="text-xs text-white/50">30 min · Discovery Call</div>
                  </button>
                  <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-left text-sm transition-colors">
                    <div className="font-medium text-white/90">Tomorrow at 10:00 AM EST</div>
                    <div className="text-xs text-white/50">30 min · Discovery Call</div>
                  </button>
                  <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-left text-sm transition-colors">
                    <div className="font-medium text-white/90">Thursday at 3:00 PM EST</div>
                    <div className="text-xs text-white/50">30 min · Discovery Call</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-[#3B82F6]/10 to-[#1d4ed8]/10 border border-[#3B82F6]/20 rounded-xl p-6">
              <p className="text-sm text-white/70">
                <span className="font-semibold text-[#3B82F6]">Average response time:</span> Within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* AI Assistant in Intake Mode */}
      <AIAssistant mode="intake" />
    </div>
  );
}
