import { RequestParams } from "./RequestParams";
import { RequestBody } from "./RequestBody";
export interface RequestInstance {
    get: <P>(url: string, params?: RequestParams) => Promise<P>;
    post: <P, B = RequestBody>(url: string, body: B, params?: RequestParams) => Promise<P>;
}
