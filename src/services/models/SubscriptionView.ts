/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubscriptionType } from './SubscriptionType';

export type SubscriptionView = {
    id?: string;
    subscriptionTypeId?: number;
    subscriptionType?: SubscriptionType;
    name?: string | null;
    description?: string | null;
    recommendedFor?: string | null;
    features?: string | null;
    monthlyAmount?: number;
    monthlyDiscount?: number | null;
    yearlyAmount?: number;
    yearlyDiscount?: number | null;
    totalMonthlyAmount?: number;
    totalYearlyAmount?: number;
    addonAmount?: number | null;
    hasFreeTrial?: boolean;
    freeTrialDuration?: number | null;
    discountType?: string | null;
};
