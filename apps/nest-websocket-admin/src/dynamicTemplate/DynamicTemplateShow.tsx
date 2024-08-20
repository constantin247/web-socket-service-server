import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { DYNAMICTEMPLATE_TITLE_FIELD } from "./DynamicTemplateTitle";

export const DynamicTemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="prompt" source="prompt" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="InterviewStage"
          target="dynamicTemplateId"
          label="InterviewStages"
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
            <BooleanField
              label="is_question_limited"
              source="isQuestionLimited"
            />
            <BooleanField label="is_time_limited" source="isTimeLimited" />
            <TextField label="number_of_questions" source="numberOfQuestions" />
            <TextField label="preperation_time" source="preperationTime" />
            <TextField label="prompt_template" source="promptTemplate" />
            <TextField label="stage_number" source="stageNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
