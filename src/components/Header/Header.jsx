import React from "react";
import {Container , Logo , LogoutBtn} from "../index.js" 
import {Link , useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
export default function Header(){

    const authStatus = useSelector((state) => state.auth.status)
    // console.log("Auth Status" , authStatus);
    const navigate = useNavigate();

    const navItems = [
        {
            name : "Home",
            slug : "/",
            active : true
        } ,
        {
            name : "Login",
            slug : "/login",
            active : !authStatus
        } ,
        {
            name : "Signup",
            slug : "/signup",
            active : !authStatus
        } ,
        {
            name : "All Posts",
            slug : "/all-posts",
            active : authStatus
        } ,
        {
            name : "Add Post",
            slug : "/add-post",
            active : authStatus
        }
    ]

    return(
        <>
            <header className="py-3 shadow bg-gray-500 w-full">
                <Container>
                    <nav className="flex items-center">
                        <div className="mr-4">
                            <Link to="/">
                                <Logo width = "70px"/>
                            </Link>
                        </div>
                        <ul className="flex ml-auto">
                            {navItems.map((item) => (
                                item.active ? (
                                    <li key={item.slug}>
                                         <button 
                                         className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                         onClick={() => navigate(item.slug)}
                                         >
                                            {item.name}
                                         </button>
                                    </li>
                                ) : null
                            ))}
                            {authStatus ? (
                                <li>
                                    <LogoutBtn />
                                </li>
                            ) : null}
                        </ul>
                    </nav>
                </Container>
            </header>
        </>
    )
}