/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientView } from './ClientView';
import type { Link } from './Link';

export type ClientViewPagedCollection = {
    offset?: number | null;
    limit?: number | null;
    size?: number;
    first?: Link;
    previous?: Link;
    next?: Link;
    last?: Link;
    self?: Link;
    value?: Array<ClientView> | null;
};
