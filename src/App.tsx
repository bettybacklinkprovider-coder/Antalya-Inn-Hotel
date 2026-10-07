import React, { useState, useEffect } from 'react';
import { PageRoute, Room } from './types/hotel';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RoomModal } from './components/RoomModal';
import { AttractionsModal } from './components/AttractionsModal';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedRoomModal, setSelectedRoomModal] = useState<Room | null>(null);
  const [attractionsModalOpen, setAttractionsModalOpen] = useState(false);
  const [preselectedRoomType, setPreselectedRoomType] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync route from URL path or hash on load
  useEffect(() => {
    const parseRouteFromURL = (): PageRoute => {
      const path = window.location.pathname.replace('/', '').toLowerCase();
      const hash = window.location.hash.replace('#', '').toLowerCase();

      const routeStr = path || hash;

      if (routeStr === 'rooms' || routeStr === 'rooms-suites') return 'rooms';
      if (routeStr === 'gallery') return 'gallery';
      if (routeStr === 'contact' || routeStr === 'booking') return 'contact';
      return 'home';
    };

    const initialRoute = parseRouteFromURL();
    setCurrentPage(initialRoute);

    const handlePopState = () => {
      setCurrentPage(parseRouteFromURL());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle route change and push state
  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    const targetPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookRoomDirect = (roomName: string) => {
    setPreselectedRoomType(roomName);
    handleNavigate('contact');
    showToast(`Selected ${roomName} for booking`);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-transparent text-[#f5f0e6] flex flex-col font-sans selection:bg-[#d4af37] selection:text-[#0d0714]">
      {/* Sticky Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectRoom={(room) => setSelectedRoomModal(room)}
            onOpenAttractions={() => setAttractionsModalOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'rooms' && (
          <RoomsPage
            onNavigate={handleNavigate}
            onSelectRoom={(room) => setSelectedRoomModal(room)}
            onBookRoomDirect={handleBookRoomDirect}
          />
        )}

        {currentPage === 'gallery' && <GalleryPage />}

        {currentPage === 'contact' && (
          <ContactPage
            preselectedRoom={preselectedRoomType}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Modals */}
      <RoomModal
        room={selectedRoomModal}
        onClose={() => setSelectedRoomModal(null)}
        onBookRoom={handleBookRoomDirect}
      />

      <AttractionsModal
        isOpen={attractionsModalOpen}
        onClose={() => setAttractionsModalOpen(false)}
        onBookClick={() => handleNavigate('contact')}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
}
