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
 * @interface IAlbumUserEdit
 */
export interface IAlbumUserEdit {
    /**
     * 
     * @type {number}
     * @memberof IAlbumUserEdit
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof IAlbumUserEdit
     */
    'title': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof IAlbumUserEdit
     */
    'photos': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof IAlbumUserEdit
     */
    'created_on': string;
    /**
     * 
     * @type {boolean}
     * @memberof IAlbumUserEdit
     */
    'favorited'?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof IAlbumUserEdit
     */
    'removedPhotos'?: Array<string>;
}

