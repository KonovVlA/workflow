import { VisibilityConditionOperator } from "./VisibilityConditionOperator";
import { VisibilityConditionItem } from "./VisibilityConditionItem";
export declare type VisibilityCondition = (VisibilityConditionOperator | VisibilityConditionItem | VisibilityCondition)[];
