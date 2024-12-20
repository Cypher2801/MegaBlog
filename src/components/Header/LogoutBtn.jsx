import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
export default function LogoutBtn() {
    const dispatch = useDispatch()
    const SubmitHandler = () => {
        authService.logout()
        .then(() => dispatch(logout()))
    }

    return (
        <button
        className="inline-block bg-blue-500 duration-200 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
        onClick={SubmitHandler}
        >Logout
        </button>
    )
}