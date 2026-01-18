import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Api/axiosInstance";


const Payment = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [method, setMethod] = useState("Credit Card");
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const payNow = async () => {
        setLoading(true);

        try {
            const res = await axiosInstance.post(
                "/payments/create.php",
                {
                    customer_id: 1,      
                    method: method,
                    cart: cart           
                }
            );

            if (res.data.status) {
                localStorage.removeItem("cart");
                alert("Payment successful ✅");
                navigate("/");
            } else {
                console.log(res.data.message)
                console.log(res.data)
                alert(res.data.message);
            }

        } catch (err) {
            console.error(err);
            alert("Payment failed ❌");
        }

        setLoading(false);
    };




    if (cart.length === 0) {
        return <h3 className="text-center mt-5">Cart is empty 🛒</h3>;
    }

    return (
        <div className="container py-5">
            <h2>Payment</h2>
            <p>Total Amount: <strong>${total.toFixed(2)}</strong></p>

            <select
                className="form-select mb-3"
                value={method}
                onChange={(e) => setMethod(e.target.value)}
            >
                <option value="Credit Card">Credit Card</option>
                <option value="Cash">Cash</option>
            </select>

            <button
                className="btn btn-success"
                onClick={payNow}
                disabled={loading}
            >
                {loading ? "Processing..." : "Pay Now"}
            </button>
        </div>
    );
};

export default Payment;
