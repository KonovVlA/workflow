import { FieldsValues } from "../../../..";
export declare type FieldsGetter = (forcedFields?: FieldsValues, additionalFields?: FieldsValues) => FieldsValues;
export declare function useFieldsGetter(): FieldsGetter;
