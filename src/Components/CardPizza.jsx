import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img className="card-img-top" src={img} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Ingredientes: {ingredients.join(', ')}</p>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <a href="#" className="btn btn-primary">Ver más🍕</a>
        <a href="#" className="btn btn-secondary ml-2">Añadir🛒</a>
      </div>
    </div>
  );
};

export default CardPizza;