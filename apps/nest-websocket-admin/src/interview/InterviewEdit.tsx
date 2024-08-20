import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const InterviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="end_time" source="endTime" />
        <BooleanInput label="is_cancelled" source="isCancelled" />
        <DateTimeInput label="start_time" source="startTime" />
        <TextInput label="tokens" source="tokens" />
      </SimpleForm>
    </Edit>
  );
};
