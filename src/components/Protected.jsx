import React from "react";
import { useEffect , useState } from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
export default function Protected({children , authentication = true}) {

    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status)
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }
        else if(!authentication && authStatus !== authentication){
            navigate("/");
        }
        setLoading(false)
    } , [authentication , authStatus , navigate])

    return loading ? <h1>Loading...</h1> : <>{children}</>
}