import { FieldCombinedValue, FieldFormat, FieldType, Validator } from "../../../../../../core/definitions";
import { CustomValidatorsMap } from "../../definitions";
export interface UseValidatorParams {
    id: string;
    type: FieldType;
    format?: FieldFormat;
    readonly?: boolean;
    validators?: Validator[];
    customValidators?: CustomValidatorsMap;
    formatConfig?: string;
}
export declare type Validate = (value: FieldCombinedValue, allValues: Record<string, unknown>) => string | undefined;
export declare function useValidator(params: UseValidatorParams): Validate;
