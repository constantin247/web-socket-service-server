import { Module } from "@nestjs/common";
import { InterviewStageModuleBase } from "./base/interviewStage.module.base";
import { InterviewStageService } from "./interviewStage.service";
import { InterviewStageController } from "./interviewStage.controller";
import { InterviewStageResolver } from "./interviewStage.resolver";

@Module({
  imports: [InterviewStageModuleBase],
  controllers: [InterviewStageController],
  providers: [InterviewStageService, InterviewStageResolver],
  exports: [InterviewStageService],
})
export class InterviewStageModule {}
