import * as yup from 'yup';

export default yup.object({
  body: yup.object().shape(
    {
      email: yup
        .string()
        .email()
        .when('username', {
          is: (u: string) => !u || u.length === 0,
          then: yup.string().required(),
          otherwise: yup.string(),
        }),
      password: yup.string().required(),
      username: yup.string().when('email', {
        is: (e: string) => !e || e.length === 0,
        then: yup.string().email().required(),
        otherwise: yup.string().email(),
      }),
    },
    [['email', 'username']]
  ),
});
