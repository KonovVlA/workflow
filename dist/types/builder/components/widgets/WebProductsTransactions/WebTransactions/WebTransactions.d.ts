/// <reference types="react" />
import { CustomValidatorsMap } from "../../../..";
import { WebTransactionsField } from "../definitions";
export interface WebTransactionsProps extends WebTransactionsField {
    index?: number;
    canRemove?: boolean;
    onRemove?: (id: string) => void;
    customValidators?: CustomValidatorsMap;
}
export declare function WebTransactions(props: WebTransactionsProps): JSX.Element;
