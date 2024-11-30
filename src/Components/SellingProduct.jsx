import React from 'react';
import { useEffect, useState } from 'react';
import "../Styles/SellingProduct.css";
import Card from './Card';

export default function SellingProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('../productName.json')
      .then(response => response.json())
      .then(data=> setData(data))
      .catch(error => console.error("missing images"));
  },[])


  return (
    <div className='outer'>
      <div className='inner'>
        <h1>Best Selling Products</h1>
        <p className='para'>There are many products of men's and women of this website</p>
      </div>

      <div className='img-flex'>
        {
          data.map((item,index) => {
            return <Card {...item} key={index}/>
          })
        }
      </div>
    </div>
  );
}
