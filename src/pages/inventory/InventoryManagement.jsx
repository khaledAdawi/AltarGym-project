import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Api/axiosInstance";



export default function InventoryManagement() {
    const [inventory, setInventory] = useState([]);
    const [editRow, setEditRow] = useState(null);
    const [formData, setFormData] = useState({
        quantity: "",
        reorder_level: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        loadInventory();
    }, []);

    const loadInventory = async (warehouseId = "") => {
        try {
            const res = await axiosInstance.get(
                `/inventory/get.php`,
                { params: { warehouse_id: warehouseId } }
            );
            setInventory(res.data.data || []);
        } catch (err) {
            console.error("Error fetching inventory", err);
        }
    };


    const handleEditClick = (item) => {
        setEditRow(item.id);
        setFormData({
            quantity: item.quantity,
            reorder_level: item.reorder_level,
        });
    };

    const handleUpdate = async (id) => {
        try {
            await axiosInstance.post(`/inventory/update.php`, {
                id,
                quantity: Number(formData.quantity),
                reorder_level: Number(formData.reorder_level),
            });
            setEditRow(null);
            loadInventory();
        } catch (err) {
            console.error("Error updating inventory", err);
        }
    };

    const goToReorder = (productId) => {
        navigate(`/purchases?product_id=${productId}`);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Inventory Management</h2>

            <div className="mb-3">
                <label className="form-label">Warehouse</label>
                <select
                    className="form-select"
                    onChange={(e) => loadInventory(e.target.value)}
                >
                    <option value="">All Warehouses</option>
                    <option value="1">Main Warehouse</option>
                    <option value="2">Secondary Warehouse</option>
                </select>
            </div>

            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Warehouse</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Reorder Level</th>
                        <th style={{ width: "220px" }}>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {inventory.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No inventory records
                            </td>
                        </tr>
                    ) : (
                        inventory.map((item) => {
                            const needsReorder = Number(item.needs_reorder) === 1;

                            return (
                                <tr key={item.id}>
                                    <td>{item.warehouse_name}</td>
                                    <td>{item.product_name}</td>


                                    <td>
                                        {editRow === item.id ? (
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={formData.quantity}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        quantity: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            item.quantity
                                        )}
                                    </td>

                                    <td>
                                        {editRow === item.id ? (
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={formData.reorder_level}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        reorder_level: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            item.reorder_level
                                        )}
                                    </td>

                                    <td>
                                        {editRow === item.id ? (
                                            <>
                                                <button
                                                    className="btn btn-success btn-sm me-2"
                                                    onClick={() => handleUpdate(item.id)}
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    className="btn btn-secondary btn-sm"
                                                    onClick={() => setEditRow(null)}
                                                >
                                                    Cancel
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    className="btn btn-warning btn-sm me-2"
                                                    onClick={() => handleEditClick(item)}
                                                >
                                                    Update
                                                </button>

                                                {needsReorder && (
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => goToReorder(item.product_id)}
                                                    >
                                                        Reorder
                                                    </button>
                                                )}
                                            </>
                                        )}
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>
        </div>
    );
}
