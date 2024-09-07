import React, { useState } from 'react';
import './Sidebar.css';
import uzb from '../../assets/itichnik.jpg';
import rus from '../../assets/brov.png';
import '../../i18next.js'
import { Modal, Button, Input, Select } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

// Telegram Bot Token va Chat ID ni xavfsiz saqlash uchun .env faylidan foydalaning
const TELEGRAM_BOT_TOKEN = '7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU';
const CHAT_ID = '6914657739';

const sendMessageToTelegram = async (message) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: 'HTML',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!data.ok) {
      throw new Error(data.description);
    }
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
  }
};

function Testimonials() {
  const { t } = useTranslation();
  const [isWebsiteModalVisible, setIsWebsiteModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [websitePurpose, setWebsitePurpose] = useState('');

  const showWebsiteModal = () => {
    setIsWebsiteModalVisible(true);
  };

  const handleWebsiteCancel = () => {
    setIsWebsiteModalVisible(false);
  };

  const handleWebsiteSubmit = async () => {
    const message = `
      <b>${t('contact_modal_title')}</b>\n\n
      <b>${t('name_label')}</b> ${name}\n
      <b>${t('phone_label')}</b> ${phoneNumber}\n
      <b>${t('purpose_label')}</b> ${websitePurpose}
    `;
    
    await sendMessageToTelegram(message);

    // Input maydonlarini tozalash
    setName('');
    setPhoneNumber('');
    setWebsitePurpose('');

    setIsWebsiteModalVisible(false);

    alert(t('contact_success'));
  };

  // Animatsiya variantlari
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: '#1b2332',
      color: '#fff',
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.section 
      className="testimonials"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.h3 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t('testimonials_title')}
        </motion.h3>
        <motion.div 
          className="testimonial-wrapper"
          variants={containerVariants}
        >
          {[
            {
              img: uzb, 
              alt: "O'zbekistan Mijoz", 
              text: t('testimonial_1_text'), 
              name: "O'zbekistan Mijoz"
            },
            {
              img: rus, 
              alt: "Rossiya Mijoz", 
              text: t('testimonial_2_text'), 
              name: "Rossiya Mijoz"
            },
          ].map((testimonial, index) => (
            <motion.div 
              className="testimonial-item" 
              key={index}
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.img 
                src={testimonial.img} 
                alt={testimonial.alt} 
                className="testimonial-image"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
              <div className="testimonial-content">
                <p>{testimonial.text}</p>
                <span>- {testimonial.name}</span> <br />
                <b className="sidebar-text">{t('contact_modal_title')}</b> <br />
                <motion.button 
                  className="hero-btnes" 
                  onClick={showWebsiteModal}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {t('contact_modal_title')}
                </motion.button> 
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Sayt yaratish uchun modal */}
      <Modal
        title={t('contact_modal_title')}
        visible={isWebsiteModalVisible}
        onCancel={handleWebsiteCancel}
        footer={[
          <Button key="cancel" onClick={handleWebsiteCancel}>
            {t('cancel_button')}
          </Button>,
          <Button key="submit" type="primary" onClick={handleWebsiteSubmit}>
            {t('submit_button')}
          </Button>,
        ]}
      >
        <div>
          <label>{t('name_label')}</label>
          <Input
            placeholder={t('name_label')}
            style={{ marginBottom: '1rem' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>{t('phone_label')}</label>
          <Input
            placeholder={t('phone_label')}
            style={{ marginBottom: '1rem' }}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <label>{t('purpose_label')}</label>
          <Select
            placeholder={t('purpose_label')}
            style={{ width: '100%', marginBottom: '1rem' }}
            value={websitePurpose}
            onChange={(value) => setWebsitePurpose(value)}
          >
            <Option value="ish">{t('purpose_option_work')}</Option>
            <Option value="biznes">{t('purpose_option_business')}</Option>
            <Option value="shaxsiy_blog">{t('purpose_option_blog')}</Option>
            <Option value="ta'lim">{t('purpose_option_education')}</Option>
            <Option value="do'kon">{t('purpose_option_store')}</Option>
          </Select>
        </div>
      </Modal>
    </motion.section>
  );
}

export default Testimonials;
