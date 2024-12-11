import React, { useState, useEffect } from 'react';
import {
  Card,
  Typography,
  Radio,
  Button,
  Divider,
  Space,
  Alert,
  message,
  QRCode,
  Modal
} from 'antd';
import {
  BankOutlined,
  WalletOutlined,
  CreditCardOutlined,
  MobileOutlined,
  QrcodeOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const PAYMENT_METHODS = [
  {
    key: 'bank',
    name: 'Chuyển khoản ngân hàng',
    icon: <BankOutlined />,
    description: 'Hạn mức 50,000 - 50,000,000',
    minAmount: 50000,
    maxAmount: 50000000,
    fee: 0.01,
    additionalFee: 0
  },
  {
    key: 'momo',
    name: 'Ví MoMo',
    icon: <MobileOutlined />,
    description: 'Hạn mức 20,000 - 5,000,000',
    minAmount: 20000,
    maxAmount: 5000000,
    fee: 0.02,
    additionalFee: 0
  },
  {
    key: 'zalopay',
    name: 'Ví ZaloPay',
    icon: <WalletOutlined />,
    description: 'Hạn mức 20,000 - 1,000,000',
    minAmount: 20000,
    maxAmount: 1000000,
    fee: 0.025,
    additionalFee: 0
  },
  {
    key: 'viettelpay',
    name: 'ViettelPay',
    icon: <QrcodeOutlined />,
    description: 'Hạn mức 20,000 - 10,000,000',
    minAmount: 20000,
    maxAmount: 10000000,
    fee: 0.02,
    additionalFee: 0
  },
  {
    key: 'card',
    name: 'Thẻ cào',
    icon: <CreditCardOutlined />,
    description: 'Hạn mức 20,000 - 1,000,000',
    minAmount: 20000,
    maxAmount: 1000000,
    fee: 0.25,
    additionalFee: 0
  }
];

const VNPayPaymentInterface = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [paymentStep, setPaymentStep] = useState('method-selection');
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [qrCodeData, setQRCodeData] = useState(null);
  const [countdownTime, setCountdownTime] = useState(900);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const mockOrderDetails = {
          transactionId: 'VNP-20241211-001',
          requestedAmount: 500000,
          description: 'Thanh toán dịch vụ'
        };

        setOrderDetails(mockOrderDetails);
      } catch (error) {
        message.error('Không thể tải thông tin thanh toán');
      }
    };

    fetchPaymentDetails();
  }, []);

  useEffect(() => {
    if (paymentStep === 'qr-payment' && countdownTime > 0) {
      const timer = setTimeout(() => {
        setCountdownTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (countdownTime === 0) {
      message.error('Mã QR đã hết hạn. Vui lòng thực hiện lại giao dịch.');
      setPaymentStep('method-selection');
    }
  }, [paymentStep, countdownTime]);

  const calculatePaymentDetails = (method) => {
    if (!method || !orderDetails) return null;

    if (orderDetails.requestedAmount < method.minAmount ||
      orderDetails.requestedAmount > method.maxAmount) {
      message.warning(`Số tiền không hợp lệ cho phương thức ${method.name}`);
      return null;
    }

    const transactionFee = Math.round(orderDetails.requestedAmount * method.fee);
    const creationFee = 10000;
    const totalFee = transactionFee + creationFee;
    const receivedAmount = orderDetails.requestedAmount - totalFee;

    return {
      transactionId: orderDetails.transactionId,
      requestedAmount: orderDetails.requestedAmount,
      transactionFee,
      creationFee,
      totalFee,
      receivedAmount,
      description: orderDetails.description
    };
  };

  const handlePayment = () => {
    if (!selectedMethod) {
      message.error('Vui lòng chọn phương thức thanh toán');
      return;
    }

    const details = calculatePaymentDetails(selectedMethod);
    if (!details) return;

    const mockQRCodeData = `vnp_TmnCode=ABCDEF&vnp_Amount=${details.requestedAmount}&vnp_TxnRef=${details.transactionId}`;

    setPaymentDetails(details);
    setQRCodeData(mockQRCodeData);
    setPaymentStep('qr-payment');
    setCountdownTime(900);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const renderMethodSelectionStep = () => (
    <>
      {orderDetails && (
        <Card
          type="inner"
          style={{
            marginBottom: 20,
            backgroundColor: '#f0f2f5'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <Title level={3} style={{ color: '#1890ff' }}>
              Thanh Toán Sản Phẩm
            </Title>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <Text strong>Mã giao dịch:</Text>
            <Text code>{orderDetails.transactionId}</Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <Text strong>Số tiền thanh toán:</Text>
            <Text strong style={{ color: '#f5222d' }}>
              {orderDetails.requestedAmount.toLocaleString()} VND
            </Text>
          </div>
          <div>
            <Text type="secondary">{orderDetails.description}</Text>
          </div>
        </Card>
      )}

      <Title level={4} style={{ marginBottom: 15 }}>
        Chọn phương thức thanh toán
      </Title>

      <Radio.Group
        style={{ width: '100%' }}
        onChange={(e) => {
          const method = PAYMENT_METHODS.find(m => m.key === e.target.value);
          setSelectedMethod(method);
        }}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          {PAYMENT_METHODS.map(method => (
            <Card
              key={method.key}
              style={{
                width: '100%',
                borderColor: selectedMethod?.key === method.key ? '#1890ff' : undefined
              }}
            >
              <Radio value={method.key} style={{ width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ fontSize: 24, marginRight: 15, color: '#1890ff' }}>
                    {method.icon}
                  </div>
                  <div>
                    <Text strong>{method.name}</Text>
                    <div>
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        {method.description}
                      </Text>
                    </div>
                  </div>
                </div>
              </Radio>
            </Card>
          ))}
        </Space>
      </Radio.Group>

      {selectedMethod && (
        <>
          <Divider />

          <Card
            type="inner"
            title="Chi Tiết Thanh Toán"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <Text>Số tiền yêu cầu</Text>
              <Text strong>{orderDetails.requestedAmount.toLocaleString()} VND</Text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <Text>Phí giao dịch</Text>
              <Text strong style={{ color: '#faad14' }}>
                {Math.round(orderDetails.requestedAmount * selectedMethod.fee).toLocaleString()} VND
              </Text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <Text>Phí tạo lệnh</Text>
              <Text strong style={{ color: '#faad14' }}>
                10,000 VND
              </Text>
            </div>
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <Text strong>Tổng phí</Text>
              <Text strong style={{ color: '#faad14' }}>
                {(Math.round(orderDetails.requestedAmount * selectedMethod.fee) + 10000).toLocaleString()} VND
              </Text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text strong>Số tiền thực nhận</Text>
              <Text strong style={{ color: '#f5222d', fontSize: 16 }}>
                {(orderDetails.requestedAmount - (Math.round(orderDetails.requestedAmount * selectedMethod.fee) + 10000)).toLocaleString()} VND
              </Text>
            </div>
          </Card>

          <Alert
            message="Lưu ý"
            description="Thông tin người nhận sẽ được ẩn khi thanh toán"
            type="warning"
            showIcon
            style={{ marginBottom: 15, marginTop: 15 }}
          />

          <Button
            type="primary"
            block
            size="large"
            onClick={handlePayment}
            style={{
              marginTop: 10,
              backgroundColor: '#ffa500',
              borderColor: '#fa8c16'
            }}
          >
            Tiếp tục thanh toán
          </Button>
        </>
      )}
    </>
  );

  const renderQRPaymentStep = () => (
    <div style={{ textAlign: 'center' }}>
      <Title level={4} style={{ color: '#fa8c16', marginBottom: 20 }}>
        Thanh Toán Bằng Mã QR
      </Title>

      <Card
        style={{
          maxWidth: 400,
          margin: '0 auto',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          {qrCodeData && (
            <QRCode
              value={qrCodeData}
              size={250}
              style={{ border: '2px solid #d9d9d9' }}
            />
          )}
        </div>

        <Divider />

        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <Text strong style={{ fontSize: 16, color: '#fa8c16' }}>
            Số tiền thanh toán: {paymentDetails?.requestedAmount.toLocaleString()} VND
          </Text>
        </div>

        <Alert
          message={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Thời gian còn lại</span>
              <Text strong style={{ color: '#f5222d' }}>
                <ClockCircleOutlined style={{ marginRight: 5 }} />
                {formatTime(countdownTime)}
              </Text>
            </div>
          }
          type="warning"
          style={{ marginBottom: 20 }}
        />

        <Paragraph
          type="secondary"
          style={{ textAlign: 'center', marginBottom: 20 }}
        >
          Vui lòng quét mã QR để hoàn tất thanh toán
        </Paragraph>

        <Button
          type="default"
          block
          onClick={() => setPaymentStep('method-selection')}
          style={{ marginTop: 10 }}
        >
          Quay lại chọn phương thức
        </Button>
      </Card>

      <Modal
        title="Thanh Toán Thành Công"
        visible={countdownTime === 0}
        onOk={() => setPaymentStep('method-selection')}
        onCancel={() => setPaymentStep('method-selection')}
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={() => setPaymentStep('method-selection')}
          >
            Đóng
          </Button>
        ]}
      >
        <div style={{ textAlign: 'center' }}>
          <CheckCircleOutlined style={{ fontSize: 48, color: '#52c41a', marginBottom: 20 }} />
          <Title level={4} style={{ color: '#52c41a' }}>
            Giao dịch thành công
          </Title>
          <Paragraph>
            Số tiền: {paymentDetails?.requestedAmount.toLocaleString()} VND
          </Paragraph>
          <Paragraph type="secondary">
            Mã giao dịch: {paymentDetails?.transactionId}
          </Paragraph>
        </div>
      </Modal>
    </div>
  );

  return (
    <Card
      style={{
        maxWidth: 1200,
        margin: '20px auto',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      {paymentStep === 'method-selection' && renderMethodSelectionStep()}
      {paymentStep === 'qr-payment' && renderQRPaymentStep()}
    </Card>
  );
};

export default VNPayPaymentInterface;