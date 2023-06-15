/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientSubscriptionView } from './ClientSubscriptionView';
import type { HttpStatusCode } from './HttpStatusCode';

export type ClientSubscriptionViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ClientSubscriptionView;
    statusCode?: HttpStatusCode;
    errors?: any;
};
