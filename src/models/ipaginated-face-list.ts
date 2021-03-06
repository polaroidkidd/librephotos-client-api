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


import { IFace } from './iface';

/**
 * 
 * @export
 * @interface IPaginatedFaceList
 */
export interface IPaginatedFaceList {
    /**
     * 
     * @type {number}
     * @memberof IPaginatedFaceList
     */
    'count'?: number;
    /**
     * 
     * @type {string}
     * @memberof IPaginatedFaceList
     */
    'next'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IPaginatedFaceList
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<IFace>}
     * @memberof IPaginatedFaceList
     */
    'results'?: Array<IFace>;
}

