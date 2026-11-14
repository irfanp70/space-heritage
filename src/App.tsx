import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MuseumSection } from './components/MuseumSection';
import { InteractiveMap } from './components/InteractiveMap';
import { StorytellingSection } from './components/StorytellingSection';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { ApolloArchive } from './components/ApolloArchive';
import { QuizSection } from './components/QuizSection';
import { ShareableCards } from './components/ShareableCards';
import { Updates2026Section } from './components/Updates2026Section';
import { TimelineSection } from './components/TimelineSection';
import { ReferencesCredits } from './components/ReferencesCredits';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedDestinationFilter, setSelectedDestinationFilter] = useState<'Moon' | 'Mars' | 'All'>('All');
  const [targetMachineForVoice, setTargetMachineForVoice] = useState<string | undefined>(undefined);
  const [selectedMuseumMachineId, setSelectedMuseumMachineId] = useState<string | null>(null);

  // IntersectionObserver to highlight active navigation link
  useEffect(() => {
    const sectionIds = [
      'home', 
      'museum', 
      'maps', 
      'stories', 
      'gallery', 
      'apollo', 
      'quiz', 
      'cards', 
      'updates', 
      'timeline', 
      'references'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHeroSelectDestination = (dest: 'Moon' | 'Mars') => {
    setSelectedDestinationFilter(dest);
  };

  const handleOpenMachineVoice = (machineId: string) => {
    setTargetMachineForVoice(machineId);
    const element = document.getElementById('stories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFromMap = (machineId: string) => {
    setSelectedMuseumMachineId(machineId);
    const element = document.getElementById('museum');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFromTimeline = (machineId: string) => {
    setSelectedMuseumMachineId(machineId);
    const element = document.getElementById('museum');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSelectItem = (type: 'museum' | 'apollo' | 'update' | 'story', id: string) => {
    if (type === 'museum') {
      setSelectedMuseumMachineId(id);
      const el = document.getElementById('museum');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'apollo') {
      const el = document.getElementById('apollo');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'update') {
      const el = document.getElementById('updates');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'story') {
      setTargetMachineForVoice(id);
      const el = document.getElementById('stories');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Navbar with telemetry clocks and audio control */}
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)} 
        activeSection={activeSection} 
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onSelectDestination={handleHeroSelectDestination} />

        {/* 1. Interactive Space Museum */}
        <MuseumSection 
          selectedDestinationFilter={selectedDestinationFilter}
          onOpenMachineVoice={handleOpenMachineVoice}
          selectedMachineId={selectedMuseumMachineId}
          onClearSelectedMachine={() => setSelectedMuseumMachineId(null)}
        />

        {/* 2. Interactive Moon and Mars Map */}
        <InteractiveMap 
          onSelectEquipmentFromMap={handleSelectFromMap}
        />

        {/* 3. If This Machine Could Talk */}
        <StorytellingSection 
          initialMachineId={targetMachineForVoice}
        />

        {/* 4. Before-and-After Historical Gallery */}
        <BeforeAfterGallery />

        {/* 5. Apollo Archive */}
        <ApolloArchive />

        {/* 6. Ten-Question Space Quiz */}
        <QuizSection />

        {/* 7. Shareable Story Cards */}
        <ShareableCards />

        {/* 8. NASA Space Updates 2026 */}
        <Updates2026Section />

        {/* 9. Mission Timeline */}
        <TimelineSection 
          onSelectMachineFromTimeline={handleSelectFromTimeline}
        />

        {/* 10. References, Citations and AI Disclosure */}
        <ReferencesCredits />
      </main>

      {/* Search Modal (Ctrl+K) */}
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectItem={handleSearchSelectItem}
      />

      {/* NASA Space Apps 2026 Footer */}
      <Footer />
    </div>
  );
}
