/// <reference types="react" />
import { Widget, ScreenProperties } from "../../../../core/definitions";
export interface WorkflowBodyProps {
    title?: string;
    widgets?: Widget[];
    screenProperties?: ScreenProperties;
}
export declare function WorkflowBody({ title, widgets, screenProperties }: WorkflowBodyProps): JSX.Element;
