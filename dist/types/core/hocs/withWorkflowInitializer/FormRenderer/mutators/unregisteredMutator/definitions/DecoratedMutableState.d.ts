import { InternalFormState, MutableState } from 'final-form';
import { UNREGISTERED_KEY } from "../constants/unregisteredKey";
import { UnregisteredState } from "./UnregisteredState";
export declare type DecoratedMutableState<T> = MutableState<T> & {
    formState: InternalFormState & {
        [key in typeof UNREGISTERED_KEY]: UnregisteredState;
    };
};
