import { Reference } from "../../../../../core";
import { ExtendedProductProperties, TransactionProperties } from "../definitions";
export declare const useProductTransactions: (reference: Reference<ExtendedProductProperties>, value: string) => {
    product: import("../../../../../core").ReferenceItem<ExtendedProductProperties>;
    transactions: Reference<TransactionProperties>;
};
