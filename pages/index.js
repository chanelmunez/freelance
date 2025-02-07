import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import PortfolioGrid from '../components/PortfolioGrid';
import About from '../components/About';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chanel Munezero's Consulting and Portfolio</title>
        <meta name="description" content="Portfolio and consulting services by Chanel Munezero" />
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
        <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossOrigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
      </Head>

      <nav id="mainNav" className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#page-top">Chanel Munezero</a>
          <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu 
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead bg-black text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
            <Image
              className="masthead-avatar mb-5"
              src="/assets/img/portfolio/site-logo.png"
              alt="Chanel Munezero Logo"
              width={300}
              height={300}
            />
          </div>
          <h1 className="masthead-heading text-uppercase mb-0">Chanel Munezero</h1>
        </div>
      </header>

      <section id="portfolio" className="page-section portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          {/* Portfolio Grid Items */}
          <PortfolioGrid />
        </div>
      </section>

      <section id="about" className="page-section bg-black text-white mb-0">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <About />
        </div>
      </section>

      <section id="contact" className="page-section">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-black mb-0">Contact Me</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-5 mb-lg-0">
              <a className="contact-link" href="mailto:contact@chanelmunezero.com">
                contact@chanelmunezero.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
