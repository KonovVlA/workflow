import { DateRange, Transaction } from "../definitions";
export interface TransactionCache {
    range: DateRange;
    transactions: Transaction[];
}
export declare type TransactionsCache = Record<string, TransactionCache>;
export interface UseAsyncTransactionsReturn {
    isLoading: boolean;
    isError: boolean;
    range: DateRange;
    transactions: Transaction[];
    loadTransactions: () => Promise<void>;
    setRange: (range: DateRange) => void;
}
export declare function useAsyncTransactions(productValue: string, cardNumber: string, accountNumber: string, tb: string, cardSystemId: string, initialRange: DateRange): UseAsyncTransactionsReturn;
