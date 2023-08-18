/// <reference types="react" />
import { ButtonType } from '@armczk/ui-components';
import { FieldsValues, Widget } from "../../../../core/definitions";
export declare type CoreButtonsProps = Widget<{
    style: ButtonType;
    validation?: boolean;
    forcedFields?: FieldsValues;
    additionalFields?: FieldsValues;
}>;
export declare function CoreButtons({ events, properties }: CoreButtonsProps): JSX.Element;
