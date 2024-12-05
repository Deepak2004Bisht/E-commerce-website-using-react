import React from 'react';

export default function NewCard(props) {
  return (
        <div className="products">
            <div className="product-cards">
                <div className="product-card">
                    <div className="product-images">
                        <span className='clothe-text'>
                            <img src={"../Images/" + props.images} alt="" />
                        </span>
                        <p>{props.name}</p>
                        <h2>{props.title}</h2>
                        <b>{props.price}</b>
                    </div>
                </div>
            </div>
        </div>
    );
}
