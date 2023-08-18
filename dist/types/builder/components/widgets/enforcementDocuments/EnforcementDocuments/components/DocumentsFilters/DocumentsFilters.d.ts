/// <reference types="react" />
export interface DocumentsFiltersProps {
    className?: string;
    orderNumber: string;
    onChange: (orderNumber: string) => void;
    onReset: () => void;
    onSearch: () => void;
}
export declare function DocumentsFilters(props: DocumentsFiltersProps): JSX.Element;
