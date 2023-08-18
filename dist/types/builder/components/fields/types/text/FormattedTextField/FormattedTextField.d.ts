/// <reference types="react" />
import { Unmask } from '@armczk/ui-components';
import { WorkflowFieldComponentProps } from "../../../../..";
declare type DefaultFormattedTextFieldProps = Pick<WorkflowFieldComponentProps, 'placeholder'>;
export interface FormattedTextFieldProps<U extends Unmask> extends DefaultFormattedTextFieldProps, Omit<WorkflowFieldComponentProps, 'placeholder'> {
    unmask?: U;
}
export declare function FormattedTextField<U extends Unmask>(props: FormattedTextFieldProps<U>): JSX.Element;
export declare namespace FormattedTextField {
    var defaultProps: DefaultFormattedTextFieldProps;
}
export {};
