import { Link } from "react-router-dom";
import "../styles/landing.css";
import { gerarLinkWhatsApp } from "../utils/whatsapp";

export default function LandingPage() {

  // ✅ LÓGICA FICA AQUI (FORA DO JSX)
  const mensagem = `
Olá! 👋
Vi o site do cardápio digital e gostaria de saber como funciona para minha hamburgueria.
`;

  return (
    <div className="landing-container">

      {/* NAVBAR */}
      <header className="landing-navbar">
        <div className="landing-logo">Hamburguer Pro</div>
        <nav className="landing-nav">
          <Link to="/">Home</Link>
          <a href="#benefits">Benefícios</a>
          <a href="#how">Como Funciona</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="landing-hero">
        <div className="hero-content">
          <h1>Transforme seu WhatsApp em pedidos que convertem!</h1>
          <p>
            Cardápio digital profissional e sistema de pedidos online
            para sua hamburgueria vender mais sem depender de apps caros.
          </p>

          <Link to="/cardapio" className="btn-primary">
            Ver cardápio de exemplo
          </Link>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="benefits" className="landing-benefits">
        <h2>Por que isso funciona?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>✔ Mais Vendas</h3>
            <p>Cliente vê tudo organizado e compra com facilidade.</p>
          </div>

          <div className="benefit-card">
            <h3>✔ Menos Erros</h3>
            <p>Pedidos chegam completos e corretos no WhatsApp.</p>
          </div>

          <div className="benefit-card">
            <h3>✔ Sem Taxas</h3>
            <p>Você não paga nada para apps de terceiros.</p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="how" className="landing-how">
        <h2>Como funciona</h2>
        <ol className="how-list">
          <li>Acesse o cardápio no celular ou QR Code</li>
          <li>Cliente escolhe o pedido sozinho</li>
          <li>Pedido chega pronto no WhatsApp</li>
          <li>Você confirma e atende rápido</li>
        </ol>
      </section>

      {/* CTA FINAL */}
      <section id="contact" className="landing-final">
        <a
          href={gerarLinkWhatsApp("5581989745583", mensagem)}
          className="btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="landing-footer">
        <span>© 2025 Hamburguer Pro</span>
        <span>Desenvolvido por Você</span>
      </footer>

    </div>
  );
}
