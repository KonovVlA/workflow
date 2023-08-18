import { EnforcementDocument } from "../../definitions";
import { EnforcementDocumentWithSettings, EnforcementDocumentSettings } from "../definitions";
export interface SplittedDocument {
    settings: EnforcementDocumentSettings;
    document: EnforcementDocument;
}
export declare function splitDocumentWithSettings(properties: EnforcementDocumentWithSettings): SplittedDocument;
