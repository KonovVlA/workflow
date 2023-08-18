/// <reference types="react" />
import { ReferenceItem, Widget } from "../../../../core/definitions";
import { TransactionProperties } from "./definitions";
export declare const WEB_PRODUCT_ID = "webProduct";
export declare const WEB_TRANSACTION_ID = "transaction";
export declare type WebProductsTransactionsProps = Widget<{
    referenceId?: string;
    value?: string;
    commissionValue?: ReferenceItem<TransactionProperties>[];
    readonly?: boolean;
}>;
export declare function WebProductsTransactions({ properties }: WebProductsTransactionsProps): JSX.Element;
