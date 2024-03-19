import React, { useState } from 'react';
import MyButton from './button/MyButton';
import MyInput from './input/MyInput';
const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }

    return (
        <form>
            {/*управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Title"
            />

            {/* неуправляемый/неконтролируемый компонент */}
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="Description" />


            <MyButton onClick={addNewPost}> Create post</MyButton>
        </form>
    );
}
export default PostForm;