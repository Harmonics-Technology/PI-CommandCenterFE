/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddCardResponseView } from './AddCardResponseView';
import type { HttpStatusCode } from './HttpStatusCode';

export type AddCardResponseViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: AddCardResponseView;
    statusCode?: HttpStatusCode;
    errors?: any;
};
