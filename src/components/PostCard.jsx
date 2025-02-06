import React from "react";
import service from "../appwrite/config.js";
import {Link} from "react-router-dom";
export default function PostCard({$id , title , featuredImage}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="card bg-white rounded-lg h-64 p-2">
            <div className="card-image rounded-lg">
                <img 
                    src={service.getFilePreview(featuredImage)} 
                    alt={title} 
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
                <div className="heading font-bold mt-2">
                    {title}
                </div>
            </div>
            
        </Link>
    );
}