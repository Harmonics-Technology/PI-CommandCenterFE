/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientLicenseUpdatesLogView } from './ClientLicenseUpdatesLogView';
import type { HttpStatusCode } from './HttpStatusCode';

export type ClientLicenseUpdatesLogViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ClientLicenseUpdatesLogView;
    statusCode?: HttpStatusCode;
    errors?: any;
};
