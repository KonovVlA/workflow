/// <reference types="react" />
import { WorkflowFieldComponentProps } from "../../../../..";
declare type DefaultDateFieldProps = Pick<WorkflowFieldComponentProps, 'placeholder'>;
interface DateFieldProperties {
    format?: string;
}
export declare type DateFieldProps = DefaultDateFieldProps & Omit<WorkflowFieldComponentProps<DateFieldProperties>, 'placeholder'>;
export declare function DateField(props: DateFieldProps): JSX.Element;
export declare namespace DateField {
    var defaultProps: DefaultDateFieldProps;
}
export {};
