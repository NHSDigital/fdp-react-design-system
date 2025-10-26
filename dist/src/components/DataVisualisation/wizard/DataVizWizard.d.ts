import * as React from "react";
import type { LogicFile } from "../logic/wizardTypes";
type WizardLogic = LogicFile | any;
export interface DataVizWizardProps {
    logic: WizardLogic;
    wizardId?: string;
    storageKey?: string;
}
export declare const DataVizWizard: React.FC<DataVizWizardProps>;
export default DataVizWizard;
