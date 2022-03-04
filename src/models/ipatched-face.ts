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


import { IPerson } from './iperson';

/**
 * 
 * @export
 * @interface IPatchedFace
 */
export interface IPatchedFace {
    /**
     * 
     * @type {number}
     * @memberof IPatchedFace
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof IPatchedFace
     */
    'face_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof IPatchedFace
     */
    'photo_id'?: string | null;
    /**
     * 
     * @type {IPerson}
     * @memberof IPatchedFace
     */
    'person'?: IPerson;
    /**
     * 
     * @type {number}
     * @memberof IPatchedFace
     */
    'person_id'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof IPatchedFace
     */
    'person_label_is_inferred'?: boolean | null;
}

