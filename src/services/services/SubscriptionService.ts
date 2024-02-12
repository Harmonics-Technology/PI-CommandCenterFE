/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddCardResponseViewStandardResponse } from '../models/AddCardResponseViewStandardResponse';
import type { BooleanStandardResponse } from '../models/BooleanStandardResponse';
import type { CancelSubscriptionModel } from '../models/CancelSubscriptionModel';
import type { CardViewListStandardResponse } from '../models/CardViewListStandardResponse';
import type { ClientSubscriptionModel } from '../models/ClientSubscriptionModel';
import type { ClientSubscriptionViewPagedCollectionStandardResponse } from '../models/ClientSubscriptionViewPagedCollectionStandardResponse';
import type { ClientSubscriptionViewStandardResponse } from '../models/ClientSubscriptionViewStandardResponse';
import type { FeatureViewListStandardResponse } from '../models/FeatureViewListStandardResponse';
import type { LicenseUpdateModel } from '../models/LicenseUpdateModel';
import type { NewClientSubscriptionModel } from '../models/NewClientSubscriptionModel';
import type { PurchaseNewLicensePlanModel } from '../models/PurchaseNewLicensePlanModel';
import type { RenewSubscriptionModel } from '../models/RenewSubscriptionModel';
import type { SubscriptionModel } from '../models/SubscriptionModel';
import type { SubscriptionViewListStandardResponse } from '../models/SubscriptionViewListStandardResponse';
import type { SubscriptionViewStandardResponse } from '../models/SubscriptionViewStandardResponse';
import type { UpdateClientSubscriptionModel } from '../models/UpdateClientSubscriptionModel';
import type { UpdateDefaultPaymentMethod } from '../models/UpdateDefaultPaymentMethod';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubscriptionService {

    /**
     * @returns SubscriptionViewStandardResponse Success
     * @throws ApiError
     */
    public static createSubscription({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: SubscriptionModel,
}): CancelablePromise<SubscriptionViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/create-subscription',
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
     * @returns SubscriptionViewStandardResponse Success
     * @throws ApiError
     */
    public static updateSubscription({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: SubscriptionModel,
}): CancelablePromise<SubscriptionViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/update-subscription',
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
     * @returns SubscriptionViewListStandardResponse Success
     * @throws ApiError
     */
    public static listSubscription({
xApiKey,
}: {
xApiKey?: any,
}): CancelablePromise<SubscriptionViewListStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Subscription/subscriptions',
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
     * @returns FeatureViewListStandardResponse Success
     * @throws ApiError
     */
    public static listSubscriptionFeatures({
xApiKey,
}: {
xApiKey?: any,
}): CancelablePromise<FeatureViewListStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Subscription/subscription-features',
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
     * @returns SubscriptionViewStandardResponse Success
     * @throws ApiError
     */
    public static getSubscriptionById({
id,
xApiKey,
}: {
id: string,
xApiKey?: any,
}): CancelablePromise<SubscriptionViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Subscription/subscription/{id}',
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
    public static deleteSubscription({
id,
xApiKey,
}: {
id: string,
xApiKey?: any,
}): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/delete/{id}',
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
     * @returns ClientSubscriptionViewStandardResponse Success
     * @throws ApiError
     */
    public static createClientSubscription({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: ClientSubscriptionModel,
}): CancelablePromise<ClientSubscriptionViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/create-client-subscription',
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
     * @returns ClientSubscriptionViewStandardResponse Success
     * @throws ApiError
     */
    public static upgradeClientSubscription({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: UpdateClientSubscriptionModel,
}): CancelablePromise<ClientSubscriptionViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/upgrade-client-subscription',
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
    public static pauseClientSubscription({
subscriptionId,
pauseDuration,
xApiKey,
}: {
subscriptionId?: string,
pauseDuration?: number,
xApiKey?: any,
}): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/pause-subscription',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'subscriptionId': subscriptionId,
                'pauseDuration': pauseDuration,
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
    public static cancelClientSubscription({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: CancelSubscriptionModel,
}): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/cancel-subscription',
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
     * @returns AddCardResponseViewStandardResponse Success
     * @throws ApiError
     */
    public static addNewCardNew({
clientId,
xApiKey,
}: {
clientId?: string,
xApiKey?: any,
}): CancelablePromise<AddCardResponseViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/add-new-card-new',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'clientId': clientId,
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
    public static saveDefaultCard({
clientId,
paymentMethodId,
xApiKey,
}: {
clientId?: string,
paymentMethodId?: string,
xApiKey?: any,
}): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/set-default-card',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'clientId': clientId,
                'paymentMethodId': paymentMethodId,
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
    public static updateUserCardDetails({
clientId,
xApiKey,
requestBody,
}: {
clientId?: string,
xApiKey?: any,
requestBody?: UpdateDefaultPaymentMethod,
}): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/update-card',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'clientId': clientId,
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
    public static deleteCard({
clientId,
paymentMethodId,
xApiKey,
}: {
clientId?: string,
paymentMethodId?: string,
xApiKey?: any,
}): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/delete-card',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'clientId': clientId,
                'paymentMethodId': paymentMethodId,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ClientSubscriptionViewStandardResponse Success
     * @throws ApiError
     */
    public static createNewClientAndSubscription({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: NewClientSubscriptionModel,
}): CancelablePromise<ClientSubscriptionViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/create-new-client-subscription',
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
     * @returns ClientSubscriptionViewStandardResponse Success
     * @throws ApiError
     */
    public static getClientSubscriptionById({
id,
xApiKey,
}: {
id: string,
xApiKey?: any,
}): CancelablePromise<ClientSubscriptionViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Subscription/client-subscription/{id}',
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
     * @returns ClientSubscriptionViewStandardResponse Success
     * @throws ApiError
     */
    public static getCurrentClientSubscription({
clientId,
xApiKey,
}: {
clientId?: string,
xApiKey?: any,
}): CancelablePromise<ClientSubscriptionViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Subscription/client-current-subscription',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'clientId': clientId,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ClientSubscriptionViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listClientSubscriptions({
clientId,
offset,
limit,
search,
xApiKey,
}: {
clientId?: string,
offset?: number,
limit?: number,
search?: string,
xApiKey?: any,
}): CancelablePromise<ClientSubscriptionViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Subscription/client-subscription-history',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'clientId': clientId,
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

    /**
     * @returns ClientSubscriptionViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listCurrentClientSubscription({
offset,
limit,
search,
xApiKey,
}: {
offset?: number,
limit?: number,
search?: string,
xApiKey?: any,
}): CancelablePromise<ClientSubscriptionViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Subscription/client/current-subscriptions',
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

    /**
     * @returns BooleanStandardResponse Success
     * @throws ApiError
     */
    public static deactivateClientSubscription({
subscriptionId,
xApiKey,
}: {
subscriptionId: string,
xApiKey?: any,
}): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/deactivate-client-subscription/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
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
     * @returns ClientSubscriptionViewStandardResponse Success
     * @throws ApiError
     */
    public static renewClientSubscription({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: RenewSubscriptionModel,
}): CancelablePromise<ClientSubscriptionViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/renew-client-subscription',
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
     * @returns ClientSubscriptionViewStandardResponse Success
     * @throws ApiError
     */
    public static purchaseNewLicensePlan({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: PurchaseNewLicensePlanModel,
}): CancelablePromise<ClientSubscriptionViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/license/new-plan',
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
     * @returns ClientSubscriptionViewStandardResponse Success
     * @throws ApiError
     */
    public static addOrRemoveLicense({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: LicenseUpdateModel,
}): CancelablePromise<ClientSubscriptionViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/license/update-license-count',
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
     * @returns CardViewListStandardResponse Success
     * @throws ApiError
     */
    public static getUserCards({
clientId,
xApiKey,
}: {
clientId?: string,
xApiKey?: any,
}): CancelablePromise<CardViewListStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Subscription/user/cards',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'clientId': clientId,
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
    public static paymentSuccess({
clientId,
subscriptionPayment,
subscriptionId,
xApiKey,
}: {
clientId?: string,
subscriptionPayment?: boolean,
subscriptionId?: string,
xApiKey?: any,
}): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/payment-success',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'clientId': clientId,
                'subscriptionPayment': subscriptionPayment,
                'subscriptionId': subscriptionId,
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
    public static createNewClientAndSubscriptionBackRoom({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: NewClientSubscriptionModel,
}): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subscription/create-new-client-subscription-backroom',
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

}
