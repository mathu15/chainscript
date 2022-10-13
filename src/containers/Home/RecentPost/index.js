import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../../../components/UI/Card";

import blogPost from "../../../data/blog.json";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function RecentPost
 **/

const RecentPost = (props) => {
  const [posts, setPosts] = useState([]);

  const filterResult = (catItem) => {
    const result = blogPost.data.filter((curDate) => {
      return curDate.blogCategory === catItem;
    });
    setPosts(result);
  };
  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
    // setPosts(filterResult());
  }, [posts]);
  // return posts.map((post) => {
  return (
    <>
      <div className="post-filter container">
        <button className="filter-item active-filter" data-filter="all">
          View All
        </button>
        <button className="filter-item">Events</button>
        <button className="filter-item" data-filter="all">
          interviews
        </button>
        <button className="filter-item" onClick={() => filterResult("Updates")}>
          updates
        </button>
      </div>
      <section className="post container">
        {posts.map((post) => (
          <div className="post-box">
            <NavLink key={post.id} className="link" to={`/post/${post.slug}`}>
              <img
                src={require(`../../../blogPostImages/${post.blogImage}`)}
                alt="convention"
                className="post-img"
              />
            </NavLink>

            <div className="postCats">
              <span className="postCat">{post.blogCategory}</span>
              <span className="postDate">{post.postedOn} </span>
            </div>

            <NavLink className="link" to={`/post/${post.slug}`}>
              <span className="post-title">{post.blogTitle}</span>
            </NavLink>

            <p className="postDesc">{post.blogText}</p>
          </div>
        ))}
        ;
      </section>
    </>
  );
  {
    /* }); */
  }
};
export default RecentPost;
