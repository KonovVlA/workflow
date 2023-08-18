export interface Message {
    code?: string;
    text: string;
    title: string;
    type: MessageType;
}
export declare type MessageType = 'error' | 'warning' | 'info' | 'validation';
