import { DecoratedMutableState } from "./definitions/DecoratedMutableState";
import { DirtyFieldsValues } from "../../../../../definitions";
export declare function saveTouched([name, touched]: [string, boolean], state: DecoratedMutableState<DirtyFieldsValues>): void;
export declare function restoreTouched([name]: [string], state: DecoratedMutableState<DirtyFieldsValues>): void;
export declare function clearSavedTouched(names: string[], state: DecoratedMutableState<DirtyFieldsValues>): void;
