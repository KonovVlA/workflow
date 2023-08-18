/// <reference types="react" />
import { Widget } from "../../../../../core/definitions";
export interface BookingSurplusCopyProps extends Widget {
    name: string;
    totalAmount: number;
    index: number;
    onAdd: () => void;
    onDelete: () => void;
}
export declare function BookingSurplusCopy(props: BookingSurplusCopyProps): JSX.Element;
