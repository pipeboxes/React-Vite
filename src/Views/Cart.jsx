import React from 'react';

const Cart = ({ cart, setCart }) => {

  const total = cart.reduce((sum, pizza) => sum + (pizza.price * (pizza.quantity || 1)), 0);

  const increaseQuantity = (id) => {
    setCart(cart.map(pizza =>
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(pizza =>
      pizza.id === id ? { ...pizza, quantity: Math.max(pizza.quantity - 1, 0) } : pizza
    ).filter(pizza => pizza.quantity > 0));
  };

  return (
    <div className="container mt-5">
      {cart.length === 0 ? (
        <div className="cart-message-container">
          <h2>🛒 Carrito de Compras</h2>
          <p className="empty-cart-message">Tu carrito está vacío. ¡Añade algunas pizzas!</p>
        </div>
      ) : (
        <div className="cart-content">
          <h2>🛒 Tu Carrito de Compras</h2>
          <div className="row">
            {cart.map((pizza) => (
              <div className="col-12 col-md-6 col-lg-4 mb-5 d-flex justify-content-center" key={pizza.id}>
                <div className="card">
                  <img src={pizza.img} className="card-img-top" alt={pizza.name} />
                  <div className="card-body">
                    <h5 className="card-title">{pizza.name}</h5>
                    <p className="card-text">Cantidad: {pizza.quantity}</p>
                    <p className="card-text">Ingredientes: {pizza.ingredients.join(', ')}</p>
                    <p className="card-text price">Precio: ${pizza.price.toLocaleString()}</p>
                    <button onClick={() => increaseQuantity(pizza.id)} className="btn btn-primary">+</button>
                    <button onClick={() => decreaseQuantity(pizza.id)} className="btn btn-danger ml-2">-</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3>Total: ${total.toLocaleString()}</h3>
          <button className="btn btn-success">Pagar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;