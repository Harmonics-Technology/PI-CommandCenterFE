/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ClientSubscriptionModel = {
    id?: string | null;
    clientId?: string;
    freeTrialStartDate?: string | null;
    startDate?: string;
    endDate?: string;
    duration?: number;
    subscriptionId?: string;
    annualBilling?: boolean;
    totalAmount?: number;
};
