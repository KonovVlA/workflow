/// <reference types="react" />
import { RadioGroupProps } from '@armczk/ui-components';
import { WorkflowFieldComponentProps } from "../../../../..";
export interface RadioFieldProperties {
    direction?: RadioGroupProps['direction'];
}
export interface RadioFieldProps extends WorkflowFieldComponentProps<RadioFieldProperties> {
}
export declare function RadioField(props: RadioFieldProps): JSX.Element;
