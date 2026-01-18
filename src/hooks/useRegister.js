import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../Api/axiosInstance";

export default function useRegister() {
    const navigate = useNavigate();
    const [serverErrors, setServerErrors] = useState([]);

    const registerMutation = useMutation({
        mutationFn: async (values) => {
            return axiosInstance.post(`/auth/register.php`, values);
        },

        onSuccess: (res) => {
            console.log("REGISTER RESPONSE 👉", res.data);
            if (res.data.status) {
                alert("Account created successfully ✅");
                navigate("/login"); 
            } else {
                setServerErrors([res.data.message]);
            }
        },

        onError: () => {
            setServerErrors(["Register failed. Please try again"]);
        },
    });

    return { registerMutation, serverErrors };
}
