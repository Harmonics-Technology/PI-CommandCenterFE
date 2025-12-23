/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookDemoModel } from '../models/BookDemoModel';
import type { BooleanStandardResponse } from '../models/BooleanStandardResponse';
import type { ContactMessageModel } from '../models/ContactMessageModel';
import type { LogFileInfoListStandardResponse } from '../models/LogFileInfoListStandardResponse';
import type { MailchimpModel } from '../models/MailchimpModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UtilityService {

    /**
     * @returns BooleanStandardResponse Success
     * @throws ApiError
     */
    public static updateNewFeaturesForProdAdmin({
subId,
xApiKey,
}: {
subId?: string,
xApiKey?: any,
}): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Utility/migrate-new-features',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'subId': subId,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns BooleanStandardResponse Success
     * @throws ApiError
     */
    public static addContactToMaailchimp({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: MailchimpModel,
}): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Utility/add-to-contact',
            headers: {
                'X-API-KEY': xApiKey,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns BooleanStandardResponse Success
     * @throws ApiError
     */
    public static sendContactMessage({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: ContactMessageModel,
}): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Utility/contact-us',
            headers: {
                'X-API-KEY': xApiKey,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns BooleanStandardResponse Success
     * @throws ApiError
     */
    public static bookDemo({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: BookDemoModel,
}): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Utility/book-demo',
            headers: {
                'X-API-KEY': xApiKey,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiUtilityDownloadLogsFiles({
date,
fileName,
xApiKey,
}: {
date?: string,
fileName?: string,
xApiKey?: any,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Utility/download-logs-files',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'date': date,
                'fileName': fileName,
            },
        });
    }

    /**
     * @returns LogFileInfoListStandardResponse Success
     * @throws ApiError
     */
    public static getApiUtilityListLogFiles({
date,
fileName,
xApiKey,
}: {
date?: string,
fileName?: string,
xApiKey?: any,
}): CancelablePromise<LogFileInfoListStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Utility/list-log-files',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'date': date,
                'fileName': fileName,
            },
        });
    }

}
