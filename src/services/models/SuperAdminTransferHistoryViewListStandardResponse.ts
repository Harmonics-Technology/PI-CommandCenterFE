/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HttpStatusCode } from './HttpStatusCode';
import type { SuperAdminTransferHistoryView } from './SuperAdminTransferHistoryView';

export type SuperAdminTransferHistoryViewListStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<SuperAdminTransferHistoryView> | null;
    statusCode?: HttpStatusCode;
    errors?: any;
};
