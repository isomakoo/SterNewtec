import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import "../../i18next.js";
import { IoMdCloseCircleOutline } from "react-icons/io";
import uz from "../../assets/uz.jpg";
import { IoMdMenu } from "react-icons/io";
import ru from "../../assets/ru.png";
import en from "../../assets/en.jpg";
import logo1 from "../../assets/Frame 2.png";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import yellov from "../../assets/yellov.png";
import e from "../../assets/e.png";
import Typed from "typed.js";
import { Modal, Button, Input, Select } from "antd";
import axios from "axios";
import { useTranslation } from "react-i18next";

const { Option } = Select;

function Hero() {
  const { t, i18n } = useTranslation();
  const typedElement = useRef(null);
  const [isWebsiteModalVisible, setIsWebsiteModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [websitePurpose, setWebsitePurpose] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  // Typed.js animation
  useEffect(() => {
    const options = {
      strings: [t("services"), t("solutions")],
      typeSpeed: 20,
      backSpeed: 20,
      backDelay: 3000,
      loop: true,
    };
    const typed = new Typed(typedElement.current, options);
    return () => {
      typed.destroy();
    };
  }, [t]);

  // Website Modalni ko'rsatish va yopish
  const showWebsiteModal = () => {
    setIsWebsiteModalVisible(true);
  };

  const handleWebsiteCancel = () => {
    setIsWebsiteModalVisible(false);
  };

  // Modalni ochish va yopish
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Sahifa skrollini to'xtatish
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Sahifa skrollini tiklash
  };

  // Telegram bot orqali ma'lumot yuborish
  const handleSubmitWebsite = async () => {
    const token = "YOUR_TELEGRAM_BOT_TOKEN";
    const chatId = "YOUR_TELEGRAM_CHAT_ID";

    const message = `Yangi sayt so'rovi:\nIsm: ${name}\nTelefon: ${phoneNumber}\nSayt maqsadi: ${websitePurpose}`;

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      alert(t("submitSuccess"));
      setIsWebsiteModalVisible(false);
      setName("");
      setPhoneNumber("");
      setWebsitePurpose("");
    } catch (error) {
      console.error("Telegram botga ma'lumot yuborishda xatolik:", error);
      alert(t("error"));
    }
  };

  // Tilni o'zgartirish funksiyasi
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang); // Tanlangan tilni localStorage ga saqlash
  };

  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="container">
        <div className="hero-list">
          <img src={logo1} alt="Logo" className="hero-logo" />
          <ul className="hero-navbar">
            <li className="foother-navbar-item">
              <a href="#" className="hero-link">
                {t("about")}
              </a>
            </li>
            <li className="foother-navbar-item">
              <a href="#" className="hero-link">
                {t("services")}
              </a>
            </li>
            <li className="foother-navbar-item">
              <a href="#" className="hero-link">
                {t("pricing")}
              </a>
            </li>
            <li className="foother-navbar-item">
              <a href="#" className="hero-link">
                {t("blog")}
              </a>
            </li>
          </ul>
          <Select
            defaultValue="ru"
            className="lngess"
            style={{ width: 150 }}
            onChange={handleLanguageChange}
          >
            <Option value="ru">
              <img src={ru} alt="Russian" style={{ width: 20, marginRight: 10 }} />
              Russian
            </Option>
            <Option value="uz">
              <img src={uz} alt="Uzbek" style={{ width: 20, marginRight: 10 }} />
              Uzbek
            </Option>
            <Option value="en">
              <img src={en} alt="English" style={{ width: 20, marginRight: 10 }} />
              English
            </Option>
          </Select>
          <button className="menu" onClick={openModal}><IoMdMenu /></button>
        </div>

        <div className="hero-box">
          <nav className="hero-bex">
            <nav className="hero-boxses">
              <h1 id="my-element">
                STAR<span style={{ color: "#1b2332" }}>NEWTEC-</span>{" "}
                <span
                  ref={typedElement}
                  style={{ color: "#1b2332", width: 450, height: 500 }}
                ></span>
              </h1>
            </nav>
            <nav className="btneses">
              <motion.button
                className="hero-btnes"
                onClick={showWebsiteModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {t("contactUs")}
              </motion.button>
              <a
                href="https://www.linkedin.com/in/isomiddin-qurbonov-662537304/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-lnk-btn"
              >
                <CiLinkedin />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-fac-btn"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.threads.net/@kurbonov__me?xmt=AQGzeFaWWXO6cWqq1nS4RvdytVHMJ0BZxH5uvxUKzLt2qZw"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-imst-btn"
              >
                <FaInstagram />
              </a>
            </nav>
          </nav>
          <motion.nav
            className="hero-images"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={yellov} alt="Rasm" className="hero-img" />
            <img src={e} alt="Rasm" className="hero-icons" />
          </motion.nav>
        </div>
      </div>

      {/* Sayt yaratish uchun modal */}
      <Modal
        title={t("contactPurpose")}
        visible={isWebsiteModalVisible}
        onCancel={handleWebsiteCancel}
        footer={[
          <Button key="cancel" onClick={handleWebsiteCancel}>
            {t("cancel")}
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmitWebsite}>
            {t("submit")}
          </Button>,
        ]}
      >
        <div>
          <label>{t("name")}</label>
          <Input
            placeholder={t("namePlaceholder")}
            style={{ marginBottom: "1rem" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>{t("phone")}</label>
          <Input
            placeholder={t("phonePlaceholder")}
            style={{ marginBottom: "1rem" }}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <label>{t("purpose")}</label>
          <Select
            placeholder={t("selectPurpose")}
            style={{ width: "100%", marginBottom: "1rem" }}
            value={websitePurpose}
            onChange={(value) => setWebsitePurpose(value)}
          >
            <Option value="onlineStore">{t("onlineStore")}</Option>
            <Option value="corporate">{t("corporate")}</Option>
            <Option value="other">{t("other")}</Option>
          </Select>
        </div>
      </Modal>

      {/* Custom Modal */}
      {isOpen && (
  <div className="modal-overlay">
    <motion.div
      className="custom-modal"
      initial={{ x: '100%', scale: 0.7, opacity: 0 }}  // Boshlang'ich holat: o'ngdan va kichraygan holda
      animate={{ x: 0, scale: 1, opacity: 1 }}         // Yakuniy holat: normal joyiga keladi va kattalashadi
      transition={{ duration: 0.5, type: "spring", bounce: 0.3 }} // Bahor effekti va 0.5 soniyada chiqadi
    >
      <button className="close-modal" onClick={closeModal}>
        <IoMdCloseCircleOutline size={30} />
      </button>
      <div className="modal-content">
      <h2 className="hero-texs"><span className="hero-tex">STAR</span>NEWTEC</h2> 
            <nav className="linkess">
            <a href="#" className="hero-linkes">
                {t("about")}
              </a> <br />
              <a href="#" className="hero-linkes">
                {t("services")}
              </a> <br />
              <a href="#" className="hero-linkes">
                {t("pricing")}
              </a> <br />
              <a href="#" className="hero-linkes">
                {t("blog")}
              </a> <br />
            </nav>
              <Select
            defaultValue="ru"
            className="lnges"
            style={{ width: 150 }}
            onChange={(value) => handleLanguageChange(value)}
          >
            <Option value="ru">
              <img
                src={ru}
                alt="Russian"
                style={{ width: 20, marginRight: 10 }}
              />
              Russian
            </Option>
            <Option value="uz">
              <img
                src={uz}
                alt="Uzbek"
                style={{ width: 20, marginRight: 10 }}
              />
              Uzbek
            </Option>
            <Option value="en">
              <img
                src={en}
                alt="English"
                style={{ width: 20, marginRight: 10 }}
              />
              English
            </Option>
          </Select> <br />
      </div>
    </motion.div>
  </div>
)}
    </motion.div>
  );
}

export default Hero;
