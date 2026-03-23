import { AppNumberField } from '@/components/ui/app-number-field';
import { AppTextField } from '@/components/ui/app-text-field';

export function RouteComponent() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <h2>Profile</h2>
      <AppTextField id="name" label="Name" />
      <AppTextField id="email" label="Email" />
      <AppNumberField id="age" label="Age" />
    </div>
  );
}
