import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("https://dummyjson.com/posts");
    setPosts(res.data.posts); 
  };

  return (
    <div>
      <h1 className="text-center my-3">Posts from Dummy API</h1>
      <div className="container">
        <div className="row">
          {posts && posts.map((post, index) => (
            <div className="col-md-4" key={index}>
              <div className="card border-secondary mb-4" style={{ width: '18rem', margin: '10px' }}>
                <div className="card-body">
                  <h5 className="card-title">#{post.id} — {post.title.slice(0, 30)}...</h5>
                  <p className="card-text">{post.body.slice(0, 60)}...</p>
                  <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
                  <p>{JSON.stringify(post.reactions)}</p>
                  <p><strong>User ID:</strong> {post.userId}</p>
                  <a href="#" className="btn btn-outline-primary btn-sm">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
