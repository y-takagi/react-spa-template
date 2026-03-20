import { SidebarLayout } from '@/components/layout/sidebar-layout';
import { Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <SidebarLayout>
      <Outlet />
    </SidebarLayout>
  ),
});
