/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InvoicePaidEventLogView = {
    id?: string;
    clientId?: string;
    billingAccount?: string | null;
    clientSubscriptionId?: string;
    invoiceReference?: string | null;
    licenceType?: string | null;
    startDate?: string;
    endDate?: string;
    status?: string | null;
    paymentStatus?: string | null;
    amountInCent?: number;
    invoicePDFURL?: string | null;
    hostedInvoiceURL?: string | null;
    numberOfLicense?: number | null;
    unitPrice?: number | null;
};
