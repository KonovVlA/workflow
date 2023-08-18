/// <reference types="react" />
import { TooltipProps } from '@armczk/ui-components';
export interface MarkdownTooltipProps extends Omit<TooltipProps, 'render'> {
    title?: string;
    description?: string;
}
export declare function MarkdownTooltip(props: MarkdownTooltipProps): JSX.Element;
