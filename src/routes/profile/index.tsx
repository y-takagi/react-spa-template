import { createFileRoute } from '@tanstack/react-router';
import { RouteComponent } from './-components';

export const Route = createFileRoute('/profile/')({
  component: RouteComponent,
});
