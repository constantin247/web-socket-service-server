export type Interview = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  isCancelled: boolean | null;
  startTime: Date | null;
  tokens: string | null;
  updatedAt: Date;
};
