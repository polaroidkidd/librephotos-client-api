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


import { IAlbumPlaceList } from './ialbum-place-list';

/**
 * 
 * @export
 * @interface IPaginatedAlbumPlaceListList
 */
export interface IPaginatedAlbumPlaceListList {
    /**
     * 
     * @type {number}
     * @memberof IPaginatedAlbumPlaceListList
     */
    'count'?: number;
    /**
     * 
     * @type {string}
     * @memberof IPaginatedAlbumPlaceListList
     */
    'next'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IPaginatedAlbumPlaceListList
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<IAlbumPlaceList>}
     * @memberof IPaginatedAlbumPlaceListList
     */
    'results'?: Array<IAlbumPlaceList>;
}

