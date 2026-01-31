import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import FeaturedVideo from '@/components/sections/FeaturedVideo';
import VideoGallery from '@/components/sections/VideoGallery';
import ActivitiesGrid from '@/components/sections/ActivitiesGrid';
import DonateSection from '@/components/sections/DonateSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <AboutSection />
            <FeaturedVideo />
            <VideoGallery />
            <ActivitiesGrid />
            <DonateSection />
            <Footer />
        </main>
    );
}
