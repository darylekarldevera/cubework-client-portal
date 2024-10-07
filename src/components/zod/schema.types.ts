import { z } from 'zod';
import {
  addBankAccountSchema,
  addCreditCardSchema,
  forgotSchema,
  loginSchema,
  makePaymentTableSchema,
  verifySchema,
} from '@/components/zod/schema.ts';

export type loginSchemaProps = z.infer<typeof loginSchema>;
export type forgotSchemaProps = z.infer<typeof forgotSchema>;
export type verifySchemaProps = z.infer<typeof verifySchema>;
export type addBankAccountSchemaProps = z.infer<typeof addBankAccountSchema>;
export type addCreditCardSchemaProps = z.infer<typeof addCreditCardSchema>;
export type makePaymentTableSchemaProps = z.infer<typeof makePaymentTableSchema>;
