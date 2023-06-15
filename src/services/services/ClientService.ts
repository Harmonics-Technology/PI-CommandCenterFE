/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanStandardResponse } from '../models/BooleanStandardResponse';
import type { ClientModel } from '../models/ClientModel';
import type { ClientViewPagedCollectionStandardResponse } from '../models/ClientViewPagedCollectionStandardResponse';
import type { ClientViewStandardResponse } from '../models/ClientViewStandardResponse';
import type { UpdateClientModel } from '../models/UpdateClientModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ClientService {

    /**
     * @returns ClientViewStandardResponse Success
     * @throws ApiError
     */
    public static addClient({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: ClientModel,
}): CancelablePromise<ClientViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Client/create-client',
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
     * @returns ClientViewStandardResponse Success
     * @throws ApiError
     */
    public static updateClient({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: UpdateClientModel,
}): CancelablePromise<ClientViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Client/update',
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
     * @returns ClientViewStandardResponse Success
     * @throws ApiError
     */
    public static getClientById({
id,
xApiKey,
}: {
id: string,
xApiKey?: any,
}): CancelablePromise<ClientViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Client/client/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-API-KEY': xApiKey,
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
    public static activateClient({
id,
xApiKey,
}: {
id: string,
xApiKey?: any,
}): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Client/activate/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-API-KEY': xApiKey,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ClientViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listClients({
offset,
limit,
search,
xApiKey,
}: {
offset?: number,
limit?: number,
search?: string,
xApiKey?: any,
}): CancelablePromise<ClientViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Client/clients',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

}
