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
import { InlineResponse2001MessagesKey } from './inline-response2001-messages-key';
import { InlineResponse2001MessagesMessage } from './inline-response2001-messages-message';
/**
*
*
* @export
* @interface InlineResponse2001MessagesRecords
*/
export interface InlineResponse2001MessagesRecords {
    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesRecords
     */
    id?: string;
    /**
     * @type {InlineResponse2001MessagesKey}
     * @memberof InlineResponse2001MessagesRecords
     */
    key?: InlineResponse2001MessagesKey;
    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesRecords
     */
    pushName?: string;
    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesRecords
     */
    messageType?: string;
    /**
     * @type {InlineResponse2001MessagesMessage}
     * @memberof InlineResponse2001MessagesRecords
     */
    message?: InlineResponse2001MessagesMessage;
}
