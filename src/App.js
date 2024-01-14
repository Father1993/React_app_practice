import React, { useRef, useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";
import PostForm from "./components/PostForm";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: "Description"},
    {id: 2, title: "JavaScript 2", body: "Description"},
    {id: 3, title: "JavaScript 3", body: "Description"},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList remove={removePost} posts={posts} title="Список постов JS"/>
    </div>
  );
}

export default App;
