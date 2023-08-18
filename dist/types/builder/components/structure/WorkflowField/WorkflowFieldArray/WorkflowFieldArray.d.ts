import { ReactNode } from 'react';
import { FieldArrayRenderProps } from 'react-final-form-arrays';
import { FieldCombinedValue } from "../../../../../core/definitions";
export declare type FieldArrayValue = FieldCombinedValue | Record<string, FieldCombinedValue>;
export interface WorkflowFieldArrayProps<Value extends FieldArrayValue = FieldArrayValue> {
    name: string;
    initialValue?: Value[];
    children: (props: FieldArrayRenderProps<Value, HTMLElement>) => ReactNode;
}
export declare function WorkflowFieldArray(props: WorkflowFieldArrayProps): JSX.Element;
