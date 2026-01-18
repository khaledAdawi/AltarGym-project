import * as yup from 'yup'

export const LoginSchema = yup.object({
email:yup.string().email("Invalid Email Format").required("Email Is Required"),
password: yup.string().required("Password Is Required").min(8, "Password Must Be At Least 8 Characters"),
});

