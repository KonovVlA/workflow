/// <reference types="react" />
import { Validator, Widget } from "../../../../../core";
export declare type EnforcementDocumentsAccountsProps = Widget<{
    id: string;
    values?: Record<string, string[]>;
    validators?: Validator[];
    referenceId?: string;
    columnsReferenceId?: string;
    accountsColumnsReferenceId?: string;
    accountsReferenceId?: string;
}>;
export declare function EnforcementDocumentsAccounts({ properties, title, }: EnforcementDocumentsAccountsProps): JSX.Element;
