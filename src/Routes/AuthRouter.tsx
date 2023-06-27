import { Route, Routes } from "react-router-dom"
import SignUp from "../Pages/auth/SignUp"
import SignIn from "../Pages/auth/SignIn"
import Home from "../Pages/Home"
import BuyerDashboard from "../Pages/BuyerDashboard"



const AuthRouter = () => {

    return (
        <>
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/buyerdashboard" element={<BuyerDashboard />} />
            
        </Routes>
        </>
    )
}

export default AuthRouter