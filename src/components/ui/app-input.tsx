import { InputGroup, InputGroupAddon, InputGroupInput } from '@/lib/components/ui/input-group';
import { isPresent } from '@/utils';

export type AppInputValue = string | number | undefined;

export interface AppInputProps<T extends AppInputValue> extends Omit<React.ComponentProps<'input'>, 'value' | 'onChange'> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  value?: T;
  onChange?: (value: T) => void;
}

export function AppInput<T extends AppInputValue>(props: AppInputProps<T>) {
  const { className, startAdornment, endAdornment, value, onChange, ...inputProps } = props;
  return (
    <InputGroup className={className}>
      <InputGroupInput
        value={'value' in props ? String(value ?? '') : undefined}
        onChange={(e) => {
          const rawValue = e.target.value;
          const newValue = typeof value === 'string' ? rawValue : isPresent(rawValue) ? Number(rawValue) : undefined;
          onChange?.(newValue as T);
        }}
        {...inputProps}
      />
      {startAdornment != null && <InputGroupAddon>{startAdornment}</InputGroupAddon>}
      {endAdornment != null && <InputGroupAddon align="inline-end">{endAdornment}</InputGroupAddon>}
    </InputGroup>
  );
}
