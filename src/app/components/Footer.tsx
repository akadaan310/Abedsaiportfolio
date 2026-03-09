import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Abed Kadaan</h3>
            <p className="text-white/60 text-sm">
              Senior Director of Engineering with 18 years of experience building world-class digital products.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-white/60 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <Link to="/work" className="block text-white/60 hover:text-white text-sm transition-colors">
                Work
              </Link>
              <Link to="/about" className="block text-white/60 hover:text-white text-sm transition-colors">
                About
              </Link>
              <Link to="/services" className="block text-white/60 hover:text-white text-sm transition-colors">
                Services
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <div className="space-y-2">
              <p className="text-white/60 text-sm">Mobile App Development</p>
              <p className="text-white/60 text-sm">Web Applications</p>
              <p className="text-white/60 text-sm">eCommerce Solutions</p>
              <p className="text-white/60 text-sm">AI Integration</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
            <div className="space-y-2">
              <a href="mailto:hello@abedkadaan.com" className="block text-white/60 hover:text-white text-sm transition-colors">
                Email
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-white text-sm transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-white text-sm transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Abed Kadaan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
