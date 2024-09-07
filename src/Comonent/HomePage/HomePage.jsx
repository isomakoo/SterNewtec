import React, { useState } from 'react';
import { FaGlobe, FaServer, FaLaptopCode } from 'react-icons/fa';
import { Modal, Button, Input, Select } from 'antd';
import axios from 'axios';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './HomePage.css';

const { Option } = Select;

const HomePage = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const [isDomainModalVisible, setIsDomainModalVisible] = useState(false);
  const [isHostingModalVisible, setIsHostingModalVisible] = useState(false);
  const [isSiteModalVisible, setIsSiteModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const showDomainModal = () => setIsDomainModalVisible(true);
  const handleDomainCancel = () => setIsDomainModalVisible(false);
  const showHostingModal = () => setIsHostingModalVisible(true);
  const handleHostingCancel = () => setIsHostingModalVisible(false);
  const showSiteModal = () => setIsSiteModalVisible(true);
  const handleSiteCancel = () => setIsSiteModalVisible(false);

  const handleSubmitDomain = async () => {
    const token = '7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU'; 
    const chatId = '6914657739'; 
    const message = `Yangi domen so'rovi:\nIsm: ${name}\nTarif: ${selectedPlan}\nTelefon raqami: ${phoneNumber}`;
    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, { chat_id: chatId, text: message });
      alert('Ma\'lumot yuborildi!');
      setName('');
      setSelectedPlan('');
      setPhoneNumber('');
      setIsDomainModalVisible(false);
    } catch (error) {
      console.error('Telegram botga ma\'lumot yuborishda xatolik:', error);
      alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
    }
  };

  const handleSubmitHosting = async () => {
    const token = '7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU'; 
    const chatId = '6914657739'; 
    const message = `Yangi hosting so'rovi:\nIsm: ${name}\nTarif: ${selectedPlan}\nTelefon raqami: ${phoneNumber}`;
    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, { chat_id: chatId, text: message });
      alert('Ma\'lumot yuborildi!');
      setName('');
      setSelectedPlan('');
      setPhoneNumber('');
      setIsHostingModalVisible(false);
    } catch (error) {
      console.error('Telegram botga ma\'lumot yuborishda xatolik:', error);
      alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
    }
  };

  const handleSubmitSite = async () => {
    const token = '7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU'; 
    const chatId = '6914657739'; 
    const message = `Yangi sayt yaratish so'rovi:\nIsm: ${name}\nTelefon raqami: ${phoneNumber}\nIzoh: ${selectedPlan}`;
    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, { chat_id: chatId, text: message });
      alert('Ma\'lumot yuborildi!');
      setName('');
      setSelectedPlan('');
      setPhoneNumber('');
      setIsSiteModalVisible(false);
    } catch (error) {
      console.error('Telegram botga ma\'lumot yuborishda xatolik:', error);
      alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
    }
  };

  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{t('hero_title')}</h1>
          <p className="hero-subtitle">{t('hero_subtitle')}</p>
          <div className="cta-buttons">
            <Button className="cta-button" onClick={showDomainModal}>{t('cta_domain')}</Button>
            <Button className="cta-button" onClick={showHostingModal}>{t('cta_hosting')}</Button>
            <Button className="cta-button" onClick={showSiteModal}>{t('cta_site')}</Button>
          </div>
        </div>
      </header>
      <section className="services-preview">
        <h2>{t('services_title')}</h2>
        <div className="service-cards">
          <div className="service-card">
            <div className="icon-container">
              <FaGlobe className="service-icon" />
            </div>
            <h3>{t('domain_service')}</h3>
            <p>Search and register domains at the best prices.</p>
          </div>
          <div className="service-card">
            <div className="icon-container">
              <FaServer className="service-icon" />
            </div>
            <h3>{t('hosting_service')}</h3>
            <p>Powerful servers and reliable service for your website.</p>
          </div>
          <div className="service-card">
            <div className="icon-container">
              <FaLaptopCode className="service-icon" />
            </div>
            <h3>{t('site_service')}</h3>
            <p>Development of unique solutions for your business.</p>
          </div>
        </div>
      </section>

      {/* Domain Modal */}
      <Modal 
        title={t('domain_modal_title')} 
        visible={isDomainModalVisible} 
        onCancel={handleDomainCancel}
        footer={[
          <Button key="cancel" onClick={handleDomainCancel}>
            {t('cancel_button')}
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmitDomain}>
            {t('submit_button')}
          </Button>,
        ]}
      >
        <div>
          <label>{t('domain_placeholder_name')}:</label>
          <Input 
            placeholder={t('domain_placeholder_name')} 
            style={{ marginBottom: '1rem' }} 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />

          <label>{t('domain_placeholder_plan')}:</label>
          <Select 
            placeholder={t('domain_placeholder_plan')} 
            style={{ width: '100%', marginBottom: '1rem' }} 
            value={selectedPlan} 
            onChange={(value) => setSelectedPlan(value)}
          >
            <Option value="basic">Basic - $10/month</Option>
            <Option value="standard">Standard - $20/month</Option>
            <Option value="premium">Premium - $30/month</Option>
          </Select>

          <label>{t('domain_placeholder_phone')}:</label>
          <Input 
            placeholder={t('domain_placeholder_phone')} 
            style={{ marginBottom: '1rem' }} 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
          />
        </div>
      </Modal>

      {/* Hosting Modal */}
      <Modal 
        title={t('hosting_modal_title')} 
        visible={isHostingModalVisible} 
        onCancel={handleHostingCancel}
        footer={[
          <Button key="cancel" onClick={handleHostingCancel}>
            {t('cancel_button')}
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmitHosting}>
            {t('submit_button')}
          </Button>,
        ]}
      >
        <div>
          <label>{t('hosting_placeholder_name')}:</label>
          <Input 
            placeholder={t('hosting_placeholder_name')} 
            style={{ marginBottom: '1rem' }} 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />

          <label>{t('hosting_placeholder_plan')}:</label>
          <Select 
            placeholder={t('hosting_placeholder_plan')} 
            style={{ width: '100%', marginBottom: '1rem' }} 
            value={selectedPlan} 
            onChange={(value) => setSelectedPlan(value)}
          >
            <Option value="basic">Basic - $5/month</Option>
            <Option value="standard">Standard - $10/month</Option>
            <Option value="premium">Premium - $20/month</Option>
          </Select>

          <label>{t('hosting_placeholder_phone')}:</label>
          <Input 
            placeholder={t('hosting_placeholder_phone')} 
            style={{ marginBottom: '1rem' }} 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
          />
        </div>
      </Modal>

      {/* Site Creation Modal */}
      <Modal 
        title={t('site_modal_title')} 
        visible={isSiteModalVisible} 
        onCancel={handleSiteCancel}
        footer={[
          <Button key="cancel" onClick={handleSiteCancel}>
            {t('cancel_button')}
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmitSite}>
            {t('submit_button')}
          </Button>,
        ]}
      >
        <div>
          <label>{t('site_placeholder_name')}:</label>
          <Input 
            placeholder={t('site_placeholder_name')} 
            style={{ marginBottom: '1rem' }} 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />

          <label>{t('site_placeholder_description')}:</label>
          <Input.TextArea 
            placeholder={t('site_placeholder_description')} 
            style={{ marginBottom: '1rem' }} 
            value={selectedPlan} 
            onChange={(e) => setSelectedPlan(e.target.value)} 
          />

          <label>{t('site_placeholder_phone')}:</label>
          <Input 
            placeholder={t('site_placeholder_phone')} 
            style={{ marginBottom: '1rem' }} 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
          />
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;
