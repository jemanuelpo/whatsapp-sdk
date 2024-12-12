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

import { InlineResponse2001MessagesMessageImageMessageContextInfo } from './inline-response2001-messages-message-image-message-context-info';
 /**
 * 
 *
 * @export
 * @interface InlineResponse2001MessagesMessageImageMessage
 */
export interface InlineResponse2001MessagesMessageImageMessage {

    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageImageMessage
     */
    url?: string;

    /**
     * @type {number}
     * @memberof InlineResponse2001MessagesMessageImageMessage
     */
    width?: number;

    /**
     * @type {number}
     * @memberof InlineResponse2001MessagesMessageImageMessage
     */
    height?: number;

    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageImageMessage
     */
    caption?: string;

    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageImageMessage
     */
    mediaKey?: string;

    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageImageMessage
     */
    mimetype?: string;

    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageImageMessage
     */
    directPath?: string;

    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageImageMessage
     */
    fileLength?: string;

    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageImageMessage
     */
    fileSha256?: string;

    /**
     * @type {InlineResponse2001MessagesMessageImageMessageContextInfo}
     * @memberof InlineResponse2001MessagesMessageImageMessage
     */
    contextInfo?: InlineResponse2001MessagesMessageImageMessageContextInfo;

    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageImageMessage
     */
    fileEncSha256?: string;

    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageImageMessage
     */
    jpegThumbnail?: string;
}
