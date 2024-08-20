import { InterviewStageCreateNestedManyWithoutDynamicTemplatesInput } from "./InterviewStageCreateNestedManyWithoutDynamicTemplatesInput";

export type DynamicTemplateCreateInput = {
  interviewStages?: InterviewStageCreateNestedManyWithoutDynamicTemplatesInput;
  prompt?: string | null;
};
