/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HttpStatusCode } from './HttpStatusCode';
import type { SubscriptionView } from './SubscriptionView';

export type SubscriptionViewListStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<SubscriptionView> | null;
    statusCode?: HttpStatusCode;
    errors?: any;
};
