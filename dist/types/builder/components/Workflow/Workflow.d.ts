import React, { ComponentType } from 'react';
import { CoreWorkflowProps } from "../../../core";
import { WorkflowRendererProps } from "../WorkflowRenderer";
export interface WorkflowProps extends CoreWorkflowProps {
    className?: string;
    rendererComponent?: ComponentType<WorkflowRendererProps>;
}
export declare const Workflow: React.ComponentType<WorkflowProps>;
