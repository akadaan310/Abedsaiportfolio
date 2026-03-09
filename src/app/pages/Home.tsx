import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AIAssistant } from '../components/AIAssistant';
import { Button } from '../components/ui/button';
import { projects } from '../data/projects';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Mobile App', label: 'Mobile Apps' },
    { id: 'Web App', label: 'Web Apps' },
    { id: 'eCommerce', label: 'eCommerce' },
    { id: 'Landing Page', label: 'Landing Pages' },
  ];

  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="relative">
      {/* Hero Section with Grain Texture */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Grain Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Gradient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#3B82F6] opacity-10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm text-white/80">Available for select projects</span>
            </motion.div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
              Abed Kadaan
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 mb-4 tracking-wide">
              Senior Engineer · 18 Years · Web · Mobile · AI
            </p>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Building world-class digital products for Emirates Airlines, PlutoTV, Lululemon, 
              Ticketmaster, The Home Depot, and more.
            </p>
          </motion.div>

          {/* AI Assistant Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6] to-[#1d4ed8] rounded-2xl opacity-20 group-hover:opacity-30 blur transition-opacity" />
              <div className="relative bg-[#1A1A1A]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1d4ed8] flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-sm font-semibold text-white">AI-Powered Project Discovery</h3>
                    <p className="text-xs text-white/60">Find the perfect solution for your needs</p>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Tell me what you're building..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all"
                  readOnly
                />
              </div>
            </div>
          </motion.div>

          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to="/work"
                className="px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-white/80 hover:text-white transition-all"
              >
                {cat.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold mb-4"
              >
                Featured Work
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/60"
              >
                Selected projects from 18 years of building at scale
              </motion.p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex border-white/20 text-white hover:bg-white/5">
              <Link to="/work">
                View All Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={`/work/${project.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl bg-[#1A1A1A] border border-white/10 hover:border-white/20 transition-all">
                    <div className="aspect-[16/10] bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center">
                      <div className="text-center p-8">
                        <h3 className="text-3xl font-bold mb-2 group-hover:text-[#3B82F6] transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-white/60 text-sm mb-4">{project.category}</p>
                        <div className="flex flex-wrap justify-center gap-2">
                          {project.techStack.slice(0, 3).map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <div>
                        <p className="text-white/90 text-sm mb-3">{project.description}</p>
                        <div className="flex items-center gap-2 text-[#3B82F6] text-sm font-medium">
                          View Case Study
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/5">
              <Link to="/work">
                View All Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#3B82F6] to-[#1d4ed8] opacity-20 blur-3xl" />
            <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 rounded-3xl p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Build Something Exceptional
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Whether you need a mobile app, web platform, or eCommerce solution, 
                I bring 18 years of experience to make it world-class.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#3B82F6] hover:bg-[#2563eb] text-white text-lg px-8">
                  <Link to="/services">View Services</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 text-lg px-8">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* AI Assistant */}
      <AIAssistant mode="discovery" />
    </div>
  );
}
