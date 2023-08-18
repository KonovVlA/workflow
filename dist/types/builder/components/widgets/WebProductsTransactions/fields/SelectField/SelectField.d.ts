/// <reference types="react" />
import { SelectFieldProps as DefaultSelectProps } from "../../../../..";
import { FlattenTransactionProperties } from "../../definitions";
export declare type SelectFieldProps = DefaultSelectProps & {
    onChange: (value: FlattenTransactionProperties) => void;
    value: FlattenTransactionProperties;
};
export declare function SelectField(props: SelectFieldProps): JSX.Element;
