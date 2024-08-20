import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InterviewWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  isCancelled?: BooleanNullableFilter;
  startTime?: DateTimeNullableFilter;
  tokens?: StringNullableFilter;
};
