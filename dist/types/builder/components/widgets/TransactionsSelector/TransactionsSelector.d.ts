/// <reference types="react" />
import { Widget } from "../../../../core/definitions";
export declare type TransactionsSelectorProps = Widget<{
    id?: string;
    productId?: string;
    productReferenceId?: string;
    initialDate?: string;
    minDate?: string;
    maxDate?: string;
    referenceId?: string;
    cardColumnsReferenceId?: string;
    depositColumnsReferenceId?: string;
    allTransactionsVisible?: boolean;
}>;
export declare function TransactionsSelector({ properties }: TransactionsSelectorProps): JSX.Element;
