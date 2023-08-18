/// <reference types="react" />
import { WorkflowFieldComponentProps } from "../../../../..";
interface TextAreaFieldProperties {
    rows?: number;
    minRows?: number;
    maxRows?: number;
}
declare type DefaultTextAreaFieldProps = Pick<WorkflowFieldComponentProps<TextAreaFieldProperties>, 'placeholder'>;
export declare type TextAreaFieldProps = DefaultTextAreaFieldProps & Omit<WorkflowFieldComponentProps<TextAreaFieldProperties>, 'placeholder'>;
export declare function TextAreaField(props: TextAreaFieldProps): JSX.Element;
export declare namespace TextAreaField {
    var defaultProps: DefaultTextAreaFieldProps;
}
export {};
