import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header">
         <LanguageSwitcher />
      <h1>{t('header')}</h1>
    </header>
  );
};

export default Header;
