import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: "MoMo Super App",
      stats: {
        users: "30,000,000+ trusted users",
        payment_points: "140,000+ payment points",
        partners: "50,000+ payment partners",
      },  
      features: {
        fast_transfer: "Fast money transfer, no fees",
        fast_transfer_highlight: "Fast money transfer",
        secure: "and internationally compliant",
        secure_highlight: "Secure",
        cashless: "Shopping, dining, traveling... cashless",
        cashless_highlight: "Shopping, dining",
        test: "không tiền mặt",
        test_highlight: "Ăn uống ba",
      },
    },
  },
  vi: {
    translation: {
      header: "Siêu ứng dụng MoMo",
      stats: {
        users: "30.000.000+ người tin dùng",
        payment_points: "140.000+ điểm thanh toán",
        partners: "50.000+ đối tác thanh toán",
      },
      features: {
        fast_transfer: "Chuyển tiền siêu tốc, không tốn phí",
        fast_transfer_highlight: "Chuyển tiền siêu tốc",
        secure: "Chuẩn quốc tế,",
        secure_highlight: "An toàn bảo mật",        
        cashless: "Ăn uống, mua sắm, du lịch... không tiền mặt",
        cashless_highlight: "Ăn uống, mua sắm",
        test: "kAHAS",
        test_highlight: "HHHHHHH",
      },
    },
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "vi", 
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
