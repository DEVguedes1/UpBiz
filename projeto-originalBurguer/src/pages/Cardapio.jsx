    import React from 'react';
    import '../styles/cardapio.css';
    import { menuData } from '../data';

    export default function Cardapio() {
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

        <main>
            {menuData.map((secao, idx) => (
            <section key={idx} className="menu-section">
                <h2 className="section-title">{secao.categoria}</h2>

                <div className="items-grid">
                {secao.itens.map((item) => (
                    <div key={item.id} className="menu-item">
                    <h3>{item.nome}</h3>
                    <p className="description">{item.descricao}</p>

                    <div className="prices">
                        {item.precos.map((p, pi) => (
                        <span key={pi}>
                            {p.tamanho ? `${p.tamanho} = ` : ""}
                            {p.valor}
                        </span>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </section>
            ))}
        </main>
        </div>
    );
    }
