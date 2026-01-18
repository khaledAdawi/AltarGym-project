import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Api/axiosInstance";

const API_BASE = "http://localhost/altragym_api";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const res = await axiosInstance.get(`/products/get.php`);
            setProducts(res.data.data || []);
        } catch (err) {
            console.error("Error loading products", err);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Shop</h2>

            <div className="row">
                {products.map((p) => (
                    <div className="col-md-4 mb-4" key={p.id}>
                        <div className="card h-100 shadow-sm">
                            <img
                                src={
                                    p.image
                                        ? `${API_BASE}/${p.image}`
                                        : "/no-image.png"
                                }
                                alt={p.name}
                                className="card-img-top"
                                style={{ height: "220px", objectFit: "contain" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{p.name}</h5>
                                <p className="card-text fw-bold">${p.price}</p>

                                <button
                                    className="btn btn-dark mt-auto"
                                    onClick={() => navigate(`/product/${p.id}`)}
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
