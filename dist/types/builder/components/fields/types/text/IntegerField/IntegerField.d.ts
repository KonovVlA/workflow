/// <reference types="react" />
import { WorkflowFieldComponentProps } from "../../../../..";
interface DefaultIntegerFieldProps extends Pick<WorkflowFieldComponentProps, 'placeholder'> {
    unmask?: boolean;
}
export declare type IntegerFieldProps = DefaultIntegerFieldProps & Omit<WorkflowFieldComponentProps, 'placeholder'>;
export declare function IntegerField(props: IntegerFieldProps): JSX.Element;
export declare namespace IntegerField {
    var defaultProps: DefaultIntegerFieldProps;
}
export {};
