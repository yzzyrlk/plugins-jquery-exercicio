import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormInput } from './FormInput';
import { PhoneInput } from './PhoneInput';

const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(14, 'Telefone inválido'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log('Form submitted:', data);
      // Handle form submission
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <FormInput
        id="name"
        label="Nome"
        register={register}
        error={errors.name?.message}
      />

      <FormInput
        id="email"
        label="Email"
        type="email"
        register={register}
        error={errors.email?.message}
      />

      <PhoneInput
        id="phone"
        label="Telefone"
        error={errors.phone?.message}
        onChange={(value) => setValue('phone', value, { shouldValidate: true })}
        {...register('phone')}
      />

      <FormInput
        id="message"
        label="Mensagem"
        type="textarea"
        rows={4}
        register={register}
        error={errors.message?.message}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
};