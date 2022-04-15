import * as yup from 'yup';

export default yup.object({
  body: yup.object({
    refreshToken: yup.string().required(),
  }),
});
