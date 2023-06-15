/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientSubscriptionView } from './ClientSubscriptionView';
import type { Link } from './Link';

export type ClientSubscriptionViewPagedCollection = {
    offset?: number | null;
    limit?: number | null;
    size?: number;
    first?: Link;
    previous?: Link;
    next?: Link;
    last?: Link;
    self?: Link;
    value?: Array<ClientSubscriptionView> | null;
};
