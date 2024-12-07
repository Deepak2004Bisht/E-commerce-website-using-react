import React from 'react';
import "../Styles/Blog.css"

export default function Blog() {
  return (
    <div>
      <section className="best-selling-products">
        <h2>Latest Blog Post</h2>
      </section>

      <div className='blog-container'>
        <div className="blog-card">
          <div className='blog-img'>
            <img src="../Images/16.jpg" alt="" />
          </div>

          <div className='blog-text'>
            <p>Modern, Fashion</p>
            <h2>Discover the best products</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. provident distinctio, ex, vel dolores quae minus modi. distinctio unde voluptatum doloremque nostrum.</p>
            <button class="button">Read More</button>
          </div>
        </div>

        <div className="blog-card">
          <div className='blog-img'>
            <img src="../Images/17.jpg" alt="" />
          </div>

          <div className='blog-text'>
            <p>Modern, Fashion</p>
            <h2>Power your holiday strategy</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. provident distinctio, ex, vel dolores quae minus modi. distinctio unde voluptatum doloremque nostrum.</p>
            <button class="button">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
