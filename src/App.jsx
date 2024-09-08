import React from 'react';
import { Helmet } from 'react-helmet';
import './i18next.js'; // i18next konfiguratsiyasi
import './App.css'; // Umumiy CSS

// Komponentlarni import qilish
import Header from './Comonent/Header/Header';
import Hero from './Comonent/Hero/Hero';
import HomePage from './Comonent/HomePage/HomePage';
import Main from './Comonent/Main/Main';
import Testimonials from './Comonent/Sidebar/Sidebar';
import ContactForm from './Comonent/contactform/ContactForm';
import FAQ from './Comonent/faq/Faq';
import Foother from './Comonent/Foother/Foother';

function App() {
  return (
    <>
      <Helmet>
        <title>NewTec</title>
        <meta name="description" content="NewTec - Web va dasturiy ta'minot ishlab chiqaruvchilari uchun xizmatlar." />
        {/* Qo'shimcha meta taglar */}
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
