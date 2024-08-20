/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InterviewStageUpdateManyWithoutDynamicTemplatesInput } from "./InterviewStageUpdateManyWithoutDynamicTemplatesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DynamicTemplateUpdateInput {
  @ApiProperty({
    required: false,
    type: () => InterviewStageUpdateManyWithoutDynamicTemplatesInput,
  })
  @ValidateNested()
  @Type(() => InterviewStageUpdateManyWithoutDynamicTemplatesInput)
  @IsOptional()
  @Field(() => InterviewStageUpdateManyWithoutDynamicTemplatesInput, {
    nullable: true,
  })
  interviewStages?: InterviewStageUpdateManyWithoutDynamicTemplatesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  prompt?: string | null;
}

export { DynamicTemplateUpdateInput as DynamicTemplateUpdateInput };
