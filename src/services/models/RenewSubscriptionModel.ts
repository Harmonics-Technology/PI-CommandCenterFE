/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddOnsModel } from './AddOnsModel';

export type RenewSubscriptionModel = {
    clientId?: string;
    subscriptionId?: string;
    startDate?: string;
    duration?: number;
    addOns?: Array<AddOnsModel> | null;
};
