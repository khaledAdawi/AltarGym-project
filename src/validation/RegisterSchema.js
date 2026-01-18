import * as yup from 'yup'

export const RegisterSchema = yup.object({
    fullName: yup.string().required("FullName Is Required"),
    email: yup.string().email("Invalid Email Format").required("Email Is Required"),
    password: yup.string().required("Password Is Required"),
        

});