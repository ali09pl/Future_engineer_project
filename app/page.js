import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import FeaturesSection from './components/sections/FeaturesSection';
import CoursesSection from './components/sections/CoursesSection';
import SocialSection from './components/sections/SocialSection';
import ComingSoonSection from './components/sections/ComingSoonSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <CoursesSection />
      <SocialSection />
      <ComingSoonSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
