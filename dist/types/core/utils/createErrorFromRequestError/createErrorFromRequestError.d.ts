import { AxiosError } from 'axios';
import { Error } from "../..";
export declare function createErrorFromRequestError(error: AxiosError): Error;
