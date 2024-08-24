import React, { useState, useEffect } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = ({ addToCart }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error fetching pizzas:', error));
  }, []);

  return (
    <>
      <Header />
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