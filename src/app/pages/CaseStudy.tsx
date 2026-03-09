import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { projects, getProjectById } from '../data/projects';
import { AIAssistant } from '../components/AIAssistant';

export default function CaseStudy() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(projectId || '');

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/work">Back to Work</Link>
          </Button>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]" />
        
        {/* Grain Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              onClick={() => navigate('/work')}
              variant="ghost"
              className="mb-8 text-white/60 hover:text-white"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Work
            </Button>

            <div className="inline-block px-4 py-2 bg-[#3B82F6]/20 border border-[#3B82F6]/30 rounded-full text-sm text-[#3B82F6] mb-6">
              {project.category}
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              {project.name}
            </h1>
            
            <p className="text-2xl text-white/70 max-w-3xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Overview</h2>
              <div className="space-y-6">
                {project.client && (
                  <div>
                    <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-2">Client</h3>
                    <p className="text-lg text-white/90">{project.client}</p>
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-2">Industry</h3>
                  <p className="text-lg text-white/90">{project.industry}</p>
                </div>
                {project.role && (
                  <div>
                    <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-2">Role</h3>
                    <p className="text-lg text-white/90">{project.role}</p>
                  </div>
                )}
                {project.year && (
                  <div>
                    <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-2">Year</h3>
                    <p className="text-lg text-white/90">{project.year}</p>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/90">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Narrative Sections */}
      {(project.challenge || project.approach || project.solution) && (
        <section className="py-20 px-6 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto space-y-20">
            {project.challenge && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
                <p className="text-xl text-white/70 leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>
            )}

            {project.approach && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">The Approach</h2>
                <p className="text-xl text-white/70 leading-relaxed">
                  {project.approach}
                </p>
              </motion.div>
            )}

            {project.solution && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">The Solution</h2>
                <p className="text-xl text-white/70 leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Results
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center p-8 bg-[#1A1A1A] border border-white/10 rounded-2xl"
                >
                  <div className="text-5xl md:text-6xl font-bold text-[#3B82F6] mb-4">
                    {metric.value}
                  </div>
                  <div className="text-lg text-white/60">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote */}
      {project.quote && (
        <section className="py-20 px-6 bg-[#0A0A0A]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote className="text-3xl md:text-4xl font-bold text-white/90 italic mb-6">
              "{project.quote}"
            </blockquote>
            <p className="text-lg text-white/50">— {project.client}</p>
          </motion.div>
        </section>
      )}

      {/* Next Project */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-4">Next Project</p>
            <Link to={`/work/${nextProject.id}`} className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-[#1A1A1A] border border-white/10 hover:border-white/20 transition-all p-12">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-5xl font-bold mb-4 group-hover:text-[#3B82F6] transition-colors">
                      {nextProject.name}
                    </h3>
                    <p className="text-xl text-white/60">{nextProject.category}</p>
                  </div>
                  <ArrowRight className="w-12 h-12 text-white/40 group-hover:text-[#3B82F6] transition-colors" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed bottom-8 left-8 z-40 hidden lg:block"
      >
        <Button asChild size="lg" className="bg-[#3B82F6] hover:bg-[#2563eb] text-white shadow-2xl">
          <Link to="/contact">Work with Abed</Link>
        </Button>
      </motion.div>

      <AIAssistant mode="context" />
    </div>
  );
}
