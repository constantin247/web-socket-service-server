import { InterviewStageWhereInput } from "./InterviewStageWhereInput";
import { InterviewStageOrderByInput } from "./InterviewStageOrderByInput";

export type InterviewStageFindManyArgs = {
  where?: InterviewStageWhereInput;
  orderBy?: Array<InterviewStageOrderByInput>;
  skip?: number;
  take?: number;
};
