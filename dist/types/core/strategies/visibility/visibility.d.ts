import { StrategyFnProps } from "../../definitions";
import { VisibilityCondition } from "./definitions";
export declare type VisibilityStrategyProps = {
    condition: VisibilityCondition;
};
export declare function visibility({ properties, settings, form, }: StrategyFnProps<VisibilityStrategyProps>): void;
