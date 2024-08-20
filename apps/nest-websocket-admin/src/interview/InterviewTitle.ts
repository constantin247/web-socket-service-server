import { Interview as TInterview } from "../api/interview/Interview";

export const INTERVIEW_TITLE_FIELD = "tokens";

export const InterviewTitle = (record: TInterview): string => {
  return record.tokens?.toString() || String(record.id);
};
