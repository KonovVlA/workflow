import { References, ReferenceId, Reference } from "../../../definitions";
export declare type ReferencesState = References;
export interface ReferenceWithId {
    referenceId: ReferenceId;
    reference: Reference;
}
