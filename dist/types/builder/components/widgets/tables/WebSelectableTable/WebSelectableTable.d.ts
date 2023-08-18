/// <reference types="react" />
import { Validator, Widget } from "../../../../../core";
import { TableProperties } from "../definitions";
export declare type WebSelectableTableProperties = TableProperties & {
    id: string;
    validators?: Validator[];
    values?: string[];
};
export declare type WebSelectableTableProps = Widget<WebSelectableTableProperties>;
export declare function WebSelectableTable(props: WebSelectableTableProps): JSX.Element;
