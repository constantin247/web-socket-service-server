import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { DYNAMICTEMPLATE_TITLE_FIELD } from "../dynamicTemplate/DynamicTemplateTitle";

export const InterviewStageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"InterviewStages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="dynamic_template"
          source="dynamictemplate.id"
          reference="DynamicTemplate"
        >
          <TextField source={DYNAMICTEMPLATE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="dynamic_template_id" source="dynamicTemplateId" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_question_limited" source="isQuestionLimited" />
        <BooleanField label="is_time_limited" source="isTimeLimited" />
        <TextField label="number_of_questions" source="numberOfQuestions" />
        <TextField label="preperation_time" source="preperationTime" />
        <TextField label="prompt_template" source="promptTemplate" />
        <TextField label="stage_number" source="stageNumber" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
