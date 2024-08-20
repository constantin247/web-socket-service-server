import { SortOrder } from "../../util/SortOrder";

export type InterviewOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  isCancelled?: SortOrder;
  startTime?: SortOrder;
  tokens?: SortOrder;
  updatedAt?: SortOrder;
};
