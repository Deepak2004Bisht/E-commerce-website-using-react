import React from 'react';
import "../Styles/Email.css"

export default function Email() {
  return (
    <section class="signup-section">
        <div class="signup-container">
            <i class="fa-regular fa-envelope"></i>
            <p>Sign up to enjoy free worldwide shipping and returns on your first order.</p>
            <form class="signup-form">
                <div class="form__group field">
                  <input type="email" class="form__field" placeholder="Name" required="" />
                  <label for="name" class="form__label">Enter your email address</label>  
                </div>
                <button className='send-btn'>Send</button>
            </form>
        </div>
    </section>
  );
}
