import { motion } from 'motion/react';
import { AIAssistant } from '../components/AIAssistant';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function About() {
  const companies = [
    'Emirates Airlines',
    'PlutoTV',
    'Lululemon',
    'Ticketmaster',
    'The Home Depot',
    'Equinox',
    'Fox',
    'Disney',
    'ViacomCBS'
  ];

  const experience = [
    {
      role: 'Senior Director of Engineering',
      company: 'Equinox',
      period: '2020-2022',
      description: 'Led engineering teams of up to 80 engineers across mobile, web, and streaming platforms.',
    },
    {
      role: 'Engineering Director',
      company: 'PlutoTV / ViacomCBS',
      period: '2018-2020',
      description: 'Directed development of native streaming apps for iOS, Android, tvOS, and Roku.',
    },
    {
      role: 'Senior Engineer',
      company: 'Emirates Airlines',
      period: '2016-2018',
      description: 'Rebuilt mobile booking experience serving millions of travelers worldwide.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">About Me</h1>
            <p className="text-2xl text-white/60 max-w-3xl">
              18 years of building exceptional digital products at scale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split Layout */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758599543114-4eaf17a9ef64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzA1MTQ0NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Abed Kadaan"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Engineering Leader & Product Specialist</h2>
              
              <div className="space-y-4 text-lg text-white/70 leading-relaxed">
                <p>
                  I'm Abed Kadaan, a Senior Director of Engineering with 18 years of experience 
                  building world-class digital products for some of the most recognized brands in the world.
                </p>
                
                <p>
                  Throughout my career, I've led teams of up to 80 engineers at companies like Equinox, 
                  PlutoTV, and Emirates Airlines, delivering mobile apps, streaming platforms, and 
                  eCommerce solutions that serve millions of users daily.
                </p>
                
                <p>
                  My expertise spans the full stack — React Native and native mobile development (Swift, Kotlin), 
                  modern web frameworks (React, Next.js), backend systems (Python, Node.js), and emerging 
                  technologies like AI integration and headless commerce.
                </p>
                
                <p>
                  Today, I focus on select freelance projects and custom engagements, bringing enterprise-level 
                  engineering excellence to startups, scale-ups, and established brands looking to build or 
                  rebuild their digital products.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {['Mobile Apps', 'Web Platforms', 'eCommerce', 'Streaming Media', 'AI Integration', 'Engineering Leadership'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            Career Highlights
          </motion.h2>

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 border-l-2 border-white/10"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#3B82F6] rounded-full" />
                <div className="pb-8">
                  <p className="text-sm text-white/50 mb-1">{exp.period}</p>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-lg text-[#3B82F6] mb-3">{exp.company}</p>
                  <p className="text-white/70">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Trusted By</h2>
            <p className="text-xl text-white/60">
              World-class brands I've built products for
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center"
          >
            {companies.map((company, idx) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center justify-center p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
              >
                <span className="text-white/60 text-sm font-medium text-center">
                  {company}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AIAssistant mode="context" />
    </div>
  );
}
