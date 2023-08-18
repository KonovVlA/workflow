export interface Transaction extends Record<string, unknown> {
    id: string;
    operationDateTime: number;
}
