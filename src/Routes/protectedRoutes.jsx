import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import authService from "../api/services/auth.service";

const ProtectedRoute=({auth ,component:Component,...rest})=>{
    
    return (
        <Route {...rest} render ={
            (props)=>{
                if(authService) 
                {
                    return <Component {...props}/>
                }
                if(!authService.)
                {
                    return(
                    <Redirect  to {
                        {
                            pathname :"/login",
                            state:{from:props.location}
                        
                        }

                    ) 
                }
            }
        }
    )
}
export default ProtectedRoute;