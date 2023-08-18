import { ColumnReferenceProperties } from "../../tables/definitions";
export declare type TransactionsColumnFormat = 'text' | 'date' | 'dateTime' | 'currency';
export declare type TransactionsColumnReferenceProperties = ColumnReferenceProperties & {
    format: TransactionsColumnFormat;
};
