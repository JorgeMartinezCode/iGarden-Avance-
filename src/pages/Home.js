import React from 'react';
import Card from '../components/Card';
import Fondo5 from '../assets/fondo5.jpg';

// API
const cardElements = [
    {
      id: 1,
      title: 'Jardin Pedregal',
      author: 'Jorge, $500 por 8 Hrs',
     
      cover: 'https://images.unsplash.com/photo-1547389432-95b8f3c47f3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 2,
      title: 'Jardin Del Valle',
      author: 'Juan, $800 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1547389432-8def40fe9a27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 3,
      title: 'Jardin Cuernavaca',
      author: 'Luis, $600 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1563827367882-3a0c0eb79d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 1,
      title: 'Jardin Roma',
      author: 'Monica, $450 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1565132901909-b2241512d177?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 2,
      title: 'Jardin Cancun',
      author: 'Are, $500 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1526824864101-1fd9adfdca99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 3,
      title: 'Jardin Los Cabos',
      author: 'Mafer, $350 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1541633650519-cb5ae9c482db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 1,
      title: 'Jardin Lindavista',
      author: 'Juan, $600 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1505210654861-bfdbd35613f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 2,
      title: 'Jardin Tijuana',
      author: 'Pedro, $400 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1541694383-4d7c232ce406?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 3,
      title: 'Jardin Cuernavaca',
      author: 'Jose, $500 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1443472933321-f2617633c81b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 1,
      title: 'Jardin Ensenada',
      author: 'Juan Pedro, $1000 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1567096129236-4224d3b0523c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 2,
      title: 'Jardin Veracruz',
      author: 'Maria, $300 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1541387749012-e850c3f7634a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 3,
      title: 'Jardin VillaHermosa',
      author: 'Sabrina, $500 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1505244598423-9418965c77a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 1,
      title: 'Jardin Del Valle',
      author: 'Karla, $1500 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1566214464189-7415c3e88332?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 2,
      title: 'Jardin Santa Fe',
      author: 'Paulina, $600 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1498578989336-56425ea7d68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 3,
      title: 'Jardin Pedregal',
      author: 'Paco, $200 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1437844480143-6044ead092cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 1,
      title: 'Jardin Queretaro',
      author: 'Maria y Juan Carlos, $500 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1564227230893-66a0cf5285d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 2,
      title: 'Jardin Tequisquiapan',
      author: 'Fernando, $200 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1552546076-3431a9df348b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 3,
      title: 'Jardin Ciudad de Mexico',
      author: 'Sofia, $900 por 8 Hrs',
      cover: 'https://images.unsplash.com/photo-1563377504057-1266d207a9bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    }
];
  

const Home = () => (
    <>
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">iGarden</h1>
            <h2 className="hero-subtitle">Renta un Jardin para tus Eventos, de forma Segura y a tu alcance.</h2>
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
