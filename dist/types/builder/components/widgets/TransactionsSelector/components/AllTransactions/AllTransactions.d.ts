/// <reference types="react" />
import { ProductType } from "../../../../..";
import { DateRange, Transaction } from "../../definitions";
export interface AllTransactionsProps {
    className?: string;
    productType: ProductType;
    cardColumnsReferenceId: string;
    depositColumnsReferenceId: string;
    range: DateRange;
    minDate?: string;
    maxDate?: string;
    selectedTransactions: Transaction[];
    transactions: Transaction[];
    loading?: boolean;
    error?: boolean;
    onSelect?: (ids: string[]) => void;
    onRangeChange?: (range: DateRange) => void;
    onRetry?: () => void;
}
export declare function AllTransactions(props: AllTransactionsProps): JSX.Element;
