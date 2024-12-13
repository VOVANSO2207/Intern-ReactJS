import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      continePayment: "Continue payment",
      productPay: "Product Payment",
      paymentTitle: "Product Payment",
      transactionId: "Transaction ID",
      paymentAmount: "Payment Amount",
      selectPaymentMethod: "Select Payment Method",
      qrPaymentTitle: "Payment via QR Code",
      scanQRInstruction: "Please scan the QR code to complete payment",
      paymentSuccessTitle: "Payment Successful",
      transactionSuccessMessage: "Transaction Successful",
      amountPaid: "Amount: {{amount}} VND",
  
      button: {
        back: "Back",
      },
      errors: {
        loadPaymentInfo: "Unable to load payment information",
      },
      orderDetails: {
        description: "Service Payment",
      },
      paymentMethods: {
        bank: {
          name: "Bank Transfer",
          description: "Limit 50,000 - 50,000,000",
        },
        momo: {
          name: "MoMo Wallet",
          description: "Limit 20,000 - 5,000,000",
        },
        zalopay: {
          name: "ZaloPay Wallet",
          description: "Limit 20,000 - 1,000,000",
        },
        viettelpay: {
          name: "ViettelPay",
          description: "Limit 20,000 - 10,000,000",
        },
        card: {
          name: "Prepaid Card",
          description: "Limit 20,000 - 1,000,000",
        },
      },
      header: "MoMo Super App",
      headerPay: "Transfer money",
      select_bank: "Select bank",
      account_number: "Account number",
      receiver_name: "Receiver name",
      save_account: "Save account to contact list",
      amount: "Amount",
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
        test: "No cash",
        test_highlight: "Dining highlight",
      },
    },
  },
  vi: {
    translation: {
      continePayment: "Tiếp tục thanh toán",
      productPay: "Thanh Toán Sản Phẩm",
      paymentTitle: "Thanh Toán Sản Phẩm",
      transactionId: "Mã giao dịch",
      paymentAmount: "Số tiền thanh toán",
      selectPaymentMethod: "Chọn phương thức thanh toán",
      qrPaymentTitle: "Thanh Toán Bằng Mã QR",
      scanQRInstruction: "Vui lòng quét mã QR để hoàn tất thanh toán",
      paymentSuccessTitle: "Thanh Toán Thành Công",
      transactionSuccessMessage: "Giao dịch thành công",
      amountPaid: "Số tiền: {{amount}} VND",
      
      button: {
        back: "Quay lại",
      },
      errors: {
        loadPaymentInfo: "Không thể tải thông tin thanh toán",
      },
      orderDetails: {
        description: "Thanh toán dịch vụ",
      },
      paymentMethods: {
        bank: {
          name: "Chuyển khoản ngân hàng",
          description: "Hạn mức 50,000 - 50,000,000",
        },
        momo: {
          name: "Ví MoMo",
          description: "Hạn mức 20,000 - 5,000,000",
        },
        zalopay: {
          name: "Ví ZaloPay",
          description: "Hạn mức 20,000 - 1,000,000",
        },
        viettelpay: {
          name: "ViettelPay",
          description: "Hạn mức 20,000 - 10,000,000",
        },
        card: {
          name: "Thẻ cào",
          description: "Hạn mức 20,000 - 1,000,000",
        },
      },
      header: "Siêu ứng dụng MoMo",
      headerPay: "Chuyển tiền đến",
      select_bank: "Chọn ngân hàng",
      account_number: "Số tài khoản",
      receiver_name: "Tên người nhận",
      save_account: "Lưu tài khoản vào danh bạ",
      amount: "Số tiền",
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
        test: "không tiền mặt",
        test_highlight: "Ăn uống ba",
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
