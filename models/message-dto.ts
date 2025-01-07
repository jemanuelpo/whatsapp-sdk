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

import { MessageContextInfoDto } from './message-context-info-dto';
import { TemplateMessageDto } from './template-message-dto';
 /**
 * 
 *
 * @export
 * @interface MessageDto
 */
export interface MessageDto {

    /**
     * @type {string}
     * @memberof MessageDto
     */
    conversation?: string | null;

    /**
     * @type {TemplateMessageDto}
     * @memberof MessageDto
     */
    templateMessage?: TemplateMessageDto;

    /**
     * @type {MessageContextInfoDto}
     * @memberof MessageDto
     */
    messageContextInfo?: MessageContextInfoDto;
}
