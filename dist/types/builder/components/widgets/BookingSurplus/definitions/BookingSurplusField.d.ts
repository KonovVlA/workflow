import { Field, FieldFormat } from "../../../../../core/definitions";
export declare type BookingSurplusFieldId = 'bbmoID' | 'surplusAccount' | 'bookedAmount';
export interface BookingSurplusField extends Omit<Field, 'format'> {
    id: BookingSurplusFieldId;
    mask?: typeof Number | string | {
        mask: typeof Number | string;
    }[];
    unmask?: boolean;
    format: FieldFormat | 'maskedText';
}
