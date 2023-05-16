import { Route, Routes } from "react-router-dom"
import SignUp from "../Pages/auth/SignUp"
import SignIn from "../Pages/auth/SignIn"
import Header from "../Componenets/Header"



const AuthRouter = () => {

    return (
        <>
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/header" element={<Header />} />
        </Routes>
        </>
    )
}

export default AuthRouter