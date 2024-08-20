import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { InterviewStageTitle } from "../interviewStage/InterviewStageTitle";

export const DynamicTemplateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="interviewStages"
          reference="InterviewStage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InterviewStageTitle} />
        </ReferenceArrayInput>
        <TextInput label="prompt" source="prompt" />
      </SimpleForm>
    </Create>
  );
};
