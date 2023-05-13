import { Route, Routes } from "react-router-dom"
import SignUp from "../Pages/auth/SignUp"
import SignIn from "../Pages/auth/SignIn"



const AuthRouter = () => {

    return (
        <>
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/sigin" element={<SignIn />} />
        </Routes>
        </>
    )
}

export default AuthRouter