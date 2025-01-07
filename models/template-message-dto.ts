/* tslint:disable */
/* eslint-disable */
/**
 * whatsapp-api
 * Endpoints de whatsapp-api
 *
 * OpenAPI spec version: 1.0
 * Contact: libgot@libgot.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { HydratedFourRowTemplateDto } from './hydrated-four-row-template-dto';
import { HydratedTemplateDto } from './hydrated-template-dto';
 /**
 * 
 *
 * @export
 * @interface TemplateMessageDto
 */
export interface TemplateMessageDto {

    /**
     * @type {HydratedTemplateDto}
     * @memberof TemplateMessageDto
     */
    hydratedTemplate?: HydratedTemplateDto;

    /**
     * @type {HydratedFourRowTemplateDto}
     * @memberof TemplateMessageDto
     */
    hydratedFourRowTemplate?: HydratedFourRowTemplateDto;
}
