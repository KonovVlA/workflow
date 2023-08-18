/// <reference types="react" />
import { AnyMaskedOptions, MaskedTextFieldProps, Unmask } from '@armczk/ui-components';
import { WorkflowFieldComponentProps } from "../../../../..";
interface MaskedProps<U extends Unmask> extends Pick<MaskedTextFieldProps<AnyMaskedOptions, U>, 'mask' | 'unmask'> {
}
interface DefaultMaskFieldProps {
    placeholder?: string;
}
export declare type MaskFieldProps<U extends Unmask> = DefaultMaskFieldProps & WorkflowFieldComponentProps & MaskedProps<U>;
export declare function MaskField<U extends Unmask>(props: MaskFieldProps<U>): JSX.Element;
export declare namespace MaskField {
    var defaultProps: DefaultMaskFieldProps;
}
export {};
