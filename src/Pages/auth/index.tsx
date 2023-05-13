import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { Route, Routes } from "react-router-dom"

    
    const AuthIndex =  () => {

        return(
            <>
            <Routes>
                <Route path="/auth/signin" element={<SignIn />} />
                <Route path="/auth/signup" element={<SignUp />} />
            </Routes>
    
            </>
        );
        
    }

export default AuthIndex