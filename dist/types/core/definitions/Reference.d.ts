export declare type Reference<P = unknown> = {
    items: ReferenceItem<P>[];
};
export declare type ReferenceItem<P = unknown> = {
    value: string;
    title: string;
    properties: P;
};
