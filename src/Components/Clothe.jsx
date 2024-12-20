import React from 'react';
import "../Styles/Clothe.css"

export default function Clothe() {
  return (
    <>
      <div className='card-flex'>
        <div className="cards">
          <div className="card-img">
            <div className="images">
              <span className="clothes-text">
                <img src="../Images/1.png" alt="" />
              </span>
            </div>
          </div>

          <div className="card-img two">
            <div className="images">
              <span className="clothes-text">
                <img src="../Images/2.png" alt="" />
              </span>
            </div>
          </div>

          <div className="card-img three">
            <div className="images">
              <span className="clothes-text">
                <img src="../Images/3.png" alt="" />
              </span>
            </div>
          </div>

        </div>
      </div>
  </>
  );
}
