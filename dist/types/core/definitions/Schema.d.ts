import { History, Screen, Message, References } from "./";
export interface Schema {
    success: boolean;
    body: Body;
    messages?: Message[];
    error?: Error;
}
export interface Error {
    code: string;
    system: string;
    title: string;
    text: string;
    uuid: string;
}
export interface Body {
    flow: string;
    pid: string;
    result: string;
    state: string;
    history: History[];
    output?: Output;
}
export interface Output {
    transition: string;
    references: References;
    screens: Screen[];
}
