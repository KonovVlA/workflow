import { ReferenceItem } from "../../../../../core";
export interface FlattenTransactionProperties extends Omit<ReferenceItem, 'properties'>, TransactionProperties {
}
export interface TransactionProperties {
    amount?: string;
    creditStatus?: string;
    transType?: string;
    transDate?: string;
}
