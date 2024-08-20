import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { DynamicTemplateTitle } from "../dynamicTemplate/DynamicTemplateTitle";

export const InterviewStageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="dynamicTemplate.id"
          reference="DynamicTemplate"
          label="dynamic_template"
        >
          <SelectInput optionText={DynamicTemplateTitle} />
        </ReferenceInput>
        <TextInput label="dynamic_template_id" source="dynamicTemplateId" />
        <BooleanInput label="is_question_limited" source="isQuestionLimited" />
        <BooleanInput label="is_time_limited" source="isTimeLimited" />
        <NumberInput
          step={1}
          label="number_of_questions"
          source="numberOfQuestions"
        />
        <NumberInput
          step={1}
          label="preperation_time"
          source="preperationTime"
        />
        <TextInput label="prompt_template" source="promptTemplate" />
        <NumberInput step={1} label="stage_number" source="stageNumber" />
      </SimpleForm>
    </Edit>
  );
};
