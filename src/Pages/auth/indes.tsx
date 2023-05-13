import React, { Component } from "react"
import SignIn from "./SignIn"
import SignUP from "./SignUp"



interface Authprops{
    sigInComp: React.ComponentType;
    signUpComp: React.ComponentType;
}
class Auth extends Component<Authprops>{

    private signInComp: React.ComponentType;
    private sigUpComp: React.ComponentType;

    constructor(props: Authprops){
        super(props);
        this.signInComp = props.sigInComp;
        this.sigUpComp = props.signUpComp;
    }
    
    public auth = () =>{

        return(
            <>
            <this.signInComp />
            <this.sigUpComp />
            
            </>
        );
        
    }

}

export default Auth