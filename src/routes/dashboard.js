import Dashboard from "./views/dashboard/dashboard.js";


const dashboardRoutes = [
    { 
        path: "/dashboard", 
        name: "Login", 
        component: Dashboard 
    },
    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];


export default dashboardRoutes;