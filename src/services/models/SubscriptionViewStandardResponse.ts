/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HttpStatusCode } from './HttpStatusCode';
import type { SubscriptionView } from './SubscriptionView';

export type SubscriptionViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: SubscriptionView;
    statusCode?: HttpStatusCode;
    errors?: any;
};
