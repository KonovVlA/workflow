/// <reference types="react" />
import { WorkflowFieldComponentProps } from "../../../../..";
import { WebSummaryField } from "../../WebSummary";
interface TextViewFieldProperties {
    formatFrom?: string;
    formatTo?: string;
    copy?: boolean;
    maskedValue?: string;
}
export interface TextViewFieldProps extends Omit<WorkflowFieldComponentProps<TextViewFieldProperties>, 'format'>, Omit<WebSummaryField, 'value' | 'values'> {
}
export declare function TextViewField(props: TextViewFieldProps): JSX.Element;
export {};
