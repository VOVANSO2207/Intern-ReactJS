import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <button className="btn-translation" onClick={() => switchLanguage('vi')}>
        Tiếng Việt
      </button>
      <button className="btn-translation" onClick={() => switchLanguage('en')}>
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
