import * as yup from 'yup';

export default yup.object({
  body: yup.object({
    medicId: yup.string().uuid().required(),
    patientId: yup.string().uuid().required(),
    description: yup.string().required(),
    specializationId: yup.string().uuid().required(),
    statusEnum: yup.number().required().positive(),
    result: yup.string(),
    date: yup.string().required(),
  }),
});
