import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Inglizcha tarjima
const enTranslation = {
  service: "Services for your digital success",
  solutions: "Best solutions to grow your business",
  contactUs: "Contact Us",
  name: "Your Name",
  phoneNumber: "Your Phone Number",
  websitePurpose: "Website Purpose",
  purposeOptions: {
    work: "Work",
    business: "Business",
    personalBlog: "Personal Blog",
    education: "Education",
    shop: "Online Shop"
  },
  about: "About Us",
  services: "Services",
  pricing: "Pricing",
  blog: "Blog",
  contactPurpose: "Purpose of Contact",
  cancel: "Cancel",
  submit: "Submit",
  namePlaceholder: "Enter your name",
  phonePlaceholder: "Enter your phone number",
  purpose: "Purpose of Website",
  selectPurpose: "Select website purpose",
  business: "Business",
  personalBlog: "Personal Blog",
  education: "Education",
  onlineStore: "Online Store",
  submitSuccess: "Your request has been successfully submitted",
  error: "Error occurred while submitting the form",
   yearsOfExperience: "Years Of Experience",
   projectComplete: "Project Complete",
   happyClient: "Happy Client",
   winingAwards: "Wining Awards",
   heroTitle: "Experiences Fueled by Passion and Expertise",
   heroDescription: "At our core, we’re more than just a creative agency – we’re a dynamic team of storytellers, strategists, and tech enthusiasts.",
   domainModalTitle: "Request to Buy a Domain",
   hostingModalTitle: "Choose Hosting",
   siteModalTitle: "Request to Create a Site",
   nameLabel: "Your Name:",
   phoneNumberLabel: "Your Phone Number:",
   domainPlanLabel: "Domain Plans:",
   hostingPlanLabel: "Hosting Plans:",
   siteDescriptionLabel: "Site Description:",
   submitButton: "Submit",
   cancelButton: "Cancel",
   ctaButtonDomain: "Buy Domain",
   ctaButtonHosting: "Choose Hosting",
   ctaButtonSite: "Create Site",
   serviceDomains: "Domains",
   serviceDomainsDescription: "Search and register domains at the best prices.",
   serviceHosting: "Hosting",
   serviceHostingDescription: "Powerful servers and reliable service for your site.",
   serviceSiteCreation: "Site Creation",
   serviceSiteCreationDescription: "Developing unique solutions for your business.",
   mainTitle: 'Procus features',
   features: {
     postLayouts: 'Post Layouts',
     postText: 'Procus has 5 unique post layouts...',
     developmentReady: 'Development Ready',
     developmentText: 'Build pixel-perfect posts...',
     blogLayouts: 'Blog Layouts',
     blogText: 'Beautifully structure your content...',
     featuredArea: 'Featured Area',
     featuredText: 'The 7 striking featured area designs...',
     headerLayouts: 'Header layouts',
     headerText: 'The 3 unique & attractive header...',
     legendarySupport: 'Legendary Support',
     supportText: 'Have questions? knock any time...',
     colorTypography: 'Color & Typography',
     colorText: 'A boatload of built-in options...',
     seoFriendly: 'SEO Friendly',
     seoText: 'Procus is coded to current SEO...',
   } ,
   heroTitle: 'NewTec - Your Digital Success Begins Here',
  heroSubtitle: 'Providing a full range of services for your online business',
  ctaDomain: 'Purchase Domain',
  ctaHosting: 'Choose Hosting',
  ctaSite: 'Create Website',
  servicesTitle: 'Our Services',
  domainModalTitle: 'Request Domain Purchase',
  hostingModalTitle: 'Choose Hosting Plan',
  siteModalTitle: 'Request Website Creation',
  name: 'Your Name',
  namePlaceholder: 'Enter your name',
  domainPlan: 'Domain Plans',
  selectPlan: 'Select a Plan',
  phone: 'Your Phone Number',
  phonePlaceholder: 'Enter your phone number',
  submit: 'Submit',
  cancel: 'Cancel',
  domainPlans: {
    basic: 'Basic - $10/month',
    standard: 'Standard - $20/month',
    premium: 'Premium - $30/month',
  },
  hostingPlans: {
    basic: 'Basic - $5/month',
    standard: 'Standard - $10/month',
    premium: 'Premium - $20/month',
  },
  siteComment: 'Comment about the website',
  siteCommentPlaceholder: 'Enter detailed information about your website',
  error: 'An error occurred. Please try again.',
  success: 'Information has been sent!',
  contactForm: {
    title: "Submit Your Questions",
    name: "Name",
    namePlaceholder: "Enter your name",
    phone: "Phone Number",
    phonePlaceholder: "Enter your phone number",
    question: "Your Question",
    questionPlaceholder: "Write your question",
    submit: "Submit",
    successMessage: "Your question has been submitted. We will contact you soon!",
    errorMessage: "An error occurred. Please try again."
  },
  "companyName": "STARNEWTEC",
  "companyDescription": "STARNEWTEC - The best solutions for growing your business",
  "quickLinks": "Quick Links",
  "aboutUs": "About Us",
  "services": "Services",
  "pricing": "Pricing",
  "blog": "Blog",
  "contactUs": "Contact Us",
  "phone": "Phone Number",
  "email": "Email",
  "address": "Address",
  "city": "Tashkent City, Yunusobod District",
  "rightsReserved": "All rights reserved.",
  "testimonials_title": "Our Clients' Feedback",
  "testimonial_1_text": "Working with NewTec is very easy and convenient!",
  "testimonial_2_text": "Their services are of high quality and provide constant support.",
  "contact_modal_title": "Request for Website Creation",
  "name_label": "Your Name:",
  "phone_label": "Your Phone Number:",
  "purpose_label": "Website Purpose:",
  "purpose_option_work": "Work",
  "purpose_option_business": "Business",
  "purpose_option_blog": "Personal Blog",
  "purpose_option_education": "Education",
  "purpose_option_store": "Online Store",
  "cancel_button": "Cancel",
  "submit_button": "Submit",
  "contact_success": "Your message was successfully sent! We will contact you shortly.",
  "faq_title": "Frequently Asked Questions",
  "faq_question_1": "What services does NewTec provide?",
  "faq_answer_1": "NewTec offers a variety of services, including: Website creation and design, Domain and hosting services, Technical support, SEO and marketing.",
  "faq_action_1": "Contact us to use NewTec services",
  "faq_question_2": "How can I purchase domains?",
  "faq_answer_2": "To purchase a domain, you need to choose a domain name, select a domain registration company, register the domain, and configure DNS settings.",
  "faq_action_2": "Contact us to purchase a domain",
  "faq_question_3": "How does technical support work?",
  "faq_answer_3": "Technical support is provided through issue identification, solution finding, assistance, and monitoring.",
  "faq_action_3": "Contact us for technical support",
  "domain_modal_title": "Domain Purchase Request",
  "name_label": "Your Name:",
  "plan_label": "Domain Plans:",
  "phone_label": "Your Phone Number:",
  "domain_plan_basic": "Basic - $10/month",
  "domain_plan_standard": "Standard - $20/month",
  "domain_plan_premium": "Premium - $30/month",
  "website_modal_title": "Website Creation Request",
  "website_purpose_label": "Website Purpose:",
  "website_purpose_work": "Work",
  "website_purpose_business": "Business",
  "website_purpose_blog": "Personal Blog",
  "website_purpose_ecommerce": "E-commerce",
  "cancel_button": "Cancel",
  "submit_button": "Submit",
  "technical_modal_title": "Technical Support",
  "technical_phone": "Technical support phone number: +1234567890",
  "contact_button": "Contact",
  "hero_title": "NewTec - Your digital success starts here",
  "hero_subtitle": "Providing a full range of services for your online business",
  "cta_domain": "Buy Domain",
  "cta_hosting": "Choose Hosting",
  "cta_site": "Create Website",
  "services_title": "Our Services",
  "domain_modal_title": "Request for Domain Purchase",
  "domain_placeholder_name": "Enter your name",
  "domain_placeholder_plan": "Select plan",
  "domain_placeholder_phone": "Enter your phone number",
  "hosting_modal_title": "Choose Hosting",
  "hosting_placeholder_name": "Enter your name",
  "hosting_placeholder_plan": "Select plan",
  "hosting_placeholder_phone": "Enter your phone number",
  "site_modal_title": "Request to Create Website",
  "site_placeholder_name": "Enter your name",
  "site_placeholder_description": "Enter details about your site",
  "site_placeholder_phone": "Enter your phone number",
  "cancel_button": "Cancel",
  "submit_button": "Submit",
  "domain_service": "Domains",
  "hosting_service": "Hosting",
  "site_service": "Website Creation"
  
};

