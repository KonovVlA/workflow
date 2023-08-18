import { Reference } from "../../../../../core";
import { TransactionProperties, WebTransactionsField } from "../definitions";
export declare function convertTransactionFields(formValues: Record<string, unknown>, transactions: Reference<TransactionProperties>): WebTransactionsField[];
