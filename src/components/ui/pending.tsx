import { Spinner } from '@/lib/components/ui/spinner';

export function Pending() {
  return (
    <div className="grid place-items-center p-4">
      <Spinner className="size-8" />
    </div>
  );
}
