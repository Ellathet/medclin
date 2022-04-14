import * as yup from 'yup';

export default yup.object({
  body: yup.object({
    email: yup.string().email().required(),
    name: yup.string().min(3).max(20).required(),
    username: yup
      .string()
      .min(3)
      .max(10)
      .matches(/[^<>%$]+/),
    rg: yup.string().notRequired().max(12).min(12),
    cpf: yup.string().notRequired().max(14).min(14),
    password: yup.string().required().max(20).min(4),
    roleEnum: yup.number().positive().min(1).max(1),
    birthday: yup.string().required(),
    typeEnum: yup.number().required(),
  }),
  params: yup.object({
    id: yup.string().uuid().required(),
  }),
});
