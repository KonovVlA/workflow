import { WorkflowFieldComponentProps, WorkflowFieldComponent } from "../../../../..";
declare type DefaultPhoneFieldProps = Pick<WorkflowFieldComponentProps, 'placeholder'>;
export declare type PhoneFieldProps = DefaultPhoneFieldProps & Omit<WorkflowFieldComponentProps, 'placeholder'>;
export declare const PhoneField: WorkflowFieldComponent;
export {};
