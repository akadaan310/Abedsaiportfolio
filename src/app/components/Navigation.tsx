import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Button } from './ui/button';

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white tracking-tight">
          Abed Kadaan
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors relative ${
                location.pathname === item.path
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#3B82F6]"
                />
              )}
            </Link>
          ))}
        </div>

        <Button
          asChild
          className="bg-[#3B82F6] hover:bg-[#2563eb] text-white font-medium px-6"
        >
          <Link to="/contact">Hire Me</Link>
        </Button>
      </div>
    </motion.nav>
  );
}
