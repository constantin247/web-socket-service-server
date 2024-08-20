import { DynamicTemplateWhereUniqueInput } from "../dynamicTemplate/DynamicTemplateWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InterviewStageWhereInput = {
  dynamicTemplate?: DynamicTemplateWhereUniqueInput;
  dynamicTemplateId?: StringNullableFilter;
  id?: StringFilter;
  isQuestionLimited?: BooleanNullableFilter;
  isTimeLimited?: BooleanNullableFilter;
  numberOfQuestions?: IntNullableFilter;
  preperationTime?: IntNullableFilter;
  promptTemplate?: StringNullableFilter;
  stageNumber?: IntNullableFilter;
};
