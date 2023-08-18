/// <reference types="react" />
import { ProductType } from "../../../../..";
import { Transaction } from "../../definitions";
export interface SelectedTransactionsProps {
    className?: string;
    productType: ProductType;
    cardColumnsReferenceId: string;
    depositColumnsReferenceId: string;
    transactions: Transaction[];
    onRemove?: (ids: string[]) => void;
}
export declare function SelectedTransactions(props: SelectedTransactionsProps): JSX.Element;
