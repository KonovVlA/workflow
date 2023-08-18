import { Widget } from "./";
export declare type ScreenWidth = 'sm' | 'md' | 'full';
export interface ScreenProperties {
    width?: ScreenWidth;
    collapsed?: boolean;
}
export interface Screen extends ScreenParts {
    title?: string;
    properties?: ScreenProperties;
}
export declare type ScreenParts = {
    [key in ScreenPart]?: Widget[];
};
export declare enum ScreenPart {
    HEADER = "header",
    BODY = "widgets",
    FOOTER = "footer"
}
