import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DynamicTemplateServiceBase } from "./base/dynamicTemplate.service.base";

@Injectable()
export class DynamicTemplateService extends DynamicTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
