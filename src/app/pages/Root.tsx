import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function Root() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navigation />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
