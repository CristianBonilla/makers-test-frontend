import type { BankLoanStatus } from '../enums/bank-loan.enum';

export interface BankLoan {
  userId: string;
  amount: number;
  paymentTerm: Date;
}

export interface BankLoanRequest extends BankLoan { }

export interface BankLoanResponse extends BankLoan {
  bankLoanId: string;
  status: BankLoanStatus;
  created: Date;
}
