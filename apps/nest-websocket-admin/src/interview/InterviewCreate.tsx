import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const InterviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="end_time" source="endTime" />
        <BooleanInput label="is_cancelled" source="isCancelled" />
        <DateTimeInput label="start_time" source="startTime" />
        <TextInput label="tokens" source="tokens" />
      </SimpleForm>
    </Create>
  );
};
