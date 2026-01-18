import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const removeItem = (id) => {
        const updated = cart.filter((item) => item.id !== id);
        setCart(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
    };

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    if (cart.length === 0) {
        return <h3 className="text-center mt-5">Cart is empty 🛒</h3>;
    }

    return (
        <div className="container py-5">
            <h2 className="mb-4">Your Cart</h2>

            {cart.map((item) => (
                <div
                    key={item.id}
                    className="d-flex justify-content-between align-items-center border-bottom py-3"
                >
                    <div>
                        <h5>{item.name}</h5>
                        <p>
                            ${item.price} × {item.quantity}
                        </p>
                    </div>

                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeItem(item.id)}
                    >
                        Remove
                    </button>
                </div>
            ))}

            <h4 className="mt-4">Total: ${total.toFixed(2)}</h4>

            <button
                className="btn btn-dark"
                onClick={() => navigate("/payment")}
            >
                Proceed to Payment
            </button>

        </div>
    );
};

export default Cart;
