import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Sparkles, ChevronDown, ChevronUp, CreditCard, MessageCircle } from 'lucide-react';
import { AIAssistant } from '../components/AIAssistant';
import { Button } from '../components/ui/button';
import { packages, Package } from '../data/packages';

export default function Services() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);

  const handlePackageRecommend = (packageId: string) => {
    const pkg = packages.find(p => p.id === packageId);
    if (pkg) {
      setSelectedPackage(pkg);
      // Scroll to package section
      document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const customEngagements = [
    {
      title: 'Mobile App — Ground-Up Build or Rebuild',
      description: 'Native or React Native apps for iOS and Android',
      examples: [
        'ClearVault (fintech) · React Native app replacing legacy iOS codebase · Biometric auth, real-time sync, push notifications',
        'FormFlow (health & wellness) · Native iOS workout tracking · Apple HealthKit, video playback, coach dashboard',
      ],
      inspiration: 'Inspired by Emirates Airlines, Lululemon, Ticketmaster, The Home Depot'
    },
    {
      title: 'Streaming & Connected TV Platform',
      description: 'Full streaming platforms across iOS, Android, tvOS, Roku',
      examples: [
        'Wavelength (media) · Streaming platform across all devices · Live scheduling, ad insertion, React CMS',
      ],
      inspiration: 'Inspired by PlutoTV, Equinox Media'
    },
    {
      title: 'Full-Stack Web Application with AI Features',
      description: 'Intelligent web apps with natural language processing',
      examples: [
        'ContextIQ (B2B SaaS) · Internal reporting with NLP queries · React + FastAPI + OpenAI + PDF export',
        'Rootline (DTC) · Product recommendation engine · Next.js + LangChain + Stripe + Supabase',
      ],
      inspiration: 'Leveraging cutting-edge AI capabilities'
    },
    {
      title: 'eCommerce Platform Redesign & Re-architecture',
      description: 'Headless commerce migrations and custom platforms',
      examples: [
        'TerrainCo (apparel) · Legacy WooCommerce to headless Shopify · React/Next.js + Storefront API + loyalty rewards',
      ],
      inspiration: 'Inspired by Aavrani, ThruDark, Tentree'
    },
    {
      title: 'Enterprise Web Platform or Portal',
      description: 'Internal tools and multi-role web applications',
      examples: [
        'Meridian Capital Group (real estate) · Deal-flow management portal · Multi-role auth, financial modeling, PDF generation',
      ],
      inspiration: 'Built for complex business workflows'
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6] opacity-10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F59E0B] opacity-10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm text-white/80">AI-Powered Service Discovery</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6">Services</h1>
            <p className="text-xl text-white/60 mb-8">
              From ready-to-go packages to custom enterprise solutions. 
              Let the AI assistant help you find the perfect fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Layer 0: Founder's Rate */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Warm Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] opacity-10 blur-3xl rounded-3xl" />
            
            <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#FFA500]/20 rounded-3xl p-12">
              <div className="text-center mb-8">
                <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Founder's Rate
                </h2>
                <p className="text-lg text-[#FFA500]">For the Right Project</p>
              </div>

              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-3xl mx-auto">
                I occasionally take on a small number of projects at a reduced rate — either because the 
                problem is genuinely interesting, the industry is one I want to build in, or the timing is right. 
                If your budget is tight but your vision is strong, tell me about it.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <p className="text-sm text-white/60 italic mb-2">
                  "Abed took a chance on our early-stage startup. Three months later, we closed our seed round. 
                  The product he built became our biggest asset."
                </p>
                <p className="text-xs text-white/40">— Founder, Series A SaaS Startup</p>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#FFA500] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFA500] text-white"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Tell the AI what you're building
                </Button>
                <p className="text-xs text-white/40 mt-3">
                  Accepted projects work through verified platforms (Upwork, Freelancer.com)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Layer 1: Ready-to-Go Packages */}
      <section id="packages" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Ready-to-Go Packages</h2>
            <p className="text-xl text-white/60">
              Fast, fixed-scope engagements. Purchase directly and start immediately.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Glow Effect */}
                {selectedPackage?.id === pkg.id && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6] to-[#1d4ed8] opacity-30 blur-xl rounded-2xl" />
                )}

                <div className={`relative bg-[#1A1A1A] border rounded-2xl p-8 transition-all ${
                  selectedPackage?.id === pkg.id 
                    ? 'border-[#3B82F6]' 
                    : 'border-white/10 hover:border-white/20'
                }`}>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-sm text-white/60">{pkg.turnaround}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-[#3B82F6]">
                        ${pkg.price.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <p className="text-white/70 mb-6">
                    {pkg.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {pkg.features.map(feature => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Examples */}
                  <div className="border-t border-white/10 pt-6">
                    <button
                      onClick={() => setExpandedPackage(expandedPackage === pkg.id ? null : pkg.id)}
                      className="flex items-center justify-between w-full text-left group/btn"
                    >
                      <span className="text-sm font-medium text-white/80 group-hover/btn:text-white">
                        View Portfolio Examples ({pkg.examples.length})
                      </span>
                      {expandedPackage === pkg.id ? (
                        <ChevronUp className="w-4 h-4 text-white/60" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-white/60" />
                      )}
                    </button>

                    <AnimatePresence>
                      {expandedPackage === pkg.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 space-y-3">
                            {pkg.examples.map((example, idx) => (
                              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-4">
                                <h4 className="font-semibold text-sm mb-1">{example.name}</h4>
                                <p className="text-xs text-white/60 mb-2">{example.description}</p>
                                <span className="text-xs text-[#3B82F6]">{example.techStack}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Button
                    className="w-full mt-6 bg-[#3B82F6] hover:bg-[#2563eb] text-white"
                    size="lg"
                  >
                    <CreditCard className="mr-2 w-4 h-4" />
                    Purchase Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Layer 2: Custom Engagements */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A]">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Custom Engagements</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Complex, large-scale, or ambiguous projects. The AI assistant helps qualify scope 
              and routes to discovery call or RFP.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customEngagements.map((engagement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 hover:border-white/20 rounded-2xl p-8 transition-all">
                  <h3 className="text-2xl font-bold mb-3">{engagement.title}</h3>
                  <p className="text-white/60 mb-6">{engagement.description}</p>

                  <div className="space-y-3 mb-6">
                    {engagement.examples.map((example, exIdx) => (
                      <div key={exIdx} className="text-sm text-white/50 italic">
                        → {example}
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-[#3B82F6] mb-6">{engagement.inspiration}</p>

                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/5">
                    <MessageCircle className="mr-2 w-4 h-4" />
                    Discuss with AI Assistant
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button size="lg" className="bg-[#3B82F6] hover:bg-[#2563eb] text-white">
              Schedule Discovery Call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* AI Assistant in Scope & Recommend Mode */}
      <AIAssistant mode="scope" onPackageRecommend={handlePackageRecommend} />
    </div>
  );
}
