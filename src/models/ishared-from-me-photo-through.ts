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


import { ISimpleUser } from './isimple-user';

/**
 * 
 * @export
 * @interface ISharedFromMePhotoThrough
 */
export interface ISharedFromMePhotoThrough {
    /**
     * 
     * @type {number}
     * @memberof ISharedFromMePhotoThrough
     */
    'user_id': number;
    /**
     * 
     * @type {ISimpleUser}
     * @memberof ISharedFromMePhotoThrough
     */
    'user': ISimpleUser;
    /**
     * 
     * @type {string}
     * @memberof ISharedFromMePhotoThrough
     */
    'photo': string;
}

