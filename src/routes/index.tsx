import { SidebarLayout } from '@/components/layout/sidebar-layout';
import { Pending } from '@/components/ui/pending';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarLayout>
      <div>ハロー React SPA Template!</div>
      <Pending />
    </SidebarLayout>
  );
}
