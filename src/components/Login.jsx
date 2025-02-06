import React,{useState} from "react";
import {Link , useNavigate} from "react-router-dom"
import authService from "../appwrite/auth";
import { login as storeLogin} from "../store/authSlice";
import {Button , Input , Logo} from "./index.js";
import { useDispatch } from "react-redux";
import {useForm} from "react-hook-form";
export default function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register , handleSubmit} = useForm();
    const [error , setError] = useState("")

    const login = async (data) => {
        try {
            setError("")
            const session = authService.login(data);
            if(session){
                const userData = await authService.getCurrentUser();
                if(userData) dispatch(storeLogin(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return(
        <div
    className='flex items-center justify-center w-full'
    >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                            <div className="w-full max-w-[100px] text-center flex items-center justify-center">
                                <Logo width="100% align-self-center" />
                            </div>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                            Don&apos;t have any account?&nbsp;
                            <Link
                                to="/signup"
                                className="font-medium text-primary transition-all duration-200 hover:underline"
                            >
                                Sign Up
                            </Link>
                </p>
                {error && <p className="mt-8 text-center text-red-600">{error}</p>}
                <form onSubmit={handleSubmit(login)} className="mt-8">
                    <div className="space-y-5">
                        <Input 
                        placeholder="Email"
                        type="email"
                        label="Email"
                        {...register("email" , {
                            required : true,
                            validate:{
                                matchPattern : (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 
                                "Invalid email address"
                            }
                        })}
                        />
                        <Input 
                        placeholder="Password"
                        type="password"
                        label="Password"
                        {...register("password" , {
                            required : true,
                            validate : {
                                matchPattern : (value) => /^(?=.*\d).{8,}$/.test(value) ||
                                "Password should contain atleast 8 characters and one number"
                            }
                        })}
                        />

                        <Button
                        type = "submit"
                        className = "w-full"
                        >
                            Sign In
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}