import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css'; 
import { Music, Guitar, Drum, Mic, ShoppingCart, Users, Award, Zap } from 'lucide-react';

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const featuredInstruments = [
    { name: "Gibson Les Paul Studio", type: "Guitarra Eléctrica", image: "🎸", price: "$1,299", category: "Cuerdas" },
    { name: "Pearl Export Series", type: "Batería Completa", image: "🥁", price: "$899", category: "Percusión" },
    { name: "Shure SM58", type: "Micrófono Dinámico", image: "🎤", price: "$99", category: "Audio" }
  ];

  const stats = [
    { icon: Guitar, number: "2K+", label: "Instrumentos" },
    { icon: Users, number: "15K+", label: "Músicos" },
    { icon: Award, number: "50+", label: "Marcas" },
    { icon: Zap, number: "24/7", label: "Soporte" }
  ];

  const categories = [
    { name: "Guitarras", icon: "🎸", count: "500+" },
    { name: "Baterías", icon: "🥁", count: "200+" },
    { name: "Bajos", icon: "🎸", count: "150+" },
    { name: "Micrófonos", icon: "🎤", count: "100+" },
    { name: "Amplificadores", icon: "🔊", count: "300+" },
    { name: "Efectos", icon: "🎛️", count: "400+" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredInstruments.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (

    <div className="w-full min-h-screen px-4 py-8">

    <div className="relative w-full min-h-screen px-4">
      <div className="bg-animated"></div>
      <div className="bg-radial"></div>

      <div className="content">
        <div className={`hero ${isVisible ? 'show' : 'hide'}`}>
          <h2 className="title">
            INSTRUMENTOS
            <span className="pulse-red">LEGENDARIOS</span>
          </h2>
          <p className="subtitle">
            Equipa tu pasión musical con los mejores instrumentos.
            <span className="highlight"> Calidad profesional</span> para músicos de todos los niveles
          </p>
          <div className="buttons">
            <button className="btn-primary">
              <Guitar className="icon" />
              <span>VER CATÁLOGO</span>
            </button>
            <button className="btn-secondary">OFERTAS ESPECIALES</button>
          </div>
        </div>

        <div className="featured">
          <h3>INSTRUMENTOS DESTACADOS</h3>
          <div className="cards">
            {featuredInstruments.map((item, index) => (
              <div
                key={index}
                className={`card ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="emoji">{item.image}</div>
                <h4>{item.name}</h4>
                <p className="type">{item.type}</p>
                <p className="category">{item.category}</p>
                <p className="price">{item.price}</p>
                <button className="add-cart">AÑADIR AL CARRITO</button>
              </div>
            ))}
          </div>
        </div>

        <div className="categories">
          <h3>CATEGORÍAS</h3>
          <div className="category-grid">
            {categories.map((cat, i) => (
              <div key={i} className="category-card">
                <div className="emoji">{cat.icon}</div>
                <h4>{cat.name}</h4>
                <p>{cat.count}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stats">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="stat-card">
                <Icon className="stat-icon" />
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="newsletter">
          <h3>¡MANTENTE AL DÍA!</h3>
          <p>Recibe las últimas novedades, ofertas exclusivas y lanzamientos de instrumentos</p>
          <div className="newsletter-form">
            <input type="email" placeholder="tu@email.com" />
            <button>SUSCRIBIRSE</button>
          </div>
        </div>
      </div>

      <div className="floating-icons">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-icon"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {['🎸', '🥁', '🎤', '🎹', '🎺'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default HomePage;
