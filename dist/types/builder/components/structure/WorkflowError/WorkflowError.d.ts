/// <reference types="react" />
import { Error } from "../../../../core/definitions";
export interface WorkflowErrorProps {
    error?: Error;
    onRetry?: () => void;
}
export declare function WorkflowError({ error, onRetry }: WorkflowErrorProps): JSX.Element;
