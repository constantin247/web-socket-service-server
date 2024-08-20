import { DynamicTemplateWhereInput } from "./DynamicTemplateWhereInput";
import { DynamicTemplateOrderByInput } from "./DynamicTemplateOrderByInput";

export type DynamicTemplateFindManyArgs = {
  where?: DynamicTemplateWhereInput;
  orderBy?: Array<DynamicTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
