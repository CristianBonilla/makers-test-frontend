import { DEFAULT_HEADERS } from '../lib/constants/api';
import { BANK_LOAN_API } from '../lib/constants/api/bank-loan.api';
import type { BankLoanRequest, BankLoanResponse, BankLoansResult } from '../lib/interfaces/bank-loan.interface';

export async function addBankLoan(bankLoanRequest: BankLoanRequest) {
  try {
    const response = await BANK_LOAN_API.post<BankLoanResponse>('/', bankLoanRequest, {
      responseType: 'json',
      responseEncoding: 'UTF8',
      headers: {
        ...DEFAULT_HEADERS
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function approveBankLoan(userId: string, bankLoanId: string) {
  try {
    const response = await BANK_LOAN_API.put<BankLoanResponse>('/approve', null, {
      params: {
        userId,
        bankLoanId
      },
      responseType: 'json',
      responseEncoding: 'UTF8',
      headers: {
        ...DEFAULT_HEADERS
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function rejectBankLoan(userId: string, bankLoanId: string) {
  try {
    const response = await BANK_LOAN_API.put<BankLoanResponse>('/reject', null, {
      params: {
        userId,
        bankLoanId
      },
      responseType: 'json',
      responseEncoding: 'UTF8',
      headers: {
        ...DEFAULT_HEADERS
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteBankLoan(userId: string, bankLoanId: string) {
  try {
    const response = await BANK_LOAN_API.delete<BankLoanResponse>(`/${ userId }`, {
      params: {
        bankLoanId
      },
      responseType: 'json',
      responseEncoding: 'UTF8',
      headers: {
        ...DEFAULT_HEADERS
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchBankLoansByUserId(userId: string) {
  try {
    const response = await BANK_LOAN_API.get<BankLoansResult>(`/${ userId }`, {
      responseType: 'json',
      responseEncoding: 'UTF8',
      headers: {
        ...DEFAULT_HEADERS
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchPendingBankLoans() {
  try {
    const response = await BANK_LOAN_API.get<BankLoansResult[]>('/pending', {
      responseType: 'json',
      responseEncoding: 'UTF8',
      headers: {
        ...DEFAULT_HEADERS
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchBankLoanById(userId: string, bankLoanId: string) {
  try {
    const response = await BANK_LOAN_API.get<BankLoanResponse>('/', {
      params: {
        userId,
        bankLoanId
      },
      responseType: 'json',
      responseEncoding: 'UTF8',
      headers: {
        ...DEFAULT_HEADERS
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