// O'zbekcha tarjima
const uzTranslation = {
  service: "Raqamli muvaffaqiyatingiz uchun xizmatlar",
  solutions: "Biznesingizni rivojlantirish uchun eng yaxshi yechimlar",
  contactUs: "Biz bilan bog'laning",
  name: "Ismingiz",
  phoneNumber: "Telefon raqamingiz",
  websitePurpose: "Sayt maqsadi",
  purposeOptions: {
    work: "Ish",
    business: "Biznes",
    personalBlog: "Shaxsiy blog",
    education: "Ta'lim",
    shop: "Online do'kon"
  },
  about: "Biz haqimizda",
  services: "Xizmatlar",
  pricing: "Narxlar",
  blog: "Blog",
  contactPurpose: "Aloqa maqsadi",
  cancel: "Bekor qilish",
  submit: "Yuborish",
  namePlaceholder: "Ismingizni kiriting",
  phonePlaceholder: "Telefon raqamingizni kiriting",
  purpose: "Sayt maqsadi",
  selectPurpose: "Sayt maqsadini tanlang",
  business: "Biznes",
  personalBlog: "Shaxsiy blog",
  education: "Ta'lim",
  onlineStore: "Online do'kon",
  submitSuccess: "So'rovingiz muvaffaqiyatli yuborildi",
  error: "Ma'lumot yuborishda xatolik yuz berdi",
  yearsOfExperience: "Tajribali Yillar",
  projectComplete: "Bajarilgan Loyihalar",
  happyClient: "Mamnun Mijozlar",
  winingAwards: "G'oliblik Mukofotlari",
  heroTitle: "Tajriba Hissiyot va Mutaxassislik bilan",
  heroDescription: "Bizning asosiymiz – bu faqat yaratuvchilar agentligi emas, biz dinamik hikoyachilar, strateglar va texnologiya ishqibozlaridan iborat jamoamiz.",
  mainTitle: 'Procus xususiyatlari',
  features: {
    postLayouts: 'Post maketlari',
    postText: 'Procusda 5 xil post maketi mavjud...',
    developmentReady: 'Rivojlanishga tayyor',
    developmentText: 'Piksellar aniqligi bilan postlar yarating...',
    blogLayouts: 'Blog maketlari',
    blogText: 'Kontentingizni chiroyli tuzing...',
    featuredArea: 'Ajratilgan joy',
    featuredText: '7 xil ajoyib ajratilgan joy dizaynlari...',
    headerLayouts: 'Sarlavha maketlari',
    headerText: '3 xil jozibali sarlavha dizayni...',
    legendarySupport: 'Afsonaviy yordam',
    supportText: 'Savollaringiz bormi? Har qanday vaqtda...',
    colorTypography: 'Rang va tipografiya',
    colorText: 'Kiritilgan variantlar ko‘p...',
    seoFriendly: 'SEOga mos',
    seoText: 'Procus SEO bo‘yicha mavjud kodlangan...',
  },
  contactForm: {
    title: "Savollaringizni yuboring",
    name: "Ism",
    namePlaceholder: "Ismingizni kiriting",
    phone: "Telefon raqam",
    phonePlaceholder: "Telefon raqamingizni kiriting",
    question: "Savolingiz",
    questionPlaceholder: "Savolingizni yozing",
    submit: "Yuborish",
    successMessage: "Savolingiz yuborildi. Tez orada siz bilan bog'lanamiz!",
    errorMessage: "Xato yuz berdi. Iltimos, qayta urinib ko'ring."
  },
    companyName: "STARNEWTEC",
    companyDescription: "STARNEWTEC - Biznesingizni rivojlantirish uchun eng yaxshi yechimlar",
    quickLinks: "Tezkor havolalar",
    aboutUs:"Biz haqimizda",
    services: "Xizmatlar",
    pricing: "Narxlar va tariflar",
    blog: "Blog",
    contactUs: "Biz bilan bog'laning",
    phone: "Telefon raqami",
    email: "Elektron pochta",
    address: "Manzil",
    city: "Toshkent Shahri, Yunusobod tumani",
    rightsReserved: "Barcha huquqlar himoyalangan.",
    "testimonials_title": "Mijozlarimiz Fikri",
    "testimonial_1_text": "NewTec bilan hamkorlik qilish juda oson va qulay!",
    "testimonial_2_text": "Xizmatlari yuqori sifatda va doimiy qo'llab-quvvatlashni ta'minlashadi.",
    "contact_modal_title": "Sayt yaratish uchun murojaat qilish",
    "name_label": "Ismingiz:",
    "phone_label": "Telefon raqamingiz:",
    "purpose_label": "Sayt maqsadi:",
    "purpose_option_work": "Ish uchun",
    "purpose_option_business": "Biznes",
    "purpose_option_blog": "Shaxsiy blog",
    "purpose_option_education": "Ta'lim",
    "purpose_option_store": "Online do'kon",
    "cancel_button": "Bekor qilish",
    "submit_button": "Yuborish",
    "contact_success": "Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.",
    "faq_title": "Tez-tez so'raladigan savollar",
  "faq_question_1": "NewTec qanday xizmatlarni taqdim etadi?",
  "faq_answer_1": "NewTec turli xil xizmatlarni taqdim etadi, jumladan: Veb-sayt yaratish va dizayn, Domen va hosting xizmatlari, Texnik qo'llab-quvvatlash, SEO va marketing.",
  "faq_action_1": "NewTec xizmatlaridan foydalanish uchun bog'laning",
  "faq_question_2": "Domenlarni qanday sotib olsam bo'ladi?",
  "faq_answer_2": "Domen sotib olish uchun domen nomini tanlash, domen ro'yxatga olish kompaniyasini tanlash, domenni ro'yxatga olish, va DNS sozlamalarini konfiguratsiya qilish zarur.",
  "faq_action_2": "Domen sotib olish uchun murojaat qiling",
  "faq_question_3": "Texnik qo'llab-quvvatlash qanday ishlaydi?",
  "faq_answer_3": "Texnik qo'llab-quvvatlash muammo aniqlash, yechim topish, yordam ko'rsatish, va monitoring orqali amalga oshiriladi.",
  "faq_action_3": "Texnik qo'llab-quvvatlash uchun murojaat qiling",
  "domain_modal_title": "Domen sotib olish uchun murojaat",
  "name_label": "Ismingiz:",
  "plan_label": "Domenn tariflari:",
  "phone_label": "Telefon raqamingiz:",
  "domain_plan_basic": "Basic - $10/oyiga",
  "domain_plan_standard": "Standard - $20/oyiga",
  "domain_plan_premium": "Premium - $30/oyiga",
  "website_modal_title": "Sayt yaratish uchun murojaat",
  "website_purpose_label": "Sayt maqsadi:",
  "website_purpose_work": "Ish uchun",
  "website_purpose_business": "Biznes",
  "website_purpose_blog": "Shaxsiy blog",
  "website_purpose_ecommerce": "Elektron tijorat",
  "cancel_button": "Bekor qilish",
  "submit_button": "Yuborish",
  "technical_modal_title": "Texnik yordam",
  "technical_phone": "Texnik yordam uchun telefon raqami: +1234567890",
  "contact_button": "Contact",
  "hero_title": "NewTec - Sizning raqamli muvaffaqiyatingiz shu yerda boshlanadi",
  "hero_subtitle": "Sizning onlayn biznesingiz uchun to'liq xizmatlarni taqdim etamiz",
  "cta_domain": "Domen sotib olish",
  "cta_hosting": "Hostingni tanlash",
  "cta_site": "Sayt yaratish",
  "services_title": "Bizning xizmatlarimiz",
  "domain_modal_title": "Domen sotib olish uchun murojaat qilish",
  "domain_placeholder_name": "Ismingizni kiriting",
  "domain_placeholder_plan": "Tarifni tanlang",
  "domain_placeholder_phone": "Telefon raqamingizni kiriting",
  "hosting_modal_title": "Hostingni tanlash",
  "hosting_placeholder_name": "Ismingizni kiriting",
  "hosting_placeholder_plan": "Tarifni tanlang",
  "hosting_placeholder_phone": "Telefon raqamingizni kiriting",
  "site_modal_title": "Sayt yaratish uchun murojaat qilish",
  "site_placeholder_name": "Ismingizni kiriting",
  "site_placeholder_description": "Saytingiz haqida batafsil ma'lumot kiriting",
  "site_placeholder_phone": "Telefon raqamingizni kiriting",
  "cancel_button": "Bekor qilish",
  "submit_button": "Yuborish",
  "domain_service": "Domennar",
  "hosting_service": "Hosting",
  "site_service": "Sayt yaratish"
};

