import React from 'react';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-cobalt';
import { CoreWorkflowProps } from "../../core";
export interface EditableDemoExampleProps extends Omit<CoreWorkflowProps, 'name'> {
}
export declare const EditableDemoExample: React.ComponentType<EditableDemoExampleProps>;
