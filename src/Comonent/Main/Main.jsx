import React from 'react';
import './Main.css';
import '../../i18next.js'
import bby from '../../assets/icon7.png';
import color from '../../assets/icon9.png';
import seo from '../../assets/icon12.png';
import header from '../../assets/icon6.png';
import development from '../../assets/icon2.png';
import area from '../../assets/icon5.png';
import post from '../../assets/icon1.png';
import blogs from '../../assets/icon3.png';
import { motion } from 'framer-motion'; 
import { useTranslation } from 'react-i18next'; // Tarjima hook

function Main() {
  const { t } = useTranslation(); // Tarjima hookni chaqirish

  // Animatsiya uchun variantlar
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const features = [
    { img: post, title: t('features.postLayouts'), text: t('features.postText') },
    { img: development, title: t('features.developmentReady'), text: t('features.developmentText') },
    { img: blogs, title: t('features.blogLayouts'), text: t('features.blogText') },
    { img: area, title: t('features.featuredArea'), text: t('features.featuredText') },
    { img: header, title: t('features.headerLayouts'), text: t('features.headerText') },
    { img: bby, title: t('features.legendarySupport'), text: t('features.supportText') },
    { img: color, title: t('features.colorTypography'), text: t('features.colorText') },
    { img: seo, title: t('features.seoFriendly'), text: t('features.seoText') },
  ];

  return (
    <div>
      <div className="main">
        <div className="container">
          <motion.h1
            className="main-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {t('mainTitle')}
          </motion.h1>

          <motion.ul
            className="main-navbar"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
            }}
          >
            {features.map((item, index) => (
              <motion.li
                className="main-item"
                key={index}
                variants={itemVariants}
              >
                <img src={item.img} alt="Rasm" className="main-icon" />
                <h2 className="main-item-title">{item.title}</h2>
                <p className="main-item-text">{item.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
