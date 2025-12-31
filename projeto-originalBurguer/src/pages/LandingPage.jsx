import { Link } from "react-router-dom";
import "../styles/landing.css";
import { gerarLinkWhatsApp } from "../utils/whatsapp";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export default function LandingPage() {

  useFadeInOnScroll();
  console.log("hook rodou");
  const mensagem = `
Olá! 👋
Vi seu site e gostaria de entender como suas soluções digitais podem ajudar o meu negócio.
`;

  return (
    <div className="landing-container">

      {/* NAVBAR */}
      <header className="landing-navbar">
        <div className="landing-logo">UpBiz</div>
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
          <h1>
            Soluções digitais simples<br />
            para negócios que querem crescer
          </h1>

          <p>
            Sites, sistemas e automações sob medida para organizar processos,
            melhorar o atendimento e gerar mais resultados — sem complicação.
          </p>

          <Link to="/cardapio" className="btn-primary">
            Ver um projeto de exemplo
          </Link>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="benefits" className="landing-benefits">
        <h2>Por que isso funciona?</h2>

        <div className="benefits-grid">
          <div className="benefit-card fade-in">
            <h3>Resultados Reais</h3>
            <p>
              Soluções pensadas para resolver problemas reais do dia a dia,
              não apenas “ter um site”.
            </p>
          </div>

          <div className="benefit-card fade-in">
            <h3>Processos Organizados</h3>
            <p>
              Menos bagunça no atendimento, mais clareza para você e para o cliente.
            </p>
          </div>

          <div className="benefit-card fade-in">
            <h3>Sem Taxas ou Dependências</h3>
            <p>
              Você é dono da solução. Nada de mensalidades abusivas ou plataformas presas.
            </p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="how" className="landing-how">
        <h2>Como funciona</h2>

        <ol className="how-list">
          <li>Entendo o seu negócio e suas necessidades</li>
          <li>Desenvolvo uma solução simples e objetiva</li>
          <li>Você testa e valida</li>
          <li>Colocamos no ar e começamos a gerar resultado</li>
        </ol>
      </section>

      {/* CTA FINAL */}
      <section id="contact" className="landing-final">
        <h2>Vamos conversar sobre o seu projeto?</h2>

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
        <span>© 2025 Disk Tech</span>
        <span> Soluções digitais sob medida</span>
      </footer>

    </div>
  );
}
