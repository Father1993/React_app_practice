import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import "./styles/App.css";
import MySelect from "./components/UI/select/MySelect";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "ааа", body: "бб"},
    {id: 2, title: "гг 2", body: "аа"},
    {id: 3, title: "вв 3", body: "яя"},
  ])

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px'}} />
      <div>

          <input type="text" />
          <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Сортировка"
            option={[
              {value: 'title', name: 'По названию'},
              {value: 'body', name: 'По описанию'}
            ]}
          />
      </div>
      {posts.length
        ? 
        <PostList remove={removePost} posts={posts} title="Список постов JS"/>
        : 
        <h1 style={{textAlign: 'center'}}>
          Посты не найдены!
        </h1>
      }
    </div>
    
  );
}

export default App;
