import React from "react";
import { PostCard , Container } from "../components/index.js";
import service from "../appwrite/config.js";
import { useEffect } from "react";
import { useState } from "react";
export default function Home() {
    const [posts, setPosts ] = useState([])
    useEffect(() => {
        service.getPosts().then((posts) => posts ? setPosts(posts.documents) : null)
    } , [posts]);
    if(posts.length === 0){
        return <div className="py-8 w-full">No posts found</div>
    }
    else{
        return(
            <div className="py-8 w-full">
                <Container >
                    <div className="flex flex-wrap">
                        {posts.map((post) => {
                            return (
                                <div key={post.$id} className="w-1/4 p-2">
                                    <PostCard {...post} />
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </div>
        )
    }
}