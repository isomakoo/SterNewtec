import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Select } from 'antd';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import './Faq.css';

const { Option } = Select;

const FAQ = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDomainModalOpen, setIsDomainModalOpen] = useState(false);
  const [isWebsiteModalOpen, setIsWebsiteModalOpen] = useState(false);
  const [isTechnicalModalOpen, setIsTechnicalModalOpen] = useState(false);

  const [name, setName] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [websitePurpose, setWebsitePurpose] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const questions = [
    { 
      question: t('faq_question_1'), 
      answer: t('faq_answer_1'), 
      action: t('faq_action_1'),
      modalType: 'website'
    },
    { 
      question: t('faq_question_2'), 
      answer: t('faq_answer_2'), 
      action: t('faq_action_2'),
      modalType: 'domain'
    },
    { 
      question: t('faq_question_3'), 
      answer: t('faq_answer_3'), 
      action: t('faq_action_3'),
      modalType: 'technical'
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const showModal = (type) => {
    console.log(`Modal type: ${type}`);
    switch (type) {
      case 'domain':
        setIsDomainModalOpen(true);
        break;
      case 'website':
        setIsWebsiteModalOpen(true);
        break;
      case 'technical':
        setIsTechnicalModalOpen(true);
        break;
      default:
        break;
    }
  };

  const handleModalCancel = (type) => {
    switch (type) {
      case 'domain':
        setIsDomainModalOpen(false);
        break;
      case 'website':
        setIsWebsiteModalOpen(false);
        break;
      case 'technical':
        setIsTechnicalModalOpen(false);
        break;
      default:
        break;
    }
  };

  const sendToTelegram = async (message) => {
    const token = '7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU'; 
    const chatId = '6914657739'; 
    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      alert(t('message_sent'));
    } catch (error) {
      console.error(t('error_message'), error);
      alert(t('error_occurred'));
    }
  };

  const handleSubmitDomain = async () => {
    const message = `${t('domain_request')}\n${t('name_label')}: ${name}\n${t('plan_label')}: ${selectedPlan}\n${t('phone_label')}: ${phoneNumber}`;
    await sendToTelegram(message);
    handleModalCancel('domain');
  };

  const handleSubmitWebsite = async () => {
    const message = `${t('website_request')}\n${t('name_label')}: ${name}\n${t('phone_label')}: ${phoneNumber}\n${t('website_purpose_label')}: ${websitePurpose}`;
    await sendToTelegram(message);
    handleModalCancel('website');
  };

  return (
    <div className="faq-container" >
      <h3>{t('faq_title')}</h3>
      <ul className="faq-list">
        {questions.map((item, index) => (
          <li key={index} className="faq-item" >
            <div className="faq-question" onClick={() => handleToggle(index)}>
              {item.question}
              <span className={`faq-toggle ${activeIndex === index ? 'open' : ''}`}>+</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
                <p className="action-text">{item.action}</p>
                <button
                  className="cta-button"
                  onClick={() => showModal(item.modalType)}
                >
                  {t('contact_button')}
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Domain Modal */}
      <Modal
        title={t('domain_modal_title')}
        open={isDomainModalOpen}
        onCancel={() => handleModalCancel('domain')}
        footer={[
          <Button key="cancel" onClick={() => handleModalCancel('domain')}>
            {t('cancel_button')}
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmitDomain}>
            {t('submit_button')}
          </Button>,
        ]}
      >
        <div>
          <label>{t('name_label')}</label>
          <Input
            placeholder={t('name_placeholder')}
            style={{ marginBottom: '1rem' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>{t('plan_label')}</label>
          <Select
            placeholder={t('plan_placeholder')}
            style={{ width: '100%', marginBottom: '1rem' }}
            value={selectedPlan}
            onChange={(value) => setSelectedPlan(value)}
          >
            <Option value="basic">{t('domain_plan_basic')}</Option>
            <Option value="standard">{t('domain_plan_standard')}</Option>
            <Option value="premium">{t('domain_plan_premium')}</Option>
          </Select>

          <label>{t('phone_label')}</label>
          <Input
            placeholder={t('phone_placeholder')}
            style={{ marginBottom: '1rem' }}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </Modal>

      {/* Website Modal */}
      <Modal
        title={t('website_modal_title')}
        open={isWebsiteModalOpen}
        onCancel={() => handleModalCancel('website')}
        footer={[
          <Button key="cancel" onClick={() => handleModalCancel('website')}>
            {t('cancel_button')}
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmitWebsite}>
            {t('submit_button')}
          </Button>,
        ]}
      >
        <div>
          <label>{t('name_label')}</label>
          <Input
            placeholder={t('name_placeholder')}
            style={{ marginBottom: '1rem' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>{t('phone_label')}</label>
          <Input
            placeholder={t('phone_placeholder')}
            style={{ marginBottom: '1rem' }}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <label>{t('website_purpose_label')}</label>
          <Select
            placeholder={t('website_purpose_placeholder')}
            style={{ width: '100%', marginBottom: '1rem' }}
            value={websitePurpose}
            onChange={(value) => setWebsitePurpose(value)}
          >
            <Option value="work">{t('website_purpose_work')}</Option>
            <Option value="business">{t('website_purpose_business')}</Option>
            <Option value="blog">{t('website_purpose_blog')}</Option>
            <Option value="ecommerce">{t('website_purpose_ecommerce')}</Option>
          </Select>
        </div>
      </Modal>

      {/* Technical Modal */}
      <Modal
        title={t('technical_modal_title')}
        open={isTechnicalModalOpen}
        onCancel={() => handleModalCancel('technical')}
        footer={[
          <Button key="cancel" onClick={() => handleModalCancel('technical')}>
            {t('cancel_button')}
          </Button>,
          <Button key="submit" type="primary">
            {t('call_button')}
          </Button>,
        ]}
      >
        <div>
          <p>{t('technical_phone')}</p>
        </div>
      </Modal>
    </div>
  );
};

export default FAQ;
