import { StringFilter } from "../../util/StringFilter";
import { InterviewStageListRelationFilter } from "../interviewStage/InterviewStageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DynamicTemplateWhereInput = {
  id?: StringFilter;
  interviewStages?: InterviewStageListRelationFilter;
  prompt?: StringNullableFilter;
};
