import {z} from 'zod';

export const signUpSchema = z.object({
  fullName: z
    .string()
    .min(5, 'Nome completo deve conter no mínimo 5 caracteres')
    .max(50, 'Nome completo deve conter no máximo 50 caracteres'),
  cpf: z.string().length(11, 'CPF deve conter 11 caracteres'),
  birthDate: z.string().length(10, 'Data de nascimento inválida'),
  cep: z.string().length(8, 'CEP deve conter 8 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Senha deve conter no mínimo 8 caracteres'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
