import { DynamicTemplateWhereUniqueInput } from "../dynamicTemplate/DynamicTemplateWhereUniqueInput";

export type InterviewStageCreateInput = {
  dynamicTemplate?: DynamicTemplateWhereUniqueInput | null;
  dynamicTemplateId?: string | null;
  isQuestionLimited?: boolean | null;
  isTimeLimited?: boolean | null;
  numberOfQuestions?: number | null;
  preperationTime?: number | null;
  promptTemplate?: string | null;
  stageNumber?: number | null;
};
