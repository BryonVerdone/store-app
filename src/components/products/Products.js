import React from 'react';

export default function Products({ products }) {
  // let dataElements = props.map(product => {
  //   key = {product.id}

  // })asa
  return (
    <>
      {products.map((product) => {
        const { id, title, image, price } = product;
        return (
          <article key={id}>
            <h2>{title}</h2>
            <img src={image} />
            <span>{price}</span>
          </article>
        );
      })}
    </>
  );
}
