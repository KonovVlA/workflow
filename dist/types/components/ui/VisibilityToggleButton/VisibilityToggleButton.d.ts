import { ReactNode } from 'react';
import { ButtonProps } from '@armczk/ui-components';
interface DefaultVisibilityToggleButtonProps extends Pick<ButtonProps, 'type' | 'fontWeight'> {
    defaultVisible?: boolean;
}
export interface VisibilityToggleButtonProps extends DefaultVisibilityToggleButtonProps {
    children?: ReactNode;
    title?: string | ((visible: boolean) => string);
    className?: string;
}
export declare function VisibilityToggleButton({ children, title, className, defaultVisible, type, fontWeight, }: VisibilityToggleButtonProps): JSX.Element;
export declare namespace VisibilityToggleButton {
    var defaultProps: DefaultVisibilityToggleButtonProps;
}
export {};
