/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientViewPagedCollection } from './ClientViewPagedCollection';
import type { HttpStatusCode } from './HttpStatusCode';

export type ClientViewPagedCollectionStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ClientViewPagedCollection;
    statusCode?: HttpStatusCode;
    errors?: any;
};
