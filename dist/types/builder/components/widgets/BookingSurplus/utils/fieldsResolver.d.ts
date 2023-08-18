import { FieldResolver } from "../../../structure/WorkflowField/definitions/FieldResolver";
import { BookingSurplusField } from "../definitions/BookingSurplusField";
import { MaskField } from "../fields/MaskField";
export declare function fieldsResolver(field: BookingSurplusField, defaultResolver: FieldResolver): import("../../..").WorkflowFieldComponent | typeof MaskField;
