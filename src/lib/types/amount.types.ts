import { Control } from 'react-hook-form';
import { BankLoanRequest } from '../interfaces/bank-loan.interface';

export type AmountProps = {
  control: Control<Partial<BankLoanRequest>, any, Partial<BankLoanRequest>>;
};
