import { InterviewStage } from "../interviewStage/InterviewStage";

export type DynamicTemplate = {
  createdAt: Date;
  id: string;
  interviewStages?: Array<InterviewStage>;
  prompt: string | null;
  updatedAt: Date;
};
