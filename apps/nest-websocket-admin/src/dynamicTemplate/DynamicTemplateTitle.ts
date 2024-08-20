import { DynamicTemplate as TDynamicTemplate } from "../api/dynamicTemplate/DynamicTemplate";

export const DYNAMICTEMPLATE_TITLE_FIELD = "prompt";

export const DynamicTemplateTitle = (record: TDynamicTemplate): string => {
  return record.prompt?.toString() || String(record.id);
};
