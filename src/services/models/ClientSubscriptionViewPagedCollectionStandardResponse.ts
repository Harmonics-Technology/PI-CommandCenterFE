/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientSubscriptionViewPagedCollection } from './ClientSubscriptionViewPagedCollection';
import type { HttpStatusCode } from './HttpStatusCode';

export type ClientSubscriptionViewPagedCollectionStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ClientSubscriptionViewPagedCollection;
    statusCode?: HttpStatusCode;
    errors?: any;
};
