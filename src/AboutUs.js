// src/AboutUs.js
import React from 'react';
import './AboutUs.css';
import companyPhoto from './favicon.ico'; // Importe a imagem localmente

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="title">Sobre Nós</h1>
      <div className="content">
        <img
          src={companyPhoto}
          alt="Foto da Empresa"
          className="company-photo"
        />
        <p className="description">
          {/* Coloque aqui a descrição da sua empresa */}
          Bem-vindo à nossa empresa! Somos líderes no mercado de automóveis
          usados, oferecendo uma ampla gama de veículos de alta qualidade para
          atender às necessidades de nossos clientes. Nossa missão é fornecer
          um serviço de excelência, com transparência e confiança, garantindo
          sempre a melhor experiência de compra. Nossa equipe é formada por
          profissionais experientes e apaixonados pelo que fazem, comprometidos
          em ajudar você a encontrar o carro ideal.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
