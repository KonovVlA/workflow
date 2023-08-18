/// <reference types="react" />
import { Validator, Widget } from "../../../../../core/definitions";
export declare type EnforcementDocumentsProps = Widget<{
    id: string;
    values?: string[];
    validators?: Validator[];
    referenceId?: string;
    columnsReferenceId?: string;
    filterVisible?: boolean;
}>;
export declare function EnforcementDocuments({ properties, title }: EnforcementDocumentsProps): JSX.Element;
