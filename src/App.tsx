
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import JapanPage from "./pages/countries/JapanPage";
import AustraliaPage from "./pages/countries/AustraliaPage";
import UKPage from "./pages/countries/UKPage";
import CanadaPage from "./pages/countries/CanadaPage";
import USAPage from "./pages/countries/USAPage";
import KoreaPage from "./pages/countries/KoreaPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/study/japan" element={<JapanPage />} />
          <Route path="/study/australia" element={<AustraliaPage />} />
          <Route path="/study/uk" element={<UKPage />} />
          <Route path="/study/canada" element={<CanadaPage />} />
          <Route path="/study/usa" element={<USAPage />} />
          <Route path="/study/korea" element={<KoreaPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
