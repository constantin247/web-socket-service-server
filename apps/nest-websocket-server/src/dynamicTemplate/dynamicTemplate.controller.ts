import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DynamicTemplateService } from "./dynamicTemplate.service";
import { DynamicTemplateControllerBase } from "./base/dynamicTemplate.controller.base";

@swagger.ApiTags("dynamicTemplates")
@common.Controller("dynamicTemplates")
export class DynamicTemplateController extends DynamicTemplateControllerBase {
  constructor(protected readonly service: DynamicTemplateService) {
    super(service);
  }
}
