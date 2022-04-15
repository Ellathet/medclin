import * as yup from 'yup';

export default yup.object({
  body: yup.object({
    email: yup.string().email().required(),
    name: yup.string().min(3).max(20).required(),
    username: yup
      .string()
      .min(3)
      .max(10)
      .matches(/[^<>%$]+/)
      .required(),
    rg: yup.string().notRequired().max(12).min(12),
    cpf: yup.string().notRequired().max(14).min(14),
    password: yup.string().required().max(20).min(4),
    roleEnum: yup.number().positive(),
    birthday: yup.string().required(),
  }),
});
