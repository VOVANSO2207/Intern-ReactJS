import React, { useState, useEffect } from 'react';
import { Layout, Button, Select, Switch, Tooltip, Row, Col, Form, Input } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import '../public/assets/css/task2.css';
import { BankOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const { Header, Content } = Layout;
const { Option } = Select;

const PaymentTask2 = () => {
  const { t, i18n } = useTranslation(); 
  const [amount, setAmount] = useState('');
  const [bank, setBank] = useState(null);
  const navigate = useNavigate();

  const handleQuickAmount = (value) => {
    setAmount(value);
  };

  const handleQuickMessage = (msg) => {
    setMessage(msg);
  };
  const [message, setMessage] = useState('Nguyen Ngoc Thach Chau chuyen tien');
  const [switchChecked, setSwitchChecked] = useState(false);
  useEffect(() => {
    setMessage('Nguyen Ngoc Thach Chau chuyen tien');
  }, []);
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); 
  };
  return (
    <Layout>
      <Content style={{ padding: '20px' }}>
        <Row gutter={[16, 16]}>
          <Button
            type="primary"
            className='back-button'
            onClick={() => navigate('/')}

          >
            {t('button.back')}
          </Button>
        
          <Col span={12}></Col>
          <Col span={12}>
            <Header style={{ backgroundColor: '#fff', fontWeight: 'bold', textAlign: 'left', padding: '0' }}>   {t('headerPay')}</Header>
            <Form layout="vertical">
              <Form.Item>
                <Select
                  placeholder={t('select_bank')}
                  value={bank || undefined}
                  onChange={(value) => setBank(value)}
                  style={{ width: '100%', textAlign: 'left' }}
                >
                  <Option value="vietcombank">Vietcombank</Option>
                  <Option value="techcombank">Techcombank</Option>
                  <Option value="vpbank">VPBank</Option>
                  <Option value="mbbank">MB Bank</Option>
                </Select>
              </Form.Item>

              <Input
                placeholder={t('account_number')}
                className="custom-input"
                style={{ width: '100%', padding: '8px', border: '1px solid #d9d9d9', borderRadius: '4px' }}
                suffix={<BankOutlined style={{ color: 'orange', fontSize: '18px' }} />}
              />
              <Input
                placeholder={t('receiver_name')}
                className="custom-input"
                style={{ width: '100%', padding: '8px', border: '1px solid #d9d9d9', borderRadius: '4px', marginTop: '24px' }}

              />

              <div className="switch-container">
                <span className="title-account">{t('save_account')}</span>
                <Switch
                  checked={switchChecked}
                  onChange={(checked) => setSwitchChecked(checked)}
                  className="switch-custom"
                />
              </div>

              <div style={{ position: 'relative', marginBottom: '20px' }}>
                <Input
                  className="custom-input-money"
                  placeholder={t('amount')}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{
                    width: '100%',
                    paddingRight: '40px',
                    paddingLeft: '8px',
                    border: '1px solid #d9d9d9',
                    borderRadius: '4px',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#555',
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                >
                  <span style={{ marginRight: '4px', color: 'orange', fontWeight: 'bold' }}>Hạn mức</span>
                  <Tooltip title="Hạn mức">
                    <QuestionCircleOutlined style={{ fontSize: '16px' }} />
                  </Tooltip>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                {['100,000', '200,000', '300,000', '500,000', '1,000,000', '2,000,000', '3,000,000', '5,000,000'].map((value, index) => (
                  <div
                    key={value}
                    style={{
                      flex: '0 0 calc(25% - 10px)',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      onClick={() => handleQuickAmount(value)}
                      style={{
                        backgroundColor: amount === value ? '#ffa500' : '#f0f0f0',
                        color: amount === value ? '#fff' : '#000',
                        borderRadius: '20px',
                        width: '100%',
                      }}
                    >
                      {value} VND
                    </Button>
                  </div>
                ))}
              </div>

              <div style={{ position: 'relative' }}>
                <Input.TextArea
                  className="transfer-money__input"
                  placeholder="Nội dung chuyển tiền"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #d9d9d9',
                    borderRadius: '4px',
                    resize: 'none',
                    height: '80px',

                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '5px',
                    left: '8px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '5px',
                  }}
                >
                  {['mua hang', 'chuc mung', 'cafe', 'an trua', 'an toi', 'tra no'].map((msg) => (
                    <Button
                      key={msg}
                      onClick={() => handleQuickMessage(msg)}
                      style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '500',
                      }}
                    >
                      {msg}
                    </Button>
                  ))}
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default PaymentTask2;
