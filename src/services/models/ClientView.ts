/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubscriptionView } from './SubscriptionView';

export type ClientView = {
    id?: string;
    companyName?: string | null;
    name?: string | null;
    companyEmail?: string | null;
    email?: string | null;
    companyPhoneNumber?: string | null;
    phoneNumber?: string | null;
    address?: string | null;
    companyAddress?: string | null;
    startDate?: string;
    durationInMonths?: number;
    subscriptionId?: string;
    subscription?: SubscriptionView;
    isAnnualBilling?: boolean;
    subscriptionStatus?: string | null;
    dateCreated?: string;
    isActive?: boolean;
    country?: string | null;
};
