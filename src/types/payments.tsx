interface IPaymentData {
  description: string;
  date: string;
  chargeBalance: number;
  balance: number;
}

interface IMakePaymentTableProps {
  items: IPaymentData[];
  totalAmount: number;
  totalPayment: number;
}

export type { IPaymentData, IMakePaymentTableProps };
