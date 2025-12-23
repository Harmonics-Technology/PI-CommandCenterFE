/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HttpStatusCode } from './HttpStatusCode';
import type { ReactivateSubscriptionResponse } from './ReactivateSubscriptionResponse';

export type ReactivateSubscriptionResponseStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ReactivateSubscriptionResponse;
    statusCode?: HttpStatusCode;
    errors?: any;
};
