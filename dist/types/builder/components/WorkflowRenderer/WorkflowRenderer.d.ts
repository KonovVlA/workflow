/// <reference types="react" />
import { Error, Message, Screen } from "../../../core/definitions";
export interface WorkflowRendererProps {
    className?: string;
    screens: Screen[];
    messages: Message[];
    appError: Error;
    appLoading: boolean;
    onRetry: () => void;
}
export declare function WorkflowRenderer({ className, screens, messages, appError, appLoading, onRetry, }: WorkflowRendererProps): JSX.Element;
