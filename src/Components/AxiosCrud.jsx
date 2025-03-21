import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/posts";

const AxiosCRUD = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  // Fetch Data (Read)
  useEffect(() => {
    axios.get(API_URL)
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Create a Post
  const createPost = () => {
    axios.post(API_URL, newPost)
      .then((response) => {
        setPosts([...posts, response.data]);
        setNewPost({ title: "", body: "" });
      })
      .catch((error) => console.error("Error creating post:", error));
  };

  // Update a Post
  const updatePost = (id) => {
    axios.put(`${API_URL}/${id}`, { ...newPost, id })
      .then((response) => {
        setPosts(posts.map((post) => (post.id === id ? response.data : post)));//3===3
        setNewPost({ title: "", body: "" });
      })
      .catch((error) => console.error("Error updating post:", error));
  };

  // Delete a Post
  const deletePost = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => setPosts(posts.filter((post) => post.id !== id)))
      .catch((error) => console.error("Error deleting post:", error));
  };

  return (
    <div>
      <h2>CRUD with JSON Server</h2>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Body"
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
      <button onClick={createPost}>Create</button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => updatePost(post.id)}>Update</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosCRUD;
