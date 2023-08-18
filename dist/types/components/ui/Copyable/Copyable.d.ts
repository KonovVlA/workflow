import { ReactNode } from 'react';
interface DefaultCopyableProps {
    delay?: number;
}
export interface CopyableChildrenProps {
    copying: boolean;
    onCopy: () => void;
}
export interface CopyableProps extends DefaultCopyableProps {
    value: string;
    children: (props: CopyableChildrenProps) => ReactNode;
}
export declare function Copyable(props: CopyableProps): JSX.Element;
export declare namespace Copyable {
    var defaultProps: DefaultCopyableProps;
}
export {};
