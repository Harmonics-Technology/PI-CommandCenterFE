/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CardView } from './CardView';
import type { HttpStatusCode } from './HttpStatusCode';

export type CardViewListStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<CardView> | null;
    statusCode?: HttpStatusCode;
    errors?: any;
};
