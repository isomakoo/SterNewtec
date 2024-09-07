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
  const [phoneNumber, setPhoneNumber] = useState("");<IoMdCloseCircleOutline />
  const [websitePurpose, setWebsitePurpose] = useState("");

  // Qo'shimcha holat: CustomModal ko'rinishini boshqarish

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

  const showWebsiteModal = () => {
    setIsWebsiteModalVisible(true);
  };

  const handleWebsiteCancel = () => {
    setIsWebsiteModalVisible(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  // Modalni ochish va overflow yashirish funksiyasi
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Sahifa scrollni to'xtatish
  };

  // Modalni yopish va overflow-ni tiklash funksiyasi
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Sahifa scrollni qayta tiklash
  };

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

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang); // Tanlangan tilni localStorage ga saqlash
  };

  // CustomModal ochish va yopish funksiyalari
  const handleMenuClick = () => {
    setIsCustomModalOpen(true);
  };

  const handleCloseCustomModal = () => {
    setIsCustomModalOpen(false);
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
          {/* Custom Language Select with Flags */}
          <Select
            defaultValue="ru"
            className="lngess"
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
          </Select>
          {/* Buttonda onClick funksiyasi noto'g'ri chaqirilgan edi */}
           <button className="menu" onClick={openModal}><IoMdMenu /></button>
          {/* Menu bosilganda modal ochiladi */}
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
      <div>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button onClick={closeModal}><IoMdCloseCircleOutline style={{width: 20, height: 20}}/></button>
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
        </div>
      )}
    </div>
    </motion.div>
  );
}

export default Hero;
