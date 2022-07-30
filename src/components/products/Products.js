import React from 'react';
import './Products.css';

export default function Products({ products }) {
  return (
    <>
      {products.map((product) => {
        const { id, title, image, price } = product;
        return (
          <article key={id}>
            <h2>{title}</h2>
            <div className='img-container'>
              <img src={image} />
            </div>
            <span>${price}</span>
          </article>
        );
      })}
    </>
  );
}
