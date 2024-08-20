import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InterviewStageServiceBase } from "./base/interviewStage.service.base";

@Injectable()
export class InterviewStageService extends InterviewStageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
