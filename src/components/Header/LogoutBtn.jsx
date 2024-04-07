import React from "react";
import { UseDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";


function LogoutBtn(){

    // now lets make a dispatch

    const dispatch = useDispatch()

    //now create a logout handler

    const logoutHanndler = ()=>{
        // as we all know it has promise the logout
        authService.logout().then(()=>{
            dispatch(logout())
            // it is done to make the store updated
        }).catch((err)=>{
            console.log(`Oops!, error occured _ ${err}`);
        })
    }

    return(
        <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
            Log Out
        </button>
    )
}

export default LogoutBtn