/* tslint:disable */
/* eslint-disable */
/**
 * LibrePhotos
 * Your project description
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface IFaceList
 */
export interface IFaceList {
    /**
     * 
     * @type {number}
     * @memberof IFaceList
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof IFaceList
     */
    'image'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IFaceList
     */
    'photo'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof IFaceList
     */
    'person': number;
    /**
     * 
     * @type {number}
     * @memberof IFaceList
     */
    'person_label_probability'?: number;
    /**
     * 
     * @type {string}
     * @memberof IFaceList
     */
    'person_name': string;
}

