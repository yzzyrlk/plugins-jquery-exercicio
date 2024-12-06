import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  error?: string;
  register: UseFormRegister<any>;
  rows?: number;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type = 'text',
  error,
  register,
  rows,
}) => {
  const isTextarea = type === 'textarea';
  const Component = isTextarea ? 'textarea' : 'input';

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Component
        id={id}
        type={type}
        rows={rows}
        {...register(id)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};