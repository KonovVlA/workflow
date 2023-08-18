import { ReactNode } from 'react';
interface DefaultAccordionProps {
    defaultOpened?: boolean;
}
interface AccordionProps extends DefaultAccordionProps {
    children?: ReactNode;
    title?: ReactNode;
    onOpen?: () => void;
    onClose?: () => void;
}
export declare function Accordion({ children, title, defaultOpened, onOpen, onClose, }: AccordionProps): JSX.Element;
export declare namespace Accordion {
    var defaultProps: DefaultAccordionProps;
}
export {};
