import * as graphql from "@nestjs/graphql";
import { DynamicTemplateResolverBase } from "./base/dynamicTemplate.resolver.base";
import { DynamicTemplate } from "./base/DynamicTemplate";
import { DynamicTemplateService } from "./dynamicTemplate.service";

@graphql.Resolver(() => DynamicTemplate)
export class DynamicTemplateResolver extends DynamicTemplateResolverBase {
  constructor(protected readonly service: DynamicTemplateService) {
    super(service);
  }
}
