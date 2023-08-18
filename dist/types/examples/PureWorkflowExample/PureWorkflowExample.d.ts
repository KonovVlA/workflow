/// <reference types="react" />
import { CoreWorkflowProps } from "../../core";
export interface PureWorkflowExampleProps extends Omit<CoreWorkflowProps, 'name'> {
}
export declare function PureWorkflowExample({ url, config }: PureWorkflowExampleProps): JSX.Element;
