/// <reference types="react" />
import { MarkdownAlertType } from "../../../../components/ui";
import { Widget } from "../../../../core/definitions";
export interface WebProcessAlertReference {
    external?: boolean;
    uri: string;
}
export declare type WebProcessAlertProps = Widget<{
    level: MarkdownAlertType;
    referenceId: string;
}>;
export declare function WebProcessAlert(props: WebProcessAlertProps): JSX.Element;
