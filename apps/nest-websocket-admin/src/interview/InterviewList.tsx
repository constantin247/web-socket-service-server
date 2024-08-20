import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const InterviewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Interviews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="end_time" source="endTime" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_cancelled" source="isCancelled" />
        <TextField label="start_time" source="startTime" />
        <TextField label="tokens" source="tokens" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
