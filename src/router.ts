import { createRouter } from '@tanstack/react-router';
import { Pending } from './components/ui/pending';
import { queryClient } from './query-client';
import { routeTree } from './routeTree.gen';

// Set up a Router instance
export const router = createRouter({
  routeTree,
  defaultPendingComponent: Pending,
  defaultPendingMs: 0,
  defaultPendingMinMs: 0,
  defaultPreload: false,
  defaultGcTime: 0,
  disableGlobalCatchBoundary: true,
  context: { queryClient },
});

router.subscribe('onBeforeLoad', ({ pathChanged }) => {
  if (pathChanged) {
    queryClient.clear();
  }
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
