import  { useState, useEffect } from 'react';

const CartNotification = () => {
  const [showNotification, setShowNotification] = useState(false);

  // Function to show the notification
  const showAddedToCartNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 1000); // Hide notification after 2 seconds
  };

  useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        setShowNotification(false);
      }, 1000); // Hide notification after 2 seconds
    }
  }, [showNotification]);

  return (
    <div className="fixed bottom-4 left-4">
      {showNotification && (
        <div className="bg-orange-500 text-white rounded-lg p-4 shadow-md  ">
          <p>Added to Cart!</p>
        </div>
      )}
      <button
        onClick={showAddedToCartNotification}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CartNotification;
