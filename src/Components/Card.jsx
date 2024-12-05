import React from 'react';
import "../Styles/Card.css"

export default function Card(props) {
  return (
    <>
        <div className="products">
            <div className="product-cards">
                <div className="product-card">
                    <div className="product-images">
                        <span className='clothe-text'>
                            <img src={"../Images/" + props.images} alt="" />
                        </span>
                        <p>{props.name}</p>
                        <h2>{props.title}</h2>
                        {/* <b>{props.price}</b> */}
                        <button>
                            <div class="default-btn">
                                <svg
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                stroke="#ffffff"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="cart-icon"
                                >
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path
                                    d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                                ></path>
                                </svg>
                                <span>Add to Cart</span>
                            </div>
                            <div class="hover-btn">
                                <span>{props.price}</span>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </div>

    </>
  );
}
