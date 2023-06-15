/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddOnsModel } from './AddOnsModel';

export type NewClientSubscriptionModel = {
    companyName?: string | null;
    name?: string | null;
    companyEmail?: string | null;
    email?: string | null;
    companyPhoneNumber?: string | null;
    phoneNumber?: string | null;
    companyAddress?: string | null;
    address?: string | null;
    freeTrialStartDate?: string | null;
    startDate?: string;
    duration?: number;
    annualBilling?: boolean;
    baseSubscriptionId?: string;
    addOns?: Array<AddOnsModel> | null;
    endDate?: string;
    totalAmount?: number;
};
