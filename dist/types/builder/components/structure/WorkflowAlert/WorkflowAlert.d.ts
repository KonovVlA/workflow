/// <reference types="react" />
import { Message } from "../../../../core/definitions";
export interface WorkflowAlertProps {
    className?: string;
    messages?: Message[];
}
export declare function WorkflowAlert({ className, messages }: WorkflowAlertProps): JSX.Element;