// Ruscha tarjima
const ruTranslation = {
  service: "Услуги для вашего цифрового успеха",
  solutions: "Лучшие решения для развития вашего бизнеса",
  contactUs: "Свяжитесь с нами",
  name: "Ваше имя",
  phoneNumber: "Ваш номер телефона",
  websitePurpose: "Цель сайта",
  purposeOptions: {
    work: "Работа",
    business: "Бизнес",
    personalBlog: "Личный блог",
    education: "Образование",
    shop: "Интернет-магазин"
  },
  about: "О нас",
  services: "Услуги",
  pricing: "Цены",
  blog: "Блог",
  contactPurpose: "Цель обращения",
  cancel: "Отмена",
  submit: "Отправить",
  namePlaceholder: "Введите ваше имя",
  phonePlaceholder: "Введите ваш номер телефона",
  purpose: "Цель сайта",
  selectPurpose: "Выберите цель сайта",
  business: "Бизнес",
  personalBlog: "Личный блог",
  education: "Образование",
  onlineStore: "Интернет-магазин",
  submitSuccess: "Ваш запрос был успешно отправлен",
  error: "Произошла ошибка при отправке формы",
  yearsOfExperience: "Годы Опыт",
  projectComplete: "Завершенные Проекты",
  happyClient: "Счастливые Клиенты",
  winingAwards: "Победные Награды",
  heroTitle: "Опыт, подпитываемый Страстью и Экспертизой",
  heroDescription: "В основе нашего агентства – это не просто креативное агентство, а динамичная команда рассказчиков, стратегов и энтузиастов технологий.",
    domainModalTitle: "Запрос на покупку домена",
    hostingModalTitle: "Выбор хостинга",
    siteModalTitle: "Запрос на создание сайта",
    nameLabel: "Ваше Имя:",
    phoneNumberLabel: "Ваш Телефон:",
    domainPlanLabel: "Планы на домен:",
    hostingPlanLabel: "Планы на хостинг:",
    siteDescriptionLabel: "Описание сайта:",
    submitButton: "Отправить",
    cancelButton: "Отменить",
    ctaButtonDomain: "Купить домен",
    ctaButtonHosting: "Выбрать хостинг",
    ctaButtonSite: "Создать сайт",
    serviceDomains: "Домены",
    serviceDomainsDescription: "Поиск и регистрация доменов по лучшим ценам.",
    serviceHosting: "Хостинг",
    serviceHostingDescription: "Мощные серверы и надежное обслуживание для вашего сайта.",
    serviceSiteCreation: "Создание сайтов",
    serviceSiteCreationDescription: "Разработка уникальных решений для вашего бизнеса.",
    mainTitle: 'Особенности Procus',
    features: {
      postLayouts: 'Макеты сообщений',
      postText: 'Procus имеет 5 уникальных макетов сообщений...',
      developmentReady: 'Готов к разработке',
      developmentText: 'Создавайте пиксельно-идеальные сообщения...',
      blogLayouts: 'Макеты блогов',
      blogText: 'Красиво структурируйте ваш контент...',
      featuredArea: 'Выделенная область',
      featuredText: '7 поразительных дизайнов выделенных областей...',
      headerLayouts: 'Макеты заголовков',
      headerText: '3 уникальных и привлекательных макета заголовков...',
      legendarySupport: 'Легендарная поддержка',
      supportText: 'Есть вопросы? Пишите в любое время...',
      colorTypography: 'Цвет и типография',
      colorText: 'Множество встроенных опций...',
      seoFriendly: 'SEO-оптимизирован',
      seoText: 'Procus закодирован с учетом современных требований SEO...',
      heroTitle: 'NewTec - Ваш цифровой успех начинается здесь',
  heroSubtitle: 'Предоставляем полный спектр услуг для вашего онлайн-бизнеса',
  ctaDomain: 'Купить домен',
  ctaHosting: 'Выбрать хостинг',
  ctaSite: 'Создать сайт',
  servicesTitle: 'Наши услуги',
  domainModalTitle: 'Запрос на покупку домена',
  hostingModalTitle: 'Выбор плана хостинга',
  siteModalTitle: 'Запрос на создание сайта',
  name: 'Ваше имя',
  namePlaceholder: 'Введите ваше имя',
  domainPlan: 'Планы доменов',
  selectPlan: 'Выберите план',
  phone: 'Ваш номер телефона',
  phonePlaceholder: 'Введите ваш номер телефона',
  submit: 'Отправить',
  cancel: 'Отмена',
  domainPlans: {
    basic: 'Базовый - $10/месяц',
    standard: 'Стандартный - $20/месяц',
    premium: 'Премиум - $30/месяц',
  },
  hostingPlans: {
    basic: 'Базовый - $5/месяц',
    standard: 'Стандартный - $10/месяц',
    premium: 'Премиум - $20/месяц',
  },
  siteComment: 'Комментарий о сайте',
  siteCommentPlaceholder: 'Введите подробную информацию о вашем сайте',
  error: 'Произошла ошибка. Пожалуйста, попробуйте еще раз.',
  success: 'Информация отправлена!',
    },
      contactForm: {
    title: "Отправьте свои вопросы",
    name: "Имя",
    namePlaceholder: "Введите ваше имя",
    phone: "Номер телефона",
    phonePlaceholder: "Введите ваш номер телефона",
    question: "Ваш вопрос",
    questionPlaceholder: "Напишите ваш вопрос",
    submit: "Отправить",
    successMessage: "Ваш вопрос отправлен. Мы скоро свяжемся с вами!",
    errorMessage: "Произошла ошибка. Пожалуйста, попробуйте еще раз."
      },
  "companyName": "STARNEWTEC",
  "companyDescription": "STARNEWTEC - Лучшие решения для развития вашего бизнеса",
  "quickLinks": "Быстрые ссылки",
  "aboutUs": "О нас",
  "services": "Услуги",
  "pricing": "Тарифы и цены",
  "blog": "Блог",
  "contactUs": "Свяжитесь с нами",
  "phone": "Телефонный номер",
  "email": "Электронная почта",
  "address": "Адрес",
  "city": "Город Ташкент, Юнусабадский район",
  "rightsReserved": "Все права защищены.",
  "testimonials_title": "Отзывы наших клиентов",
  "testimonial_1_text": "Работать с NewTec очень легко и удобно!",
  "testimonial_2_text": "Их услуги высокого качества и предоставляют постоянную поддержку.",
  "contact_modal_title": "Запрос на создание сайта",
  "name_label": "Ваше имя:",
  "phone_label": "Ваш номер телефона:",
  "purpose_label": "Цель сайта:",
  "purpose_option_work": "Работа",
  "purpose_option_business": "Бизнес",
  "purpose_option_blog": "Личный блог",
  "purpose_option_education": "Образование",
  "purpose_option_store": "Интернет-магазин",
  "cancel_button": "Отмена",
  "submit_button": "Отправить",
  "contact_success": "Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.",
  "faq_title": "Часто задаваемые вопросы",
  "faq_question_1": "Какие услуги предоставляет NewTec?",
  "faq_answer_1": "NewTec предлагает различные услуги, включая: Создание и дизайн веб-сайтов, Услуги доменов и хостинга, Техническая поддержка, SEO и маркетинг.",
  "faq_action_1": "Свяжитесь с нами, чтобы воспользоваться услугами NewTec",
  "faq_question_2": "Как я могу приобрести домены?",
  "faq_answer_2": "Для покупки домена нужно выбрать имя домена, выбрать компанию по регистрации доменов, зарегистрировать домен и настроить DNS.",
  "faq_action_2": "Свяжитесь с нами, чтобы приобрести домен",
  "faq_question_3": "Как работает техническая поддержка?",
  "faq_answer_3": "Техническая поддержка осуществляется через выявление проблем, поиск решений, помощь и мониторинг.",
  "faq_action_3": "Свяжитесь с нами для технической поддержки",
  "domain_modal_title": "Запрос на покупку домена",
  "name_label": "Ваше имя:",
  "plan_label": "Тарифы на домены:",
  "phone_label": "Ваш номер телефона:",
  "domain_plan_basic": "Basic - $10/месяц",
  "domain_plan_standard": "Standard - $20/месяц",
  "domain_plan_premium": "Premium - $30/месяц",
  "website_modal_title": "Запрос на создание сайта",
  "website_purpose_label": "Цель сайта:",
  "website_purpose_work": "Работа",
  "website_purpose_business": "Бизнес",
  "website_purpose_blog": "Личный блог",
  "website_purpose_ecommerce": "Электронная коммерция",
  "cancel_button": "Отмена",
  "submit_button": "Отправить",
  "technical_modal_title": "Техническая поддержка",
  "technical_phone": "Телефон технической поддержки: +1234567890",
  "contact_button": "Связаться",
  "hero_title": "NewTec - Ваш цифровой успех начинается здесь",
  "hero_subtitle": "Предоставляем полный спектр услуг для вашего онлайн бизнеса",
  "cta_domain": "Купить домен",
  "cta_hosting": "Выбор хостинга",
  "cta_site": "Создать сайт",
  "services_title": "Наши Услуги",
  "domain_modal_title": "Запрос на покупку домена",
  "domain_placeholder_name": "Введите ваше имя",
  "domain_placeholder_plan": "Выберите тариф",
  "domain_placeholder_phone": "Введите ваш номер телефона",
  "hosting_modal_title": "Выбор хостинга",
  "hosting_placeholder_name": "Введите ваше имя",
  "hosting_placeholder_plan": "Выберите тариф",
  "hosting_placeholder_phone": "Введите ваш номер телефона",
  "site_modal_title": "Запрос на создание сайта",
  "site_placeholder_name": "Введите ваше имя",
  "site_placeholder_description": "Введите информацию о вашем сайте",
  "site_placeholder_phone": "Введите ваш номер телефона",
  "cancel_button": "Отмена",
  "submit_button": "Отправить",
  "domain_service": "Домены",
  "hosting_service": "Хостинг",
  "site_service": "Создание сайтов"
};
const savedLanguage = localStorage.getItem('i18nextLng') || 'ru';
// i18next konfiguratsiyasi
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      uz: {
        translation: uzTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
    },
    lng: 'ru', // Dastlabki tilni ruscha qilib belgiladik
    fallbackLng: 'en', // Agar dastlabki til mavjud bo'lmasa, shu til ishlatiladi
    interpolation: {
      escapeValue: false, // Xavfsizlik uchun HTML qo'shmaslik
    },
  });

export default i18n;
