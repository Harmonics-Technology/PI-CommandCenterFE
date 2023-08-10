/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientView } from './ClientView';
import type { SubscriptionView } from './SubscriptionView';

export type ClientSubscriptionView = {
    id?: string;
    clientId?: string;
    client?: ClientView;
    freeTrialStartDate?: string | null;
    startDate?: string;
    duration?: number;
    subscriptionId?: string;
    subscription?: SubscriptionView;
    annualBilling?: boolean;
    status?: string | null;
    endDate?: string;
    totalAmount?: number;
    isCanceled?: boolean;
    cancelationReason?: string | null;
    clientSecret?: string | null;
};
