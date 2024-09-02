import React from 'react';

const CardPizza = ({ name, price, ingredients, img, description, addToCart }) => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img className="card-img-top" src={img} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul className="card-text">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-text price">Precio: ${price.toLocaleString()}</p>
        <p className="card-text">{description}</p>
        <button className="btn btn-secondary ml-2" onClick={addToCart}>Añadir🛒</button>
        <a href="#" className="btn btn-primary">Ver más🍕</a>
      </div>
    </div>
  );
};

export default CardPizza;