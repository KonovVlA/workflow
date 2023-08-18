import React from 'react';
import { ScreenProperties } from "../../../../core";
interface WorkflowScreenProps {
    children?: React.ReactNode;
    className?: string;
    properties?: ScreenProperties;
}
export declare function WorkflowScreen({ properties, children, className, }: WorkflowScreenProps): JSX.Element;
export {};
