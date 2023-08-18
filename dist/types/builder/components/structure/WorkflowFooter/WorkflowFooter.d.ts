/// <reference types="react" />
import { Widget } from "../../../../core/definitions";
interface WorkflowFooterDefaultProps {
    footers?: Widget[];
}
export interface WorkflowFooterProps extends WorkflowFooterDefaultProps {
}
export declare function WorkflowFooter({ footers }: WorkflowFooterProps): JSX.Element;
export declare namespace WorkflowFooter {
    var defaultProps: WorkflowFooterDefaultProps;
}
export {};
