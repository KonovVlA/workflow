import { EventName, Error } from "..";
export interface AppStatus {
    appError: Error;
    completed: boolean;
    isEventLoading: boolean;
    loadingEventName: EventName;
    isAppLoading: boolean;
}
