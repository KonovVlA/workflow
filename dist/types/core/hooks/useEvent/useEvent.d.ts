import { EventName, FieldsValues } from "../../definitions";
export interface EventFields {
    forced?: FieldsValues;
    additional?: FieldsValues;
}
export declare function useEvent(): (name: EventName, validation: boolean, fields?: EventFields) => Promise<import("../../definitions").Schema>;
