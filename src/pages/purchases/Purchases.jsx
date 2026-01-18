import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../Api/axiosInstance";



const Purchases = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [products, setProducts] = useState([]);

    const [supplierId, setSupplierId] = useState("");
    const [productId, setProductId] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    
    const queryProductId = new URLSearchParams(location.search).get("product_id");

    
    useEffect(() => {
        loadSuppliers();
        loadProducts();
    }, []);

    const loadSuppliers = async () => {
        try {
            const res = await axiosInstance.get(`/suppliers/get.php`);
            setSuppliers(res.data.data || []);
        } catch (error) {
            console.error("Error loading suppliers", error);
        }
    };

    const loadProducts = async () => {
        try {
            const res = await axiosInstance.get(`/products/get.php`);
            setProducts(res.data.data || []);
        } catch (error) {
            console.error("Error loading products", error);
        }
    };

    
    useEffect(() => {
        if (queryProductId && products.length > 0) {
            setProductId(queryProductId);

            const selectedProduct = products.find(
                p => p.id == queryProductId
            );

            if (selectedProduct) {
                setPrice(selectedProduct.price);
            }
        }
    }, [queryProductId, products]);

    const submitPurchase = async () => {
        if (!supplierId || !productId || !quantity) {
            alert("Please fill all required fields");
            return;
        }

        try {
            const res = await axiosInstance.post(
                `/purchases/create.php`,
                {
                    supplier_id: Number(supplierId),
                    product_id: Number(productId),
                    quantity: Number(quantity),
                    unit_price: Number(price),
                }
            );

            alert(res.data.message || "Purchase completed");

            if (res.data.status) {
                navigate("/inventory");
            }
        } catch (error) {
            console.error("Purchase error", error);
            alert("Purchase failed");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">
                {queryProductId ? "Reorder Product" : "New Purchase"}
            </h2>

            <div className="row g-3 align-items-center">

                
                <div className="col-md-3">
                    <select
                        className="form-select"
                        value={supplierId}
                        onChange={e => setSupplierId(e.target.value)}
                    >
                        <option value="">Select Supplier</option>
                        {suppliers.map(s => (
                            <option key={s.id} value={s.id}>
                                {s.name}
                            </option>
                        ))}
                    </select>
                </div>

                
                <div className="col-md-3">
                    <select
                        className="form-select"
                        value={productId}
                        onChange={e => {
                            const id = e.target.value;
                            setProductId(id);

                            const p = products.find(pr => pr.id == id);
                            if (p) setPrice(p.price);
                        }}
                    >
                        <option value="">Select Product</option>
                        {products.map(p => (
                            <option key={p.id} value={p.id}>
                                {p.name}
                            </option>
                        ))}
                    </select>
                </div>

                
                <div className="col-md-2">
                    <input
                        type="number"
                        className="form-control"
                        min="1"
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                    />
                </div>

                
                <div className="col-md-2">
                    <input
                        type="number"
                        className="form-control"
                        value={price}
                        readOnly
                    />
                </div>

                
                <div className="col-md-2">
                    <button
                        className="btn btn-dark w-100"
                        onClick={submitPurchase}
                    >
                        Purchase
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Purchases;
