import { Module } from "@nestjs/common";
import { DynamicTemplateModuleBase } from "./base/dynamicTemplate.module.base";
import { DynamicTemplateService } from "./dynamicTemplate.service";
import { DynamicTemplateController } from "./dynamicTemplate.controller";
import { DynamicTemplateResolver } from "./dynamicTemplate.resolver";

@Module({
  imports: [DynamicTemplateModuleBase],
  controllers: [DynamicTemplateController],
  providers: [DynamicTemplateService, DynamicTemplateResolver],
  exports: [DynamicTemplateService],
})
export class DynamicTemplateModule {}
