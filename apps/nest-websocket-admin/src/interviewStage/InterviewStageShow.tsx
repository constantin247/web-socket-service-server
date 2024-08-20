import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";

import { DYNAMICTEMPLATE_TITLE_FIELD } from "../dynamicTemplate/DynamicTemplateTitle";

export const InterviewStageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
