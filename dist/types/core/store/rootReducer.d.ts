export declare type RootState = ReturnType<typeof rootReducer>;
export declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    flow: import("..").Flow;
    history: import("./modules/history").HistoryState;
    references: import("..").References;
    screens: import("./modules/screens").ScreensState;
    status: import("..").AppStatus;
    messages: import("./modules/messages").MessagesState;
}>, import("redux").AnyAction>;
