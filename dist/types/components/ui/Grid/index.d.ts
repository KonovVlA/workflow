import React from 'react';
interface GridDefaultProps {
    columns?: number;
}
interface GridProps extends GridDefaultProps {
    children?: React.ReactNode;
    className?: string;
}
export declare function Grid({ className, children, columns }: GridProps): JSX.Element;
export declare namespace Grid {
    var defaultProps: GridDefaultProps;
}
export {};
