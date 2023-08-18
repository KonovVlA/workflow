export declare type StrategyProperties = Record<string, unknown>;
export interface Strategy<P extends StrategyProperties = StrategyProperties> {
    type: string;
    properties?: P;
}
