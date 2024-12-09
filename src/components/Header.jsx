import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header">
        <button className="btn-translation" onClick={() => switchLanguage('vi')}>Tiếng Việt</button>
        <button className="btn-translation" onClick={() => switchLanguage('en')}>English</button>
      <h1>{t('header')}</h1>
    </header>
  );
};

export default Header;
