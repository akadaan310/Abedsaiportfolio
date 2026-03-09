import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-white/10 mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-white/60 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-[#3B82F6] hover:bg-[#2563eb] text-white">
            <Link to="/">
              <Home className="mr-2 w-5 h-5" />
              Go Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5">
            <Link to="/work">
              <ArrowLeft className="mr-2 w-5 h-5" />
              View Work
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
