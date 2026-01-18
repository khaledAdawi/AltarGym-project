export const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export const isLoggedIn = () => {
    return !!localStorage.getItem("user");
};

export const isAdmin = () => {
    const user = getUser();
    return user?.role === "admin";
};

export const isCustomer = () => {
    const user = getUser();
    return user?.role === "customer";
};
export const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/home"; 
};

