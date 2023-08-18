/// <reference types="react" />
import { WorkflowFieldComponentProps } from "../../../../..";
declare type DefaultTextFieldProps = Pick<WorkflowFieldComponentProps, 'placeholder'>;
export declare type TextFieldProps = DefaultTextFieldProps & Omit<WorkflowFieldComponentProps, 'placeholder'>;
export declare function TextField(props: TextFieldProps): JSX.Element;
export declare namespace TextField {
    var defaultProps: DefaultTextFieldProps;
}
export {};
