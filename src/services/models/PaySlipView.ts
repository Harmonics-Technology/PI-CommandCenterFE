/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvoiceView } from './InvoiceView';

export type PaySlipView = {
    id?: string;
    invoiceId?: string;
    invoice?: InvoiceView;
    employeeInformationId?: string;
    dateCreated?: string;
    totalEarnings?: number;
};
