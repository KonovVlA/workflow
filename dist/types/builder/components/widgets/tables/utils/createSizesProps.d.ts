import { CSSProperties } from 'react';
import { ColumnReferenceProperties } from "../definitions";
export interface CreateSizesPropsReturn {
    style: CSSProperties;
}
export declare function createSizesProps(properties: ColumnReferenceProperties): CreateSizesPropsReturn;
