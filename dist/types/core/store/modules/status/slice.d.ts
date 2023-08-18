import { PayloadAction } from '@reduxjs/toolkit';
import { Error, EventName } from "../../../definitions";
export declare const statusSlice: import("@reduxjs/toolkit").Slice<import("core/definitions").AppStatus, {
    updateAppError: (state: import("immer/dist/internal").WritableDraft<import("core/definitions").AppStatus>, { payload }: PayloadAction<Error>) => void;
    updateCompleted: (state: import("immer/dist/internal").WritableDraft<import("core/definitions").AppStatus>, { payload }: PayloadAction<boolean>) => void;
    updateEventLoading: (state: import("immer/dist/internal").WritableDraft<import("core/definitions").AppStatus>, { payload }: {
        payload: {
            isLoading: boolean;
            name: EventName;
        };
        type: string;
    }) => void;
    updateAppLoading: (state: import("immer/dist/internal").WritableDraft<import("core/definitions").AppStatus>, { payload }: PayloadAction<boolean>) => void;
    clearStatusState: () => import("core/definitions").AppStatus;
}, "status">;
