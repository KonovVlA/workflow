import { RootState } from "../..";
import { RequestInstance } from "../../../utils/createRequest/definitions/RequestInstance";
import { EventName, FieldCombinedValue } from "../../../definitions";
import { Schema } from "../../../definitions";
export interface CallEventParams {
    request: RequestInstance;
    name: EventName;
    fields: Record<string, FieldCombinedValue>;
}
export interface CallEventBody {
    fields: Record<string, FieldCombinedValue>;
}
export declare const callEvent: import("@reduxjs/toolkit").AsyncThunk<Schema, CallEventParams, {
    state: RootState;
}>;
