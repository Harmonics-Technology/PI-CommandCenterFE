/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StripeWebhookService {

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static postApiStripeWebhookWebhook({
xApiKey,
}: {
xApiKey?: any,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/StripeWebhook/webhook',
            headers: {
                'X-API-KEY': xApiKey,
            },
        });
    }

}
