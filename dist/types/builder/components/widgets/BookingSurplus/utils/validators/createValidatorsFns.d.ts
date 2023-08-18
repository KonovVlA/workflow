import { ValidatorFn } from "../../../../../../core";
import { BookingSurplusValidatorsNames } from "./createValidators";
export declare type BookingSurplusValidatorsFns = Partial<Record<BookingSurplusValidatorsNames, ValidatorFn>>;
export declare function createValidatorsFns(copyIndex: number, copiesAmount: number): BookingSurplusValidatorsFns;
