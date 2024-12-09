import React from 'react';
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const { t } = useTranslation();
  const statsData = [
    { icon: '👥', text: t('stats.users') },
    { icon: '📍', text: t('stats.payment_points') },
    { icon: '🤝', text: t('stats.partners') }
  ];
  
  return (
    <div className="stats">
      {statsData.map((item, index) => (
        <div key={index} className="stat-item">
          <span className="stat-icon">{item.icon}</span>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
