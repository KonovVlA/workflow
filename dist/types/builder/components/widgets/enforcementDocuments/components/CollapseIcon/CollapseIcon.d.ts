/// <reference types="react" />
export interface CollapseIconProps {
    className?: string;
    collapsed: boolean;
    onToggle: () => void;
}
export declare function CollapseIcon({ className, collapsed, onToggle }: CollapseIconProps): JSX.Element;
