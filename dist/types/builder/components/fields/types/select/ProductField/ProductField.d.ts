/// <reference types="react" />
import { WorkflowFieldComponentProps } from "../../../../..";
declare type DefaultProductFieldProps = Pick<WorkflowFieldComponentProps, 'placeholder'>;
export declare type ProductFieldProps = DefaultProductFieldProps & Omit<WorkflowFieldComponentProps, 'placeholder'>;
export declare function ProductField(props: ProductFieldProps): JSX.Element;
export declare namespace ProductField {
    var defaultProps: DefaultProductFieldProps;
}
export {};
