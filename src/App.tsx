import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [err, setErr] = useState("");

  const getAllPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => {
        setPosts(res.data);
        setLoading(true);
        setErr("");
      })
      .catch((err) => {
        setErr("Something went wrong...");
        setPosts([]);
        setLoading(false);
      });
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div className="App">
      {loading ? (
        posts.map((el, index) => <div key={el.id}>{el.title}</div>)
      ) : (
        <div>{err}</div>
      )}
    </div>
  );
}
