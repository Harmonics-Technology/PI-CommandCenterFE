/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientView } from './ClientView';
import type { HttpStatusCode } from './HttpStatusCode';

export type ClientViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ClientView;
    statusCode?: HttpStatusCode;
    errors?: any;
};
