/// <reference types="react" />
import { Field, Widget } from "../../../../core/definitions";
export interface WebSummaryProperties {
    columnCount: number;
}
export declare type WebSummaryProps = Widget<WebSummaryProperties>;
declare type WebSummaryFieldProperties = {
    formatFrom?: string;
    formatTo?: string;
    copy?: boolean;
    maskedValue?: string;
};
export interface WebSummaryField extends Omit<Field<WebSummaryFieldProperties>, 'format'> {
    format?: Field['format'] | 'currency';
}
export declare function WebSummary(props: WebSummaryProps): JSX.Element;
export {};
