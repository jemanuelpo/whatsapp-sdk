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

import { InlineResponse2001MessagesRecords } from './inline-response2001-messages-records';
 /**
 * 
 *
 * @export
 * @interface InlineResponse2001Messages
 */
export interface InlineResponse2001Messages {

    /**
     * @type {number}
     * @memberof InlineResponse2001Messages
     */
    total?: number;

    /**
     * @type {number}
     * @memberof InlineResponse2001Messages
     */
    pages?: number;

    /**
     * @type {number}
     * @memberof InlineResponse2001Messages
     */
    currentPage?: number;

    /**
     * @type {Array<InlineResponse2001MessagesRecords>}
     * @memberof InlineResponse2001Messages
     */
    records?: Array<InlineResponse2001MessagesRecords>;
}
