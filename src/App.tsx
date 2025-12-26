import React, { useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import JapanPage from './pages/countries/JapanPage';
import AustraliaPage from './pages/countries/AustraliaPage';
import UKPage from './pages/countries/UKPage';
import CanadaPage from './pages/countries/CanadaPage';
import USAPage from './pages/countries/USAPage';
import KoreaPage from './pages/countries/KoreaPage';
import NotPaid from './pages/NotPaid';

const queryClient = new QueryClient();

// ScrollHandler component to manage hash-based scrolling
const ScrollHandler: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling to section when hash is present
    if (location.hash && location.pathname === '/') {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (location.pathname === '/') {
      // Scroll to top when on homepage with no hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollHandler />
        <Routes>
          {/* <Route path="/" element={<Index />} /> */}
          <Route path="/" element={<NotPaid />} />
          {/* <Route path="/study/japan" element={<JapanPage />} />
          <Route path="/study/australia" element={<AustraliaPage />} />
          <Route path="/study/uk" element={<UKPage />} />
          <Route path="/study/canada" element={<CanadaPage />} />
          <Route path="/study/usa" element={<USAPage />} />
          <Route path="/study/korea" element={<KoreaPage />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;