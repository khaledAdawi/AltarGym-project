import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Login from "../login/Login";
import { isLoggedIn } from "../../utils/auth";
import axiosInstance from "../../Api/axiosInstance";


  const API_BASE ="http://localhost/altragym_api"; 
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      const res = await axiosInstance.get(
        `/products/get_one.php?id=${id}`
      );
      setProduct(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({ ...product, quantity: qty });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart ✅");
  };

  
  const handleAddToCart = () => {
    if (!isLoggedIn()) {
      setShowLogin(true); 
      return;
    }

    addToCart();
  };

  
  const handleBuyNow = () => {
    if (!isLoggedIn()) {
      setShowLogin(true);
      return;
    }

    localStorage.setItem(
      "cart",
      JSON.stringify([{ ...product, quantity: qty }])
    );
    navigate("/cart");
  };

  if (!product) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        
        <div className="col-md-5 text-center">
          <img
            src={`${API_BASE}/${product.image}`}
            alt={product.name}
            className="img-fluid"
            style={{ maxHeight: "500px" }}
          />
        </div>

        
        <div className="col-md-7">
          <h2 className="fw-bold">{product.name}</h2>
          <p className="fs-4 fw-bold">${product.price}</p>
          <p className="text-muted">{product.description}</p>

          
          <div className="d-flex align-items-center mb-3">
            <button
              className="btn btn-outline-dark"
              onClick={() => qty > 1 && setQty(qty - 1)}
            >
              -
            </button>

            <input
              type="number"
              value={qty}
              className="form-control mx-2 text-center"
              style={{ width: "70px" }}
              readOnly
            />

            <button
              className="btn btn-outline-dark"
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>
          </div>

          
          <div className="d-flex gap-2">
            <button
              className="btn btn-dark"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <button
              className="btn btn-outline-dark w-100"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      
      <Login
        show={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </div>
  );
};

export default ProductDetails;
