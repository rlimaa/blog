import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Post from "../Features/Posts/Post";
import PostModel from "../Models/Post";

export default function Home() : JSX.Element {
    const [posts, setPosts] = useState<PostModel[]>();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(async response => setPosts(await response.json() as PostModel[]))
            .then(json => console.log(json))
    }, []);

    return (
        <>
            {
                posts?.map(post => <Post key={post.id} post={post}></Post>)
            }
        </>
    );
}