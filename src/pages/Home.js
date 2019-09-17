import React from 'react';
import Card from '../components/Card';
import Fondo5 from '../assets/fondo5.jpg';

// API
const cardElements = [
    {
      id: 1,
      title: 'Jardin Pedregal',
      author: 'Jorge',
      cover: 'fondo04.jpg'
    },
    {
      id: 2,
      title: 'Jardin Del Valle',
      author: 'Juan',
      cover: 'fondo05.jpg'
    },
    {
      id: 3,
      title: 'Jardin Cuernavaca',
      author: 'Luis',
      cover: 'fondo06.jpg'
    },
    {
      id: 1,
      title: 'Jardin Roma',
      author: 'Monica',
      cover: 'fondo07.jpg'
    },
    {
      id: 2,
      title: 'Jardin Cancun',
      author: 'Are',
      cover: 'fondo08.jpg'
    },
    {
      id: 3,
      title: 'Jardin Los Cabos',
      author: 'Mafer',
      cover: 'fondo09.jpg'
    },
    {
      id: 1,
      title: 'Jardin Lindavista',
      author: 'Juan',
      cover: 'fondo10.jpg'
    },
    {
      id: 2,
      title: 'Jardin Tijuana',
      author: 'Pedro',
      cover: 'fondo12.jpg'
    },
    {
      id: 3,
      title: 'Jardin Cuernavaca',
      author: 'Jose',
      cover: 'fondo13.jpg'
    },
    {
      id: 1,
      title: 'Jardin Ensenada',
      author: 'Juan Pedro',
      cover: 'fondo14.jpg'
    },
    {
      id: 2,
      title: 'Jardin Veracruz',
      author: 'Maria',
      cover: 'fondo15.jpg'
    },
    {
      id: 3,
      title: 'Jardin VillaHermosa',
      author: 'Sabrina',
      cover: 'fondo16.jpg'
    },
    {
      id: 1,
      title: 'Jardin Del Valle',
      author: 'Karla',
      cover: 'fondo17.jpg'
    },
    {
      id: 2,
      title: 'Jardin Santa Fe',
      author: 'Paulina',
      cover: 'fondo18.jpg'
    },
    {
      id: 3,
      title: 'Jardin Pedregal',
      author: 'Paco',
      cover: 'fondo19.jpg'
    },
    {
      id: 1,
      title: 'Jardin Queretaro',
      author: 'Maria y Juan Carlos',
      cover: 'fondo20.jpg'
    },
    {
      id: 2,
      title: 'Jardin Tequisquiapan',
      author: 'Fernando',
      cover: 'fondo21.jpg'
    },
    {
      id: 3,
      title: 'Jardin Ciudad de Mexico',
      author: 'Sofia',
      cover: 'fondo22.jpg'
    }
];
  

const Home = () => (
    <>
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">iGarden</h1>
            <h2 className="hero-subtitle">Renta tu Jardin para tus Eventos de forma Segura y a tu alcance.</h2>
          </div>
        </section>
        <section className="content">
          <div className="container grid-container">
            {cardElements.map((card, index) =>
              <Card key={index} card={card} />)}
          </div>
          <div className="container">
            <button className="btn-showmore">¿Cuando Reservas?</button>
          </div>
        </section>
    </>
);

export default Home;
