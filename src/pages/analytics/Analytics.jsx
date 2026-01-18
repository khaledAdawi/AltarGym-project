import { useEffect, useState } from "react";
import axios from "axios";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
);

const API_BASE = "http://localhost/altragym_api/analytics";

export default function Analytics() {
    const [inventoryByWarehouse, setInventoryByWarehouse] = useState([]);
    const [lowStock, setLowStock] = useState([]);
    const [purchasesBySupplier, setPurchasesBySupplier] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const inv = await axios.get(`${API_BASE}/inventory_by_warehouse.php`);
        const low = await axios.get(`${API_BASE}/low_stock.php`);
        const pur = await axios.get(`${API_BASE}/purchases_by_supplier.php`);

        setInventoryByWarehouse(inv.data.data || []);
        setLowStock(low.data.data || []);
        setPurchasesBySupplier(pur.data.data || []);
    };

    

    const inventoryChart = {
        labels: inventoryByWarehouse.map(i => i.warehouse_name),
        datasets: [{
            label: "Total Quantity",
            data: inventoryByWarehouse.map(i => i.total_quantity),
            backgroundColor: "#0d6efd",
        }]
    };

    const supplierChart = {
        labels: purchasesBySupplier.map(p => p.supplier_name),
        datasets: [{
            label: "Purchases",
            data: purchasesBySupplier.map(p => p.total_purchases),
            backgroundColor: ["#ffc107", "#198754", "#dc3545"],
        }]
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">📊 Analytics & Statistics</h2>

            
            <div className="mb-5">
                <h5>Inventory by Warehouse</h5>
                <Bar data={inventoryChart} />
            </div>

            
            <div className="mb-5">
                <h5>Purchases by Supplier</h5>

                <div style={{ width: "600px", height: "600px", margin: "auto" }}>
                    <Pie
                        data={supplierChart}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                        }}
                    />
                </div>
            </div>


            
            <div>
                <h5>Low Stock Products</h5>
                <table className="table table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>Product</th>
                            <th>Warehouse</th>
                            <th>Quantity</th>
                            <th>Reorder Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lowStock.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center">No low stock items</td>
                            </tr>
                        ) : (
                            lowStock.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.product_name}</td>
                                    <td>{item.warehouse_name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.reorder_level}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
