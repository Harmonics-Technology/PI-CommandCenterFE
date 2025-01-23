/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HttpStatusCode } from './HttpStatusCode';
import type { InvoicePaidEventLogViewPagedCollection } from './InvoicePaidEventLogViewPagedCollection';

export type InvoicePaidEventLogViewPagedCollectionStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: InvoicePaidEventLogViewPagedCollection;
    statusCode?: HttpStatusCode;
    errors?: any;
};
