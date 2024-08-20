import { DynamicTemplate } from "../dynamicTemplate/DynamicTemplate";

export type InterviewStage = {
  createdAt: Date;
  dynamicTemplate?: DynamicTemplate | null;
  dynamicTemplateId: string | null;
  id: string;
  isQuestionLimited: boolean | null;
  isTimeLimited: boolean | null;
  numberOfQuestions: number | null;
  preperationTime: number | null;
  promptTemplate: string | null;
  stageNumber: number | null;
  updatedAt: Date;
};
