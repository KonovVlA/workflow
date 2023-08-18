/// <reference types="react" />
import { AlertProps, AlertType } from '@armczk/ui-components';
export interface MarkdownAlertProps extends AlertProps {
    description?: string;
}
export declare type MarkdownAlertType = AlertType;
export declare function MarkdownAlert(props: MarkdownAlertProps): JSX.Element;
