import type { AppInputValue } from './app-input';
import { AppTextField, type AppTextFieldProps } from './app-text-field';

export function AppNumberField<T extends AppInputValue>({ inputProps, ...props }: AppTextFieldProps<T>) {
  return <AppTextField inputProps={{ inputMode: 'numeric', ...inputProps }} {...props} />;
}
