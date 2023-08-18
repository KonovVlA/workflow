/// <reference types="react" />
import { TableProperties } from "../../../../tables";
export interface DocumentInnerProps extends TableProperties {
    className?: string;
    values: string[];
    onFocus: () => void;
    onBlur: () => void;
    onChange: (values: string[]) => void;
}
export declare function DocumentInner(props: DocumentInnerProps): JSX.Element;
