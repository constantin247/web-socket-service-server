import * as graphql from "@nestjs/graphql";
import { InterviewStageResolverBase } from "./base/interviewStage.resolver.base";
import { InterviewStage } from "./base/InterviewStage";
import { InterviewStageService } from "./interviewStage.service";

@graphql.Resolver(() => InterviewStage)
export class InterviewStageResolver extends InterviewStageResolverBase {
  constructor(protected readonly service: InterviewStageService) {
    super(service);
  }
}
