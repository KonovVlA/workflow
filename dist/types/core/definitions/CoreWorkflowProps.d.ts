import { Config, StrategiesFns, Error, WidgetComponent } from "./";
export interface CoreWorkflowProps {
    config?: Config;
    strategies?: StrategiesFns;
    customWidgets?: Record<string, WidgetComponent>;
    url: string;
    name: string;
    onComplete?: () => void;
    onError?: (error: Error) => void;
}
