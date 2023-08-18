import { ComponentType } from 'react';
import { Field, FieldCombinedValue, DefaultFieldProperties, Validator } from "../../../../../core/definitions";
import { CustomValidatorsMap } from "./CustomValidatorsMap";
export interface WorkflowFieldComponentProps<P = DefaultFieldProperties> extends Omit<Field<P>, 'value' | 'values'> {
    className?: string;
    value?: FieldCombinedValue;
    error?: string;
    onChange?: (value: FieldCombinedValue) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}
export declare type WorkflowFieldComponent = ComponentType<WorkflowFieldComponentProps> & {
    validators?: Validator[];
    customValidators?: CustomValidatorsMap;
};
