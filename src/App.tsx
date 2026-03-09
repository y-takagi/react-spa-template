import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { queryClient } from './config/query-client';
import { router } from './config/router';
import { Toaster } from './lib/components/ui/sonner';
import { TooltipProvider } from './lib/components/ui/tooltip';

export function App() {
  return (
    <TooltipProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <Toaster />
    </TooltipProvider>
  );
}
