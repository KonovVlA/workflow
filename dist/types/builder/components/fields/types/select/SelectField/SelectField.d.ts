/// <reference types="react" />
import { WorkflowFieldComponentProps } from "../../../../..";
declare type DefaultSelectFieldProps = Pick<WorkflowFieldComponentProps, 'placeholder'>;
export declare type SelectFieldProps = DefaultSelectFieldProps & Omit<WorkflowFieldComponentProps, 'placeholder'>;
export declare function SelectField(props: SelectFieldProps): JSX.Element;
export declare namespace SelectField {
    var defaultProps: DefaultSelectFieldProps;
}
export {};
