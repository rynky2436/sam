export const metadata = {
  title: "App",
  description: "App page for Spark Mark Scribe."
};

'use client';

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import ScrollToTop from "@/components/ScrollToTop";
import Index from "@/components/Index";

export default function HomePage() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Index />
        <Sonner />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
