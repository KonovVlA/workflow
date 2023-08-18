import React, { ComponentType } from 'react';
import { Field } from "../../../../core/definitions";
import { CustomFieldResolver, CustomValidatorsMap } from "./definitions";
import { WorkflowFieldArrayProps } from "./WorkflowFieldArray";
interface WorkflowFieldTypeStatics {
    Array: ComponentType<WorkflowFieldArrayProps>;
}
declare type WorkflowFieldType = ComponentType<WorkflowFieldProps>;
export interface DefaultWorkflowFieldProps {
    keepTouched?: boolean;
    destroyValueOnUnmount?: boolean;
}
export interface WorkflowFieldProps extends Field, DefaultWorkflowFieldProps {
    className?: string;
    resolver?: CustomFieldResolver;
    customValidators?: CustomValidatorsMap;
}
export declare const WorkflowField: React.NamedExoticComponent<(WorkflowFieldProps & React.RefAttributes<React.Component<WorkflowFieldProps, any, any>>) | (WorkflowFieldProps & {
    children?: React.ReactNode;
})> & {
    readonly type: WorkflowFieldType;
} & WorkflowFieldTypeStatics;
export {};
