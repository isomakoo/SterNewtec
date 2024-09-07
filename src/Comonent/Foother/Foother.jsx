import React, { useEffect } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { useTranslation } from 'react-i18next'; // Tarjimani chaqirish
import './Foother.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

const Foother = () => {
  const { t } = useTranslation(); // i18next ni chaqirish

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div>
      <div className="foother-navbar">
        <div>
          <ul className="foother-list">
            <li className="foother-item">
              <p className="foother-title">
                <span style={{color: '#e57f34'}}>{t('companyName')}</span>
              </p>
              <p className="foother-item-title">
                {t('companyDescription')}
              </p>
              <div className="social-buttons" >
                <a href="https://www.linkedin.com/in/isomiddin-qurbonov-662537304/" target="_blank" rel="noopener noreferrer" className="hero-lnk-btn">
                  <CiLinkedin />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hero-fac-btn">
                  <FaFacebook />
                </a>
                <a href="https://www.threads.net/@kurbonov__me?xmt=AQGzeFaWWXO6cWqq1nS4RvdytVHMJ0BZxH5uvxUKzLt2qZw" target="_blank" rel="noopener noreferrer" className="hero-imst-btn">
                  <FaInstagram />
                </a>
              </div>
            </li>
            <li className="foother-item" >
              <h4 className="foother-item-texts">{t('quickLinks')}</h4>
              <a href="#" className="foother-link">{t('aboutUs')}</a> <br />
              <a href="#" className="foother-link">{t('services')}</a> <br />
              <a href="#" className="foother-link">{t('pricing')}</a> <br />
              <a href="#" className="foother-link">{t('blog')}</a>
            </li>
            <li className="foother-item">
              <h4 className="foother-item-texts">{t('contactUs')}</h4>
              <a href="tel:+998901234567" className="foother-link">
                <BsTelephone style={{width: 30, height: 20}} /> {t('phone')}: +998 90 123 45 67
              </a> <br />
              <a href="mailto:starnewtec@gmail.com" className="foother-link">
                <MdOutlineMail style={{width: 30, height: 20}} /> {t('email')}: starnewtec@gmail.com
              </a> <br />
              <a href="#" className="foother-link">
                <MdOutlineLocationOn style={{width: 30, height: 20}} /> {t('address')}: {t('city')}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <div className="containers">
          <p>&copy; 2024 NewTec. {t('rightsReserved')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Foother;
