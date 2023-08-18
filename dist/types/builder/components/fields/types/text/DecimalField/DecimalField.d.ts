/// <reference types="react" />
import { WorkflowFieldComponentProps } from "../../../../..";
interface DefaultDecimalFieldProps extends Pick<WorkflowFieldComponentProps, 'placeholder'> {
    unmask?: boolean;
}
export declare type DecimalFieldProps = DefaultDecimalFieldProps & Omit<WorkflowFieldComponentProps, 'placeholder'>;
export declare function DecimalField(props: DecimalFieldProps): JSX.Element;
export declare namespace DecimalField {
    var defaultProps: DefaultDecimalFieldProps;
}
export {};
