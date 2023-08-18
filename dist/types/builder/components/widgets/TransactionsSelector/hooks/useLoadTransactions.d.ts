import { DateRange, Transaction } from "../definitions";
export declare type UseLoadTransactionsReturn = (cardNumber: string, accountNumber: string, tb: string, cardSystemId: string, range: DateRange) => Promise<Transaction[]>;
export declare function useLoadTransactions(): UseLoadTransactionsReturn;
