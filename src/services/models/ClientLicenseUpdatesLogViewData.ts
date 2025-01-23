/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientLicenseUpdatesLogViewFirst } from './ClientLicenseUpdatesLogViewFirst';
import type { ClientLicenseUpdatesLogViewSelf } from './ClientLicenseUpdatesLogViewSelf';
import type { ClientLicenseUpdatesLogViewValue } from './ClientLicenseUpdatesLogViewValue';

export type ClientLicenseUpdatesLogViewData = {
    offset?: number;
    limit?: number;
    nextOffset?: number;
    size?: number;
    first?: ClientLicenseUpdatesLogViewFirst;
    self?: ClientLicenseUpdatesLogViewSelf;
    value?: Array<ClientLicenseUpdatesLogViewValue> | null;
};
