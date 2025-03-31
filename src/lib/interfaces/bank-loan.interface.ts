import type { BankLoanStatus } from '../enums/bank-loan.enum';
import type { UserResponse } from './user.interface';

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

export interface BankLoansResult {
  user: UserResponse;
  bankLoans: BankLoanResponse[];
}
