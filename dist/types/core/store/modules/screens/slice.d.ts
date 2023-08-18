import { PayloadAction } from '@reduxjs/toolkit';
import { ScreensState } from "./types";
export declare const screensSlice: import("@reduxjs/toolkit").Slice<ScreensState, {
    updateScreens: (state: import("immer/dist/internal").WritableDraft<import("../../..").Screen>[], { payload }: PayloadAction<ScreensState>) => ScreensState;
    clearScreensState: () => ScreensState;
}, "screens">;
