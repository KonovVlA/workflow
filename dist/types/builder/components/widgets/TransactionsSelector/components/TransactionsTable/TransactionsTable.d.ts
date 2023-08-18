import { ReactNode } from 'react';
import { ProductType } from "../../../../..";
import { Transaction } from "../../definitions";
export interface TransactionsTableProps {
    className?: string;
    productType: ProductType;
    cardColumnsReferenceId: string;
    depositColumnsReferenceId: string;
    transactions: Transaction[];
    renderHeadRowAction?: () => ReactNode;
    renderBodyRowAction?: (id: string) => ReactNode;
}
export declare function TransactionsTable(props: TransactionsTableProps): JSX.Element;
