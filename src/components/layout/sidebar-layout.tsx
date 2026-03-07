import type { PropsWithChildren } from 'react';
import { Sidebar, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuItem, SidebarProvider } from '../../lib/components/ui/sidebar';

export function SidebarLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div>ERP Offload</div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
    </Sidebar>
  );
}
