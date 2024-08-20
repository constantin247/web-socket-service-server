import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const InterviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="end_time" source="endTime" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_cancelled" source="isCancelled" />
        <TextField label="start_time" source="startTime" />
        <TextField label="tokens" source="tokens" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
