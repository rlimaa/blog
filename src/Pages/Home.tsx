import React, { useEffect, useState } from "react";
import Post from "../Features/Posts/Post";
import PostForm from "../Features/Posts/PostForm";
import PostModel from "../Models/Post";

export default function Home(): JSX.Element {
  const [posts, setPosts] = useState<PostModel[]>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(async (response) =>
        setPosts((await response.json()) as PostModel[])
      )
      .then((json) => console.log(json));
  }, []);

  const handlePost = (post: Partial<PostModel>) => {
    alert(JSON.stringify(post));
  };

  return (
    <>
      <PostForm handlePost={handlePost} />
      {posts?.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
}
