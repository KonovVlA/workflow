import { EnforcementDocument } from "../../../../..";
export interface EnforcementDocumentSettings {
    detailsColumnCount?: number;
    detailsReferenceId?: string;
    transactionColumnsReferenceId?: string;
    transactionsReferenceId?: string;
}
export declare type EnforcementDocumentWithSettings = EnforcementDocument & EnforcementDocumentSettings;
