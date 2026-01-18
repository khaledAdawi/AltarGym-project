import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../Api/axiosInstance";

export default function useLogin() {
    const navigate = useNavigate();
    const [serverErrors, setServerErrors] = useState([]);

    const loginMutation = useMutation({
        mutationFn: async (values) => {
            return axiosInstance.post("/auth/login.php", values);
        },

        onSuccess: (res) => {
            if (res.data.status) {
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        id: res.data.id,
                        role: res.data.role,
                        name: res.data.name,
                        email: res.data.email,
                    })
                );

                if (res.data.role === "admin") {
                    navigate("/inventory");
                } else {
                    navigate("/home");
                }
            } else {
                setServerErrors([res.data.message]);
            }
        },

        onError: () => {
            setServerErrors(["Login failed. Please try again."]);
        },
    });

    return { loginMutation, serverErrors };
}
