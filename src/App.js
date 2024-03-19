import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './Styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/MySelect";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  ])
  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortPosts = (sort) => {
    console.log(sort)
  }

  <mySelect
    defaultValue="Сортировка по"
    value={selectedSort}
    onChange={sort => setSelectedSort(sort)}
    options={[
      { value: 'title', name: 'По названию' },
      { value: 'body', name: 'По описанию' },]}
  />
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />

      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts()}
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: "По названию" },
            { value: 'body', name: "По описанию" },
          ]}
          />
      </div>


      {posts.length !== 0
        ?

        <PostList remove={removePost} posts={posts} title="Posts about JS" />

        :
        <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
      }
    </div>

  );
}

export default App;