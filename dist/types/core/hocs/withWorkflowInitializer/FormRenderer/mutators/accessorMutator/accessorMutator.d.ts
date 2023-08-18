import { MutableState, Tools } from 'final-form';
import { DirtyFieldsValues } from "../../../../../definitions";
export declare function createAccessorMutator(): {
    getFieldValue: ([name]: [string], state: MutableState<DirtyFieldsValues>, tools: Tools<DirtyFieldsValues>) => void;
};
