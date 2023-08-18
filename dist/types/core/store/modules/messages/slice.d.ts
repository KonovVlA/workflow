import { PayloadAction } from '@reduxjs/toolkit';
import { MessagesState } from "./types";
export declare const messagesSlice: import("@reduxjs/toolkit").Slice<MessagesState, {
    updateMessages: (state: import("immer/dist/internal").WritableDraft<import("../../..").Message>[], { payload }: PayloadAction<MessagesState>) => MessagesState;
    clearMessagesState: () => MessagesState;
}, "messages">;
