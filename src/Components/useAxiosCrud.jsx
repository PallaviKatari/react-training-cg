import React, { useState } from "react";
import useAxios from "axios-hooks";

export default function AxiosHookCRUD() {
  const API_URL = "http://localhost:5000/posts";

  // Fetch all posts (GET)
  const [{ data: posts, loading, error }, refetch] = useAxios(API_URL);

  // State for new post details
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  // Handle input change
  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  // Create a new post (POST)
  const [, executePost] = useAxios(
    { url: API_URL, method: "POST" },
    { manual: true }
  );

  const handleAddPost = async () => {
    if (!newPost.title || !newPost.body) {
      alert("Please fill all fields");
      return;
    }
    await executePost({ data: newPost });
    setNewPost({ title: "", body: "" }); // Reset form
    alert("Post added successfully!");
    refetch(); // Refresh post list
  };

  // Update a post (PUT)
  const [, executePut] = useAxios(
    { method: "PUT" },
    { manual: true }
  );

  const handleUpdatePost = async (id) => {
    const updatedTitle = prompt("Enter new title:");
    if (!updatedTitle) return;

    await executePut({ url: `${API_URL}/${id}`, data: { title: updatedTitle } });
    alert("Post updated successfully!");
    refetch();
  };

  // Delete a post (DELETE)
  const [, executeDelete] = useAxios(
    { method: "DELETE" },
    { manual: true }
  );

  const handleDeletePost = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    await executeDelete({ url: `${API_URL}/${id}` });
    alert("Post deleted successfully!");
    refetch();
  };

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading posts...</h2>;
  if (error) return <h2 style={{ textAlign: "center", color: "red" }}>Error fetching data: {error.message}</h2>;

  return (
    <div style={{ marginTop: 50, textAlign: "center" }}>
      <h1>Post List (CRUD with useAxios)</h1>

      {/* Add Post Form */}
      <div style={{ marginBottom: 20 }}>
        <input type="text" name="title" placeholder="Post Title" value={newPost.title} onChange={handleChange} style={{ marginRight: 10 }} />
        <input type="text" name="body" placeholder="Content" value={newPost.body} onChange={handleChange} />
        <button onClick={handleAddPost} style={{ marginLeft: 10 }}>Add Post</button>
      </div>

      {/* Post List */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} style={{
              width: 250, padding: 10, margin: 10, border: "1px solid gray",
              borderRadius: 10, boxShadow: "2px 2px 10px rgba(0,0,0,0.1)", textAlign: "center"
            }}>
              <h3>{post.title}</h3>
              <p>Content: {post.body}</p>
              <button onClick={() => handleUpdatePost(post.id)} style={{ marginRight: 5 }}>Edit</button>
              <button onClick={() => handleDeletePost(post.id)} style={{ backgroundColor: "red", color: "white" }}>Delete</button>
            </div>
          ))
        ) : (
          <h3>No posts available</h3>
        )}
      </div>
    </div>
  );
}
