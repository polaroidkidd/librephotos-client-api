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


import { IPhotoEdit } from './iphoto-edit';

/**
 * 
 * @export
 * @interface IPaginatedPhotoEditList
 */
export interface IPaginatedPhotoEditList {
    /**
     * 
     * @type {number}
     * @memberof IPaginatedPhotoEditList
     */
    'count'?: number;
    /**
     * 
     * @type {string}
     * @memberof IPaginatedPhotoEditList
     */
    'next'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IPaginatedPhotoEditList
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<IPhotoEdit>}
     * @memberof IPaginatedPhotoEditList
     */
    'results'?: Array<IPhotoEdit>;
}

