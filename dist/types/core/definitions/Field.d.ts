import { FieldValue, FieldValues, Validator } from "./";
export interface Field<P = DefaultFieldProperties> {
    id: string;
    type: FieldType;
    format?: FieldFormat;
    formatConfig?: string;
    referenceId?: string;
    title?: string;
    value?: FieldValue;
    values?: FieldValues;
    readonly?: boolean;
    placeholder?: string;
    validators?: Validator[];
    properties?: FieldProperties<P>;
}
export interface FieldHintProperty {
    title?: string;
    description?: string;
}
export interface CommonFieldProperties {
    hint?: FieldHintProperty;
}
export declare type DefaultFieldProperties = Record<string, unknown>;
export declare type FieldProperties<P = DefaultFieldProperties> = CommonFieldProperties & P;
export declare type FieldType = 'select' | 'text' | 'checkbox' | 'multiselect';
export declare type FieldFormat = 'decimal' | 'integer' | 'date' | 'switch' | 'radio' | 'product' | 'formattedText' | 'area' | 'phone';
