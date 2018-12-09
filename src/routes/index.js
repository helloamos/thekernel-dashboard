import Login from "../views/login/login.js";
import Signup from "../views/signup/signup.js";
import Dashboard from "../views/dashboard/dashboard.js";

const indexRoutes = [
    { 
        path: "/", 
        name: "Login", 
        component: Login 
    },
    { 
        path: "/signup", 
        name: "Signup", 
        component: Signup 
    },
    { 
        path: "/dashboard", 
        name: "Dashboard", 
        component: Dashboard 
    },

];


export default indexRoutes;