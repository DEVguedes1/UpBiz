import React, { useState, useRef } from 'react';
import '../styles/cardapio.css';
import { menuData } from '../data';

export default function Cardapio() {
  const categorias = [
    "Original Especial", 
    "Original Smash's", 
    "Original Clássicos", 
    "Hambúrgueres Leves", 
    "Original Petiscos", 
    "Original Shake's", 
    "Bebidas"
  ];

  const [categoriaAtiva, setCategoriaAtiva] = useState(categorias[0]);
  
  // --- Lógica da Garrinha (Drag to Scroll) ---
  const navRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - navRef.current.offsetLeft);
    setScrollLeft(navRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - navRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicador de velocidade
    navRef.current.scrollLeft = scrollLeft - walk;
  };
  // ------------------------------------------

  const secaoFiltrada = menuData.find(
    (secao) => secao.categoria.trim().toLowerCase() === categoriaAtiva.trim().toLowerCase()
  );

  return (
    <div className="menu-page">
      <header className="menu-header">
        <div className="header-top">
          <span>Best in town</span>
          <span>EST. 2020</span>
        </div>
        <h1 className="brand-title">ORIGINAL BURGUER</h1>
        <div className="header-info">
          <span>@originalburguergourmet</span>
          <span>Ferreiros - PE</span>
          <span>(81) 9.9313-6131</span>
        </div>
      </header>

      {/* NAV COM EVENTOS DE MOUSE PARA A GARRINHA */}
      <nav 
        className={`category-nav ${isDown ? 'active-drag' : ''}`}
        ref={navRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`nav-btn ${categoriaAtiva === cat ? 'active' : ''}`}
            onClick={() => setCategoriaAtiva(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      <main className="content-area">
        {secaoFiltrada ? (
          <section className="menu-section">
            <h2 className="section-title">{secaoFiltrada.categoria}</h2>
            <div className="items-grid">
              {secaoFiltrada.itens.map((item) => (
                <div key={item.id} className="menu-item">
                  <h3>{item.nome}</h3>
                  <p className="description">{item.descricao}</p>
                  <div className="prices">
                    {item.precos.map((p, pi) => (
                      <span key={pi}>
                        {p.tamanho ? `${p.tamanho} = ` : ""}
                        {p.valor}
                        {pi < item.precos.length - 1 ? ' | ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <div className="no-data">
            <p>Selecione uma categoria acima.</p>
          </div>
        )}
      </main>
    </div>
  );
}