import React from 'react';
import "../Styles/Detail.css"

export default function Detail() {
  return (
    <div className='service-container'>
        <div className="service-box">
            <i class="fa-solid fa-truck-fast"></i>
            <h3>Free Shipping WorldWide</h3>
            <p>Talk about your service</p>
        </div>

        <div className="service-box">
            <i class="fa-solid fa-hand-holding-dollar"></i>
            <h3>Money Back Guarantee</h3>
            <p>Within 30 day for an exchange</p>
        </div>

        <div className="service-box">
            <i class="fa-solid fa-headphones"></i>
            <h3>Online Support</h3>
            <p>24 hours a day, 7 day a week</p>
        </div>

        <div className="service-box">
            <i class="fa-solid fa-money-bill"></i>
            <h3>Payment Return</h3>
            <p>Pay with worldwide credit cards.</p>
        </div>
    </div>
  );
}
