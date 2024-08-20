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
import { DynamicTemplateWhereUniqueInput } from "../../dynamicTemplate/base/DynamicTemplateWhereUniqueInput";

import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
  IsInt,
  Min,
  Max,
} from "class-validator";

import { Type } from "class-transformer";

@InputType()
class InterviewStageUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DynamicTemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DynamicTemplateWhereUniqueInput)
  @IsOptional()
  @Field(() => DynamicTemplateWhereUniqueInput, {
    nullable: true,
  })
  dynamicTemplate?: DynamicTemplateWhereUniqueInput | null;

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
  dynamicTemplateId?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isQuestionLimited?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isTimeLimited?: boolean | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  numberOfQuestions?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  preperationTime?: number | null;

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
  promptTemplate?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  stageNumber?: number | null;
}

export { InterviewStageUpdateInput as InterviewStageUpdateInput };
