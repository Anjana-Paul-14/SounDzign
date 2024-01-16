import React from 'react';
import './Blog.css';
import {blog1, blog2, blog3} from '../../assets';

const Blog = () => {
  return (
    <section id='blog' className='pink'>
      <div className='wrapper'>
        <h2 className="light">Latest Posts</h2>

        <div className='content-container'>
          <div className='post'>
            <div className='tag'>Daw</div>
            <a href="#">
              <img src={blog1} alt="" />
            </a>
            <a href="#">
                <h3 className="post-title">How to use drum machine</h3>
              </a>
          </div>

          <div className='post'>
            <div className='tag'>Mixing</div>
            <a href="#">
              <img src={blog2} alt="" />
            </a>
            <a href="#">
                <h3 className="post-title">How to mix guitars</h3>
              </a>
          </div>

          <div className='post'>
            <div className='tag'>vox</div>
            <a href="#">
              <img src={blog3} alt="" />
            </a>
            <a href="#">
                <h3 className="post-title">the real power</h3>
              </a>
          </div>
        </div>

        <div className="btn-container">
          <a href="#" className="all-posts-btn">
            All Posts
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Blog;