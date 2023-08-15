import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} - Quantity: {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart}>Clear Cart</button>

      <h2>Product List</h2>
      {/* Render your product list here */}
      {/* Example button to add an item to the cart */}
      <button
        onClick={() =>
          addToCart({ id: 1, name: 'Product 1', price: 10, quantity: 1 })
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;
