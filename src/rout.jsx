import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layout/MainLayout";


import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Shop from "./pages/shop/Shop";
import ProductDetails from "./pages/productManagement/ProductDetails";
import Cart from "./pages/cart/Cart";
import InventoryManagement from "./pages/inventory/InventoryManagement";
import Purchases from "./pages/purchases/Purchases";
import Payment from "./pages/payment/Payment";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ProductManagement from "./pages/productManagement/ProductManagement";
import Analytics from "./pages/analytics/Analytics";


import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            
            {
                index: true,
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "product/:id",
                element: <ProductDetails />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },

            
            {
                path: "cart",
                element: (
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                ),
            },

            
            {
                path: "inventory",
                element: (
                    <ProtectedRoute role="admin">
                        <InventoryManagement />
                    </ProtectedRoute>
                ),
            },
            {
                path: "purchases",
                element: (
                    <ProtectedRoute role="admin">
                        <Purchases />
                    </ProtectedRoute>
                ),
            },
            {
                path: "products",
                element: (
                    <ProtectedRoute role="admin">
                        <ProductManagement />
                    </ProtectedRoute>
                ),
            },
            {
                path: "analytics",
                element: (
                    <ProtectedRoute role="admin">
                        <Analytics />
                    </ProtectedRoute>
                )
            },


            
            {
                path: "payment",
                element: (
                    <ProtectedRoute>
                        <Payment />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);

export default router;
