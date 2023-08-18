import { StrategyFnProps } from "../../definitions";
export declare type ChangeValueConditionItem = {
    id: string;
    condition: string;
    target: string;
    value: string;
};
export declare type ChangeValueStrategyProps = {
    conditions: ChangeValueConditionItem[];
};
export declare function changeValue({ properties, form }: StrategyFnProps<ChangeValueStrategyProps>): void;
