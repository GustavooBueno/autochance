import React, { useState } from 'react';
import { FaCar, FaMapMarkerAlt, FaTachometerAlt, FaCalendarAlt, FaWrench } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import "./VeichleDetails.css";

const VeichleDetails = () => {
  const { carId } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  const carImages = [
    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
  ];

  const carDetails = {
    name: 'Toyota Corolla' + carId,
    price: 25000,
    engine: '2.0 Turbo',
    year: 2022,
    mileage: 15000,
    city: 'São Paulo, SP',
    description: 'This Toyota Corolla is in excellent condition, featuring a powerful 2.0 Turbo engine. It offers great fuel efficiency and a smooth ride. The car has been well-maintained and comes with a full service history. It\'s perfect for both city driving and long trips.'
  };

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  const handleVisitClick = () => {
    // Redirect to visit scheduling page
    console.log('Redirecting to visit scheduling page');
  };

  const handleMechanicOpinionClick = () => {
    // Redirect to mechanic's opinion page
    console.log('Redirecting to mechanic\'s opinion page');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="relative h-96">
          <img
            src={carImages[currentImage]}
            alt={`${carDetails.name} - Image ${currentImage + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleImageChange(index)}
                className={`w-3 h-3 rounded-full ${index === currentImage ? 'bg-white' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{carDetails.name}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-center">
              <FaCar className="text-blue-500 mr-2" />
              <span className="font-semibold">Price:</span>
              <span className="ml-2">${carDetails.price.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <FaWrench className="text-blue-500 mr-2" />
              <span className="font-semibold">Engine:</span>
              <span className="ml-2">{carDetails.engine}</span>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="text-blue-500 mr-2" />
              <span className="font-semibold">Year:</span>
              <span className="ml-2">{carDetails.year}</span>
            </div>
            <div className="flex items-center">
              <FaTachometerAlt className="text-blue-500 mr-2" />
              <span className="font-semibold">Mileage:</span>
              <span className="ml-2">{carDetails.mileage.toLocaleString()} km</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />
              <span className="font-semibold">City:</span>
              <span className="ml-2">{carDetails.city}</span>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">{carDetails.description}</p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleVisitClick}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Schedule a Visit
            </button>
            <button
              onClick={handleMechanicOpinionClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Mechanic's Opinion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeichleDetails;