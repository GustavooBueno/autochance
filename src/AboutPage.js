// src/AboutUs.js
import React from 'react';
import './AboutPage.css';
import companyPhoto from './1.png'; // Importe a imagem localmente

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
          Bem-vindo ao nosso facilitador de compras de carros usados! Todos sabemos dos desafios
          e da dificuldade de encontrar o tão sonhado carro. Além de ser difícil encontrar, sem o conhecimento necessário é fácil entrar em furadas! Por isso criamos a AutoChance
          um site para te ajudar a comprar seu futuro carro usado.
          Para devs interessados, o projeto é open-source e está no repositório github.com/GustavooBueno/autochance. Venha contribuir!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
