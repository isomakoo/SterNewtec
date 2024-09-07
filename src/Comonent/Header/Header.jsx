import React, { useEffect, useState } from 'react';
import './Header.css';
import '../../i18next.js'
import { motion } from 'framer-motion'; // Framer Motion import qilinadi
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import { useTranslation } from 'react-i18next'; // i18next import

const StatItem = ({ value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // 2 sekund ichida ko'tariladi
    const increment = end / (duration / 16); // Har 16ms da necha qiymatga ko'tarilishini hisoblaymiz

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        start = end;
      }
      setCount(Math.ceil(start));
    }, 16); // 16ms intervalda yangilanadi

    return () => clearInterval(counter);
  }, [value]);

  return (
    <motion.div 
      className="stat-item"
      initial={{ opacity: 0, y: 50 }} // Boshlanish animatsiyasi
      animate={{ opacity: 1, y: 0 }} // Ko'tarilish animatsiyasi
      transition={{ duration: 0.8 }} // Har bir animatsiya 0.8 soniyada bajariladi
      data-aos="fade-up" // AOS animation type
    >
      <h2>{count}</h2>
      <p>{label}</p>
    </motion.div>
  );
};

const Header = () => {
  const { t } = useTranslation(); // Use translation hook

  useEffect(() => {
    AOS.init({
      duration: 1000, // AOS animatsiya davomiyligi
      easing: 'ease-in-out',
      once: true, // Animatsiya faqat bir marta bajariladi
    });
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content" data-aos="fade-right">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='homepage-title'
        >
          {t('heroTitle')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {t('heroDescription')}
        </motion.p>
      </div>

      <motion.div
        className="stats"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
        }}
      >
        <StatItem value={25} label={t('yearsOfExperience')} />
        <StatItem value={250} label={t('projectComplete')} />
        <StatItem value={100} label={t('happyClient')} />
        <StatItem value={35} label={t('winingAwards')} />
      </motion.div>
    </section>
  );
};

export default Header;
