import { Field } from "../../../../../core/definitions";
import { FieldResolver } from "./FieldResolver";
export declare type CustomFieldResolver = (field: Field, defaultResolver: FieldResolver) => ReturnType<FieldResolver>;
