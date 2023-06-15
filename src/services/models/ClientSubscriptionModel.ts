/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddOnsModel } from './AddOnsModel';

export type ClientSubscriptionModel = {
    id?: string | null;
    clientId?: string;
    freeTrialStartDate?: string | null;
    startDate?: string;
    endDate?: string;
    duration?: number;
    baseSubscriptionId?: string;
    annualBilling?: boolean;
    addOns?: Array<AddOnsModel> | null;
    totalAmount?: number;
};
