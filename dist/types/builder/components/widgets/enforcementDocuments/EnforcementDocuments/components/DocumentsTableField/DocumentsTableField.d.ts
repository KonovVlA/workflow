/// <reference types="react" />
import { ReferenceItem } from "../../../../../../../core";
import { WorkflowFieldComponentProps } from "../../../../../..";
import { TableProperties } from "../../../../tables/definitions";
import { EnforcementDocumentWithSettings } from "../../definitions";
export declare type DocumentsTableProperties = Pick<TableProperties, 'columnsReferenceId'> & {
    documents: ReferenceItem<EnforcementDocumentWithSettings>[];
};
export declare type DocumentsTableProps = WorkflowFieldComponentProps<DocumentsTableProperties>;
export declare function DocumentsTableField(props: DocumentsTableProps): JSX.Element;
