import { ComponentType } from 'react';
import { IconProps } from '@armczk/ui-components';
interface DefaultInfoProps {
    icon?: ComponentType<IconProps>;
}
interface InfoProps extends DefaultInfoProps {
    className?: string;
    iconClassName?: string;
    message?: string;
    onClickIcon?: () => void;
}
export declare function Info(props: InfoProps): JSX.Element;
export declare namespace Info {
    var defaultProps: DefaultInfoProps;
}
export {};
