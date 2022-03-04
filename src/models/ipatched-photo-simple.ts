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
 * @interface IPatchedPhotoSimple
 */
export interface IPatchedPhotoSimple {
    /**
     * 
     * @type {string}
     * @memberof IPatchedPhotoSimple
     */
    'square_thumbnail'?: string;
    /**
     * 
     * @type {string}
     * @memberof IPatchedPhotoSimple
     */
    'image_hash'?: string;
    /**
     * 
     * @type {string}
     * @memberof IPatchedPhotoSimple
     */
    'exif_timestamp'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof IPatchedPhotoSimple
     */
    'exif_gps_lat'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof IPatchedPhotoSimple
     */
    'exif_gps_lon'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof IPatchedPhotoSimple
     */
    'rating'?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IPatchedPhotoSimple
     */
    'geolocation_json'?: { [key: string]: any; } | null;
    /**
     * 
     * @type {boolean}
     * @memberof IPatchedPhotoSimple
     */
    'public'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IPatchedPhotoSimple
     */
    'video'?: boolean;
}
