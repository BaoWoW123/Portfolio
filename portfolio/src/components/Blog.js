import { useEffect, useState } from "react";
import "../styles/Blog.css";
const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const getBlogs = async () => {
    try {
      const res = await fetch("https://sparkling-snowflake-3789.fly.dev/posts");
      const posts = await res.json();
      setBlog(posts);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching", err);
    }
  };

  const decodeData = (str) => {
    const tempText = document.createElement('textarea') 
    tempText.innerHTML = str;
    return tempText.value;
  }
  
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div className="Blog">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
            <p style={{color:'white', fontWeight:'bold', textAlign:'center'}}>NOTICE: This is a test blog and project hidden in the portfolio, you can ignore this</p>
          {blog ? (
            <div className="blog">
              {blog.posts.map((post) => {
                return (
                <div>
                    <h1>{post.title}</h1>
                    <div>{decodeData(post.content)}</div>
                </div>
                )
              })}
            </div>
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;
