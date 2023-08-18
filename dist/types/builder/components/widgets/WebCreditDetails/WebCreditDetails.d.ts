/// <reference types="react" />
import { Field, Widget } from "../../../../core/definitions";
import { WebSummaryProps } from "../../..";
export declare type WebCreditDetailsReferenceProperties = {
    fields: Field[];
};
export declare type WebCreditDetailsProperties = WebSummaryProps['properties'] & {
    visible?: boolean;
    dpReferenceId?: string;
    participantsReferenceId?: string;
};
export declare type WebCreditDetailsProps = Widget<WebCreditDetailsProperties>;
export declare function WebCreditDetails(props: WebCreditDetailsProps): JSX.Element;
