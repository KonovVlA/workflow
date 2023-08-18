import { RootState } from "../..";
import { RequestInstance } from "../../../utils/createRequest/definitions/RequestInstance";
import { Schema } from "../../../definitions";
export interface CallStartParams {
    request: RequestInstance;
    name: string;
}
export declare const callStart: import("@reduxjs/toolkit").AsyncThunk<Schema, CallStartParams, {
    state: RootState;
}>;
