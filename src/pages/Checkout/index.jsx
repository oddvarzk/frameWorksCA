import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCart = () => {
      try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          const cartData = JSON.parse(savedCart);
          setCartItems(cartData);
          calculateTotal(cartData);
        }
      } catch (error) {
        console.error('Failed to load cart data:', error);
      }
    };

    loadCart();

    const onCartUpdated = () => loadCart(); 
    window.addEventListener('cartUpdated', onCartUpdated);

    return () => {
      window.removeEventListener('cartUpdated', onCartUpdated);
    };
  }, []);

  const handleRemoveItem = useCallback((itemIndex) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((_, index) => index !== itemIndex);
      updateLocalStorage(updatedCart);
      calculateTotal(updatedCart);
      return updatedCart;
    });
  }, []);

  const updateLocalStorage = (cartData) => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartData));
      window.dispatchEvent(new Event('cartUpdated'));
    } catch (error) {
      console.error('Error updating localStorage:', error);
    }
  };

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((sum, item) => sum + (item.discountedPrice || 0), 0);
    setTotal(totalAmount.toFixed(2));
  };

  const handleCheckout = () => {
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('cartUpdated'));
    navigate('/CheckoutSuccessPage');
  };

  return (
    <div className="max-w-2xl mx-auto p-5">
      <h2 className="text-3xl font-bold mb-6">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your cart is empty. Start shopping to add items!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-4 border-b border-gray-200 shadow-sm">
              <div className="flex items-center gap-4">
                {item.image?.url ? (
                  <img src={item.image.url} alt={item.title || 'Product'} className="w-20 h-20 object-cover rounded-md" />
                ) : (
                  <div className="w-20 h-20 bg-gray-300 flex items-center justify-center rounded-md">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-lg">{item.title || 'Unnamed Item'}</h3>
                  <p className="text-sm text-gray-600">Rated {item.rating || 'N/A'} / 5</p>
                  <p className="text-md text-deepBlue font-medium">{item.discountedPrice ? `${item.discountedPrice} NOK` : 'Price Unavailable'}</p>
                </div>
              </div>
              <button onClick={() => handleRemoveItem(index)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-all">
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-semibold text-lg mt-6">
            <p>Total: <span className="text-deepBlue">{total} NOK</span></p>
            <button onClick={handleCheckout} className="text-paleSand bg-deepBlue rounded-sm px-4 py-2">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;


