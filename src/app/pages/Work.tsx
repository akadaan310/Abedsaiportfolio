import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { ArrowRight } from 'lucide-react';
import { AIAssistant } from '../components/AIAssistant';
import { projects } from '../data/projects';

export default function Work() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Mobile App', label: 'Mobile Apps' },
    { id: 'Web App', label: 'Web Apps' },
    { id: 'eCommerce', label: 'eCommerce' },
    { id: 'Landing Page', label: 'Landing Pages' },
  ];

  const handleFilter = (categoryId: string) => {
    setActiveFilter(categoryId);
    if (categoryId === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === categoryId));
    }
  };

  const handleProjectFilter = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const filtered = projects.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.techStack.some(tech => tech.toLowerCase().includes(lowerQuery)) ||
      p.industry.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
    );
    setFilteredProjects(filtered);
    setActiveFilter('all');
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-white/60 max-w-3xl">
            18 years of building exceptional digital products for world-class brands. 
            From mobile apps serving millions to custom eCommerce platforms.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat.id
                  ? 'bg-[#3B82F6] text-white'
                  : 'bg-white/5 text-white/80 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <Masonry columnsCount={3} gutter="24px" className="mb-16">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link to={`/work/${project.id}`} className="group block mb-6">
                <div className="relative overflow-hidden rounded-2xl bg-[#1A1A1A] border border-white/10 hover:border-white/20 transition-all">
                  {/* Project Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center p-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-[#3B82F6] transition-colors">
                        {project.name}
                      </h3>
                      <div className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/80 mb-3">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/70">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[#3B82F6] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </Masonry>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* AI Assistant in Filter Mode */}
      <AIAssistant mode="filter" onProjectFilter={handleProjectFilter} />
    </div>
  );
}
