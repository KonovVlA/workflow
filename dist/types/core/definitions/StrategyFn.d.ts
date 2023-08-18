import { Dispatch, SetStateAction } from 'react';
import { DirtyFieldsValues, StrategyProperties } from "./";
export declare type FormState = {
    values: DirtyFieldsValues;
};
export interface Form {
    change: (name: string, value: string) => void;
    getState: () => FormState;
}
export declare type StrategySettings = {
    hidden: boolean;
    update: Dispatch<SetStateAction<Partial<StrategySettings>>>;
};
export interface StrategyFnProps<P = {}> {
    settings: StrategySettings;
    properties?: P & StrategyProperties;
    form: Form;
}
export declare type StrategyFn = (props: StrategyFnProps) => void;
