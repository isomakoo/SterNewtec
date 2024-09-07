import React from 'react';
import './i18next.js'
import { Helmet } from 'react-helmet';
import './App.css';
import Foother from './Comonent/Foother/Foother';
import Header from './Comonent/Header/Header';
import Hero from './Comonent/Hero/Hero';
import HomePage from './Comonent/HomePage/HomePage';
import Main from './Comonent/Main/Main';
import Testimonials from './Comonent/Sidebar/Sidebar';
import ContactForm from './Comonent/contactform/ContactForm';
import FAQ from './Comonent/faq/Faq';

function App() {
  return (
    <>
      <Helmet>
        <title>NewTec</title>
        <meta name="description" content="Description of my website" />
        {/* Boshqa meta taglar ham qo'shishingiz mumkin */}
      </Helmet>
      <Hero />
      <Header />
      <HomePage />
      <Main />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Foother />
    </>
  );
}

export default App;
