import { Control } from 'react-hook-form';
import { BankLoan } from '../interfaces/bank-loan.interface';

export type AmountProps = {
  control: Control<Partial<BankLoan>, any, Partial<BankLoan>>;
};
