import { PayloadAction } from '@reduxjs/toolkit';
export declare const flowSlice: import("@reduxjs/toolkit").Slice<import("../../..").Flow, {
    updatePid: (state: import("immer/dist/internal").WritableDraft<import("../../..").Flow>, { payload }: PayloadAction<string>) => void;
    updateUrl: (state: import("immer/dist/internal").WritableDraft<import("../../..").Flow>, { payload }: PayloadAction<string>) => void;
    updateFlow: (state: import("immer/dist/internal").WritableDraft<import("../../..").Flow>, { payload }: PayloadAction<string>) => void;
    updateState: (state: import("immer/dist/internal").WritableDraft<import("../../..").Flow>, { payload }: PayloadAction<string>) => void;
    updateResult: (state: import("immer/dist/internal").WritableDraft<import("../../..").Flow>, { payload }: PayloadAction<string>) => void;
    clearFlowState: () => import("../../..").Flow;
}, "flow">;
