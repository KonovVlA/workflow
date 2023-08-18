import { Transaction } from "../definitions";
export declare type SelectedTransactionsCache = Record<string, Transaction[]>;
export interface UseSelectedTransactionsReturn {
    selectedTransactions: Transaction[];
    setSelectedTransactions: (transactions: Transaction[]) => void;
}
export declare function useSelectedTransactions(productValue: string, initialSelectedTransactions: Transaction[]): UseSelectedTransactionsReturn;
