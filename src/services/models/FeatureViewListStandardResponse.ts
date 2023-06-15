/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FeatureView } from './FeatureView';
import type { HttpStatusCode } from './HttpStatusCode';

export type FeatureViewListStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<FeatureView> | null;
    statusCode?: HttpStatusCode;
    errors?: any;
};
