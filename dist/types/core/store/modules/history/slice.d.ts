import { PayloadAction } from '@reduxjs/toolkit';
import { HistoryState } from "./types";
export declare const historySlice: import("@reduxjs/toolkit").Slice<HistoryState, {
    updateHistory: (state: import("immer/dist/internal").WritableDraft<import("../../..").History>[], { payload }: PayloadAction<HistoryState>) => HistoryState;
    clearHistoryState: () => HistoryState;
}, "history">;
