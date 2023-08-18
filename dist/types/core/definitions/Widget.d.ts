import { ComponentType } from 'react';
import { Event, Field, Strategy, VisibleSettings } from "./";
export interface Widget<P = DefaultWidgetProperties> {
    type: WidgetType;
    title?: string;
    description?: string;
    events?: Event[];
    fields?: Field[];
    strategies?: Strategy[];
    properties?: P;
    visible?: VisibleSettings;
}
export declare type DefaultWidgetProperties = Record<string, unknown>;
export declare type WidgetType = string;
export declare type WidgetComponent<P = DefaultWidgetProperties> = ComponentType<Widget<P>>;
