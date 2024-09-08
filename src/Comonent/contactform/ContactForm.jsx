import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactForm.css'; // Stil faylini chaqiradi
import '../../i18next.js';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    question: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`https://api.telegram.org/bot7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: '6914657739',
          text: `${t('contactForm.title')}:\n\n${t('contactForm.name')}: ${formData.name}\n${t('contactForm.phone')}: ${formData.phone}\n${t('contactForm.question')}: ${formData.question}`,
        }),
      });
      
      const data = await response.json();
      if (data.ok) {
        alert(t('contactForm.successMessage'));
        setFormData({
          name: '',
          phone: '',
          question: '',
        });
      } else {
        alert(t('contactForm.errorMessage'));
      }
    } catch (error) {
      alert(t('contactForm.errorMessage'));
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h3 className='contact-title'>{t('contactForm.title')}</h3>
        <form onSubmit={handleSubmit} className='form-action'>
          <label>
            {t('contactForm.name')}:
            <input
              type="text"
              name="name"
              placeholder={t('contactForm.namePlaceholder')}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {t('contactForm.phone')}:
            <input
              type="tel"
              name="phone"
              placeholder={t('contactForm.phonePlaceholder')}
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {t('contactForm.question')}:
            <textarea
              name="question"
              placeholder={t('contactForm.questionPlaceholder')}
              value={formData.question}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="submit-button"
          >
            {t('contactForm.submit')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
