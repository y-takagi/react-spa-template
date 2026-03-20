import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { Toaster } from './lib/components/ui/sonner';
import { TooltipProvider } from './lib/components/ui/tooltip';
import { queryClient } from './query-client';
import { router } from './router';

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
