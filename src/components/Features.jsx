import React from 'react';
import { useTranslation } from 'react-i18next';

const featuresData = [
  { icon: '🚀', text: 'features.fast_transfer', highlightPart: 'features.fast_transfer_highlight' },
  { icon: '🔒', text: 'features.secure', highlightPart: 'features.secure_highlight' },
  { icon: '🛒', text: 'features.cashless', highlightPart: 'features.cashless_highlight' },
];

// Hàm tách và highlight cụm văn bản
const highlightText = (fullText, highlightPart) => {
  const index = fullText.indexOf(highlightPart);
  return (
    <span>
      {fullText.slice(0, index)}
      <span className="stat-number">{highlightPart}</span>
      {fullText.slice(index + highlightPart.length)}
    </span>
  );
};

const Features = () => {
  const { t } = useTranslation();
  return (
    <div className="features-container">
      {featuresData.map((item, index) => (
        <div key={index} className="feature-item">
          <span className="feature-icon">{item.icon}</span>
          {highlightText(t(item.text), t(item.highlightPart))}
        </div>
      ))}
    </div>
    
  );  
};

export default Features;
