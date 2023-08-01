/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubscriptionModel = {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    recommendedFor?: string | null;
    features?: string | null;
    monthlyAmount?: number;
    monthlyDiscount?: number | null;
    yearlyAmount?: number;
    yearlyDiscount?: number | null;
    totalAmount?: number;
    hasFreeTrial?: boolean;
    freeTrialDuration?: number | null;
    totalMonthlyAmount?: number;
    totalYearlyAmount?: number;
    discountType?: string | null;
};
