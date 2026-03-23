import { Field, FieldDescription, FieldError, FieldLabel } from '@/lib/components/ui/field';
import React from 'react';
import { AppInput, type AppInputProps, type AppInputValue } from './app-input';

export interface AppTextFieldProps<T extends AppInputValue> {
  className?: React.ComponentProps<'div'>['className'];
  id?: React.ComponentProps<'input'>['id'];
  label?: string;
  description?: React.ReactNode;
  hint?: string;
  error?: string;
  inputProps?: AppInputProps<T>;
}

export function AppTextField<T extends AppInputValue>({
  className,
  id,
  label,
  description,
  hint,
  error,
  inputProps,
}: AppTextFieldProps<T>) {
  return (
    <Field className={className}>
      {label != null && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      {description != null && <FieldDescription>{description}</FieldDescription>}
      <AppInput id={id} {...inputProps} />
      {error != null ? <FieldError>{error}</FieldError> : hint != null && <FieldDescription>{hint}</FieldDescription>}
    </Field>
  );
}
