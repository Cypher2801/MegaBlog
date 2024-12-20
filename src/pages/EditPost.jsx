import React from "react";
import { Container , PostForm } from "../components/index.js";
import service from "../appwrite/config.js";
import { useState } from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
export default function EditPost() {
    const [post , setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if(slug)
        service.getPost(slug).then((post) => post ? setPost(post) : null);
        else navigate("/")
    } , [slug, navigate])
    return post && (
        <div className="py-8">
            <Container>
                <PostForm post = {post}/>
            </Container>
        </div>
    )
}