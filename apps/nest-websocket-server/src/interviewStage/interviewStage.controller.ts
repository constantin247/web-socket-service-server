import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InterviewStageService } from "./interviewStage.service";
import { InterviewStageControllerBase } from "./base/interviewStage.controller.base";

@swagger.ApiTags("interviewStages")
@common.Controller("interviewStages")
export class InterviewStageController extends InterviewStageControllerBase {
  constructor(protected readonly service: InterviewStageService) {
    super(service);
  }
}
