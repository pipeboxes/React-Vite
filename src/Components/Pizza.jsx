import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import CardPizza from "./CardPizza";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/p001`)
      .then(response => response.json())
      .then(data => setPizza(data))
      .catch(error => console.error('Error fetching pizza:', error));
  }, [id]);

  if (!pizza) return <p>Loading...</p>;

  return (
        <CardPizza
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
          description={pizza.desc}
          addToCart={() => { }}
        />
  );
};

export default Pizza;