/// <reference types="react" />
import { Widget } from "../../../../core/definitions";
interface WorkflowHeaderDefaultProps {
    headers?: Widget[];
}
export interface WorkflowHeaderProps extends WorkflowHeaderDefaultProps {
}
export declare function WorkflowHeader({ headers }: WorkflowHeaderProps): JSX.Element;
export declare namespace WorkflowHeader {
    var defaultProps: WorkflowHeaderDefaultProps;
}
export {};
