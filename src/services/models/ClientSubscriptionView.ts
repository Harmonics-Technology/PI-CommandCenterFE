/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddOnsView } from './AddOnsView';
import type { ClientView } from './ClientView';
import type { SubscriptionView } from './SubscriptionView';

export type ClientSubscriptionView = {
    id?: string;
    clientId?: string;
    client?: ClientView;
    freeTrialStartDate?: string | null;
    startDate?: string;
    duration?: number;
    baseSubscriptionId?: string;
    baseSubscription?: SubscriptionView;
    annualBilling?: boolean;
    status?: string | null;
    endDate?: string;
    totalAmount?: number;
    addOns?: Array<AddOnsView> | null;
};
