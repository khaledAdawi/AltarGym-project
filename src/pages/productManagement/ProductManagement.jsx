import React, { useEffect, useState } from "react";
import axiosInstance from "../../Api/axiosInstance";

export default function ProductManagement() {
    const [activeTab, setActiveTab] = useState("products");
    const [products, setProducts] = useState([]);

    
    const [isEdit, setIsEdit] = useState(false);

    const [formData, setFormData] = useState({
        id: null,
        name: "",
        description: "",
        price: "",
        status: "Available",
    });

    
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axiosInstance.get(
                "/products/get.php"
            );
            setProducts(response.data.data);
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };

    
    const handleAddProduct = async () => {
        try {
            await axiosInstance.post(
                "/products/add.php",
                formData
            );

            resetForm();
            setActiveTab("products");
            fetchProducts();
        } catch (error) {
            console.error("Error adding product", error);
        }
    };

    
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this product?"))
            return;

        try {
            await axiosInstance.post(
                "/products/delete.php",
                { id }
            );
            fetchProducts();
        } catch (error) {
            console.error("Error deleting product", error);
        }
    };

    
    const handleEditClick = (product) => {
        setFormData(product);   
        setIsEdit(true);        
        setActiveTab("add");   
    };


    const handleUpdateProduct = async () => {
        console.log("Updating:", formData);
        try {
            await axiosInstance.post(
                "/products/update.php",
                formData
            );

            resetForm();
            setActiveTab("products");
            fetchProducts();
        } catch (error) {
            console.error("Error updating product", error);
        }
    };

    const resetForm = () => {
        setFormData({
            id: null,
            name: "",
            description: "",
            price: "",
            status: "Available",
        });
        setIsEdit(false);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Product Management</h2>

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === "products" ? "active" : ""
                            }`}
                        onClick={() => setActiveTab("products")}
                    >
                        Products
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === "add" ? "active" : ""
                            }`}
                        onClick={() => {
                            resetForm();
                            setActiveTab("add");
                        }}
                    >
                        {isEdit ? "Edit Product" : "Add Product"}
                    </button>
                </li>
            </ul>

            
            {activeTab === "products" && (
                <div className="mt-4">
                    <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th style={{ width: "150px" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        No products found
                                    </td>
                                </tr>
                            ) : (
                                products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.status}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-warning me-2"
                                                onClick={() =>
                                                    handleEditClick(product)
                                                }
                                            >
                                                Update
                                            </button>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() =>
                                                    handleDelete(product.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            
            {activeTab === "add" && (
                <div className="mt-4 col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            value={formData.description}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                })
                            }
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            value={formData.price}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    price: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Status</label>
                        <select
                            className="form-select"
                            value={formData.status}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    status: e.target.value,
                                })
                            }
                        >
                            <option value="Available">Available</option>
                            <option value="Out of Stock">Out of Stock</option>
                        </select>
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={isEdit ? handleUpdateProduct : handleAddProduct}
                    >
                        {isEdit ? "Update Product" : "Add Product"}
                    </button>

                </div>
            )}
        </div>
    );
}
