import React, { useState, useEffect, useContext } from 'react';
import Header from '../Components/Header';
import CardPizza from '../Components/CardPizza';
import { CartContext } from '../Views/CartContext';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error fetching pizzas:', error));
  }, []);

  return (
    <>
      <div className="main-content container-fluid d-flex flex-column align-items-center">
        <div className="row justify-content-center w-100">
          {pizzas.map(pizza => (
            <div className="col-12 col-md-6 col-lg-4 mb-5 d-flex justify-content-center" key={pizza.id}>
              <CardPizza 
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                description={pizza.desc}
                addToCart={() => addToCart(pizza)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;