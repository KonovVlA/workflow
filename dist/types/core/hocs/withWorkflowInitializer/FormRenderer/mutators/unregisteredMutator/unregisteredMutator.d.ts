import { saveTouched, restoreTouched, clearSavedTouched } from "./touched";
export declare function createUnregisteredMutator(): {
    saveTouched: typeof saveTouched;
    restoreTouched: typeof restoreTouched;
    clearSavedTouched: typeof clearSavedTouched;
};
