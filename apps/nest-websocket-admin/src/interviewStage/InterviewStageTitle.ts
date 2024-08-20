import { InterviewStage as TInterviewStage } from "../api/interviewStage/InterviewStage";

export const INTERVIEWSTAGE_TITLE_FIELD = "dynamicTemplateId";

export const InterviewStageTitle = (record: TInterviewStage): string => {
  return record.dynamicTemplateId?.toString() || String(record.id);
};
