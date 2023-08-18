import React from 'react';
import { CoreWorkflowProps } from "../../../core/definitions";
import { ScreensState } from "../../../core/store/modules/screens/types";
export interface WorkflowDemoProps extends CoreWorkflowProps {
    screens: ScreensState;
}
export declare const WorkflowDemo: React.ComponentType<WorkflowDemoProps>;
