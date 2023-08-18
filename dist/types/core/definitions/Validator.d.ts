import { DirtyFieldsValues, FieldCombinedValue, FieldFormat, FieldType } from "..";
export interface Validator<T extends string = string> {
    type: ValidatorType | T;
    message: string;
    value?: string;
}
export declare type ValidatorType = 'required' | 'regexp' | 'minLength' | 'maxLength' | 'minValue' | 'maxValue';
export declare type ValidatorFnMeta = {
    id: string;
    value: string;
    type: FieldType;
    format: FieldFormat;
    formatConfig: string;
};
export declare type ValidatorFn<T = FieldCombinedValue, K = DirtyFieldsValues> = (meta: ValidatorFnMeta) => (value: T, allValues?: K) => boolean;
