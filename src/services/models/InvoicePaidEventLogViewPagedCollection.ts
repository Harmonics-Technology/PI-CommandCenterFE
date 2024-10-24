/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvoicePaidEventLogView } from './InvoicePaidEventLogView';
import type { Link } from './Link';

export type InvoicePaidEventLogViewPagedCollection = {
    offset?: number | null;
    limit?: number | null;
    size?: number;
    first?: Link;
    previous?: Link;
    next?: Link;
    last?: Link;
    self?: Link;
    value?: Array<InvoicePaidEventLogView> | null;
};
