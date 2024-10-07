import { z } from 'zod';
import { getCurrentDate } from '@/lib/utils.ts';

const passwordValidation = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
const NumberValidation = new RegExp(/^.{10,}$/);
const routingNumberValidation = new RegExp(/^.{9,}$/);
const expiryDateValidation = new RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{4})$/); // const accountTypeValidation = new RegExp(/^(Checking Account|Savings Account)$/);
export const ACCOUNT_TYPES = ['Checking Account', 'Savings Account'] as const;

const email = {
  email: z.string().min(4, { message: 'Must have at least 4 characters' }).email({
    message: 'Must be a valid email',
  }),
};

const password = {
  password: z.string().min(4, { message: 'Must have at least 8 characters' }).regex(passwordValidation, {
    message:
      'Your password must have minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  }),
};

const accountName = {
  accountName: z.string().min(8, { message: 'Must have at least 8 characters' }),
};

const accountNumber = {
  accountNumber: z.string().min(10, { message: 'Must have at least 10 characters' }).regex(NumberValidation, {
    message: 'Your account number must have at least minimum 10 characters',
  }),
};

const routingNumber = {
  routingNumber: z.string().min(9, { message: 'Must have at least 9 characters' }).regex(routingNumberValidation, {
    message: 'Your routing number must have at least minimum 9 characters',
  }),
};

const cardHolderName = {
  cardHolderName: z.string().min(8, { message: 'Must have at least 8 characters' }),
};

const cardNumber = {
  cardNumber: z.string().min(10, { message: 'Must have at least 10 characters' }).regex(NumberValidation, {
    message: 'Your card number must have at least minimum 10 characters',
  }),
};

const cvv = {
  cvv: z.string().min(9, { message: 'Must have at least 9 characters' }).regex(routingNumberValidation, {
    message: 'Your CVV must have at least minimum 9 characters',
  }),
};

const expiryDate = {
  expiryDate: z.string().date().min(getCurrentDate(), {
    message: 'expiry date error',
  }),
};

export const accountType = {
  accountType: z.enum(ACCOUNT_TYPES, { message: 'Must be Checking or Savings Account' }),
};

const extraPaymentAmount = {
  extraPaymentAmount: z.string().max(15, { message: 'Must have at least 15 characters' }),
};

const extraPayment = {
  extraPayment: z.string().max(15, { message: 'Must have at least 15 characters' }),
};

export const makePaymentTableSchema = z.object({
  ...extraPaymentAmount,
  ...extraPayment,
});

export const addCreditCardSchema = z.object({
  ...cardHolderName,
  ...cardNumber,
  ...cvv,
});

export const addBankAccountSchema = z.object({
  ...accountName,
  ...accountNumber,
  ...routingNumber,
  ...accountType,
});

export const loginSchema = z.object({
  ...email,
  ...password,
});

export const forgotSchema = z.object({
  ...email,
});

export const verifySchema = z.object({
  ...password,
  ...password,
});
