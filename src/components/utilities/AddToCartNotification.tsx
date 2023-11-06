import  { useState, useEffect } from 'react';

interface AddToCartNotidficationProps{
  showModal:boolean
  setShowModal: (showModal: boolean) => void
}

const AddToCartNotification = ({ showModal, setShowModal }:AddToCartNotidficationProps) => {
  const [showNotification, setShowNotification] = useState(false);

  const showAddedToCartNotification = () => {

    setShowNotification(true);
    setTimeout(() => {
      setShowModal(false)
      setShowNotification(false);
    }, 1000); // Hide notification after 1 second
  };

  useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        setShowNotification(false);
      }, 1000); // Hide notification after 1 second
    }
  }, [showNotification]);

  useEffect(() => {
    if (showModal) {
      showAddedToCartNotification();
    }
  }, [showModal]);

  return (
    <div
    className={`bg-orange-500 text-white rounded-lg  fixed  bottom-4 left-4 p-4 shadow-md transition-all duration-500 transform ${
      showNotification ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`}
  >Added to cart!</div>
  );
};

export default AddToCartNotification;
