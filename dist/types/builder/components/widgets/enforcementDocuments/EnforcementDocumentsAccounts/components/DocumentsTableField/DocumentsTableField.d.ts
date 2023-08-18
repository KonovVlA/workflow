/// <reference types="react" />
import { WorkflowFieldComponentProps } from "../../../../../..";
import { TableProperties } from "../../../../tables";
export declare type DocumentsTableFieldProperties = TableProperties & {
    accountsColumnsReferenceId?: string;
    accountsReferenceId?: string;
};
export declare type DocumentsTableFieldProps = WorkflowFieldComponentProps<DocumentsTableFieldProperties>;
export declare function DocumentsTableField(props: DocumentsTableFieldProps): JSX.Element;
