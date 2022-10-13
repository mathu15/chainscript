import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";
import blogPost from "../../data/blog.json";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import RecentPost from "../../containers/Home/RecentPost";

/**
 * @author
 * @function BlogPost
 **/

const BlogPost = (props) => {
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  });
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const slug = props.match.params.slug;
    const post = blogPost.data.find((post) => post.slug == slug);
    setPost(post);
    setSlug(slug);
  }, [post, props.match.params.slug]);

  if (post.blogImage == "") return null;

  return (
    <section className="post-header">
      <div className="header-content post-container">
        {/* <a href="#" className=""></a> */}
        <img
          src={require("../../blogPostImages/" + post.blogImage)}
          alt="Post Image"
          className="header-img"
        />
      </div>
      <div className="sidebar-flex">
        <div className="blogpost-info">
          <h2 className="header-title">{post.blogTitle}</h2>
          <div className="postCats">
            <span className="post-cat">{post.blogCategory}</span>
            <span className="post-date">{post.postedOn} </span>
          </div>

          <div className="post-content post-container">
            <h2 className="sub-heading">{post.blogTitle}</h2>
            <p className="post-text">{post.blogText}</p>
          </div>
        </div>

        <div className="recentside-post">
          <Card
            style={{
              marginBottom: "20px",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <div className="cardHeader">
              <div className="social-side">
                <a href="#">
                  <i class="bx bxl-facebook"></i>
                  <i class="bx bxl-twitter"></i>
                  <i class="bx bxl-instagram"></i>
                  <i class="bx bxl-linkedin"></i>
                  <i class="bx bxl-youtube"></i>
                </a>
              </div>
            </div>
          </Card>
          <RecentPost />
        </div>
      </div>

      <section>
        <Footer />
      </section>
    </section>
  );
};

export default BlogPost;
