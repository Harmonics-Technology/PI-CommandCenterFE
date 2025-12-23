/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HttpStatusCode } from './HttpStatusCode';
import type { LogFileInfo } from './LogFileInfo';

export type LogFileInfoListStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<LogFileInfo> | null;
    statusCode?: HttpStatusCode;
    errors?: any;
};
