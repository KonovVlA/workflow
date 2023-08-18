import { PayloadAction } from '@reduxjs/toolkit';
import { ReferencesState, ReferenceWithId } from "./types";
export declare const referencesSlice: import("@reduxjs/toolkit").Slice<import("../../..").References, {
    updateReferences: (state: import("immer/dist/internal").WritableDraft<import("../../..").References>, { payload }: PayloadAction<ReferencesState>) => import("../../..").References;
    updateReference: (state: import("immer/dist/internal").WritableDraft<import("../../..").References>, { payload }: PayloadAction<ReferenceWithId>) => void;
    clearReferencesState: () => import("../../..").References;
}, "references">;
