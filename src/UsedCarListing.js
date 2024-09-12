// src/UsedCarListing.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar o hook useNavigate
import {
  FaCarSide,
  FaRoad,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDollarSign,
  FaWrench,
} from "react-icons/fa";
import { motion } from "framer-motion";

const UsedCarListing = () => {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [mileage, setMileage] = useState(200000);
  const [year, setYear] = useState(2000);
  const [location, setLocation] = useState("");
  const [carName, setCarName] = useState("");
  const navigate = useNavigate(); // Criando a função de navegação

  const dummyCarData = [
    {
      id: 1,
      brand: "Toyota",
      model: "Camry",
      year: 2018,
      price: 15000,
      mileage: 50000,
      location: "New York",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2...",
    },
    {
      id: 2,
      brand: "Honda",
      model: "Civic",
      year: 2019,
      price: 17000,
      mileage: 40000,
      location: "Los Angeles",
      image: "https://images.unsplash.com/photo-1606611013016-96e242ec4b93...",
    },
    {
      id: 3,
      brand: "Ford",
      model: "Mustang",
      year: 2017,
      price: 25000,
      mileage: 35000,
      location: "Chicago",
      image: "https://images.unsplash.com/photo-1582827290640-89a2e6ae8050...",
    },
  ];

  const filteredCars = dummyCarData.filter(
    (car) =>
      car.price >= priceRange[0] &&
      car.price <= priceRange[1] &&
      car.mileage <= mileage &&
      car.year >= year &&
      (location === "" ||
        car.location.toLowerCase().includes(location.toLowerCase())) &&
      (carName === "" ||
        `${car.brand} ${car.model}`
          .toLowerCase()
          .includes(carName.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Used Car Listings</h1>

      <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Filter Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price Range
            </label>
            <input
              type="range"
              min="0"
              max="100000"
              step="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-full"
            />
            <div className="text-sm text-gray-600 mt-1">
              ${priceRange[0]} - ${priceRange[1]}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Mileage
            </label>
            <input
              type="range"
              min="0"
              max="200000"
              step="10000"
              value={mileage}
              onChange={(e) => setMileage(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-sm text-gray-600 mt-1">
              {mileage.toLocaleString()} miles
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Min Year
            </label>
            <input
              type="range"
              min="2000"
              max="2023"
              step="1"
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-sm text-gray-600 mt-1">{year}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter city or state"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Car Name
            </label>
            <input
              type="text"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
              placeholder="Enter car name"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map((car) => (
          <motion.div
            key={car.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {car.brand} {car.model}
              </h2>
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-gray-500 mr-2" />
                <span>{car.year}</span>
              </div>
              <div className="flex items-center mb-2">
                <FaDollarSign className="text-gray-500 mr-2" />
                <span>${car.price.toLocaleString()}</span>
              </div>
              <div className="flex items-center mb-2">
                <FaRoad className="text-gray-500 mr-2" />
                <span>{car.mileage.toLocaleString()} miles</span>
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-gray-500 mr-2" />
                <span>{car.location}</span>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => navigate(`/vehicle-details/${car.id}`)} // Navegação para VeichleDetails
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 flex items-center"
                >
                  <FaCarSide className="mr-2" /> View Details
                </button>
                <button
                  onClick={() => navigate(`/mechanic-opinion/${car.id}`)} // Navegação para MechanicAI
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300 flex items-center"
                >
                  <FaWrench className="mr-2" /> Mechanic's Opinion
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UsedCarListing;
