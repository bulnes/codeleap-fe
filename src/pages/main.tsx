import { useEffect, useState } from "react";
import type { PostProps } from "../@types/post-props";
import { Form } from "../components/form";
import { Post } from "../components/post";
import { listAllPosts } from "../repositories/code-leap-repo";

export const MainPage = () => {
  const [postsList, setPostsList] = useState<PostProps[]>([]);

  const addNewPost = (newPost: PostProps) => {
    setPostsList((prevData) => [newPost, ...prevData]);
  };

  const deletePost = (postId: number) => {
    setPostsList((prevData) =>
      prevData.filter((postData) => postData.id !== postId)
    );
  };

  const updatePost = (updatedPost: PostProps) => {
    setPostsList((prevData) =>
      prevData.map((p) => {
        if (p.id === updatedPost.id) {
          p.title = updatedPost.title;
          p.content = updatedPost.content;
          p.created_datetime = new Date();
        }

        return p;
      })
    );
  };

  useEffect(() => {
    const getPosts = async () => {
      const posts = await listAllPosts();
      setPostsList(posts);
    };

    getPosts();
  }, []);

  return (
    <section className="bg-white w-full max-w-[800px] min-h-screen">
      <div className="bg-codeleap-brand py-7 px-8">
        <h1 className="font-bold text-[22px] text-white">CodeLeap Network</h1>
      </div>

      <main className="flex flex-col gap-6 p-6">
        <Form onAddNewPost={addNewPost} />

        {postsList.map(({ id, username, created_datetime, title, content }) => (
          <Post
            key={id}
            id={id}
            username={username}
            created_datetime={created_datetime}
            title={title}
            content={content}
            onDeletePost={deletePost}
            onEditPost={updatePost}
          />
        ))}
      </main>
    </section>
  );
};
