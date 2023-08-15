import { Route, Routes } from "react-router-dom"
import SignUp from "../Pages/auth/SignUp"
import SignIn from "../Pages/auth/SignIn"
import Home from "../Pages/Index"
import BuyerDashboard from "../Pages/BuyerDashboard"
import Product from "../Pages/Product"



const AuthRouter = () => {

    return (
        <>
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<Home />} />
            <Route path="/buyerdashboard" element={<BuyerDashboard />} />
            <Route path="/product" element={<Product />} />
            
        </Routes>
        </>
    )
}

export default AuthRouter