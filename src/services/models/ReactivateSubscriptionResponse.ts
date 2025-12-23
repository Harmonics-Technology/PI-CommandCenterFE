/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ReactivateSubscriptionResponse = {
    clientSubscriptionId?: string;
    planName?: string | null;
    numberOfLicenses?: number;
    monthlyAmount?: number;
    reactivationDate?: string;
    nextBillingDate?: string;
    previousStatus?: string | null;
    currentStatus?: string | null;
    requiresPayment?: boolean;
    clientSecret?: string | null;
    paymentStatus?: string | null;
    amountDueToday?: number;
    licenseAdjusted?: boolean;
    previousLicenseCount?: number | null;
};
