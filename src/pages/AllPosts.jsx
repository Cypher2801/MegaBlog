import React , {useEffect , useState} from "react";
import { Container , PostCard } from "../components/index.js";
import service from "../appwrite/config.js";
export default function AllPosts() {
    const [posts , setPosts] = useState([]);
    useEffect(() => {
        service.getPosts([]).then((posts) => posts ? setPosts(posts.documents) : null)
    } , [])
    if(posts.length === 0){
        return <div className="py-8 w-full">No posts found</div>
    }
    return (
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