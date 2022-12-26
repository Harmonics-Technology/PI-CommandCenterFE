/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanStandardResponse } from '../models/BooleanStandardResponse';
import type { ExpenseModel } from '../models/ExpenseModel';
import type { ExpenseViewPagedCollectionStandardResponse } from '../models/ExpenseViewPagedCollectionStandardResponse';
import type { ExpenseViewStandardResponse } from '../models/ExpenseViewStandardResponse';
import type { InvoiceViewPagedCollectionStandardResponse } from '../models/InvoiceViewPagedCollectionStandardResponse';
import type { PayrollViewPagedCollectionStandardResponse } from '../models/PayrollViewPagedCollectionStandardResponse';
import type { PaySlipViewPagedCollectionStandardResponse } from '../models/PaySlipViewPagedCollectionStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FinancialService {

    /**
     * @param requestBody 
     * @returns ExpenseViewStandardResponse Success
     * @throws ApiError
     */
    public static addExpense(
requestBody?: ExpenseModel,
): CancelablePromise<ExpenseViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Financial/expense',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param employeeInformationId 
     * @param search 
     * @returns ExpenseViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listExpenses(
offset?: number,
limit?: number,
employeeInformationId?: string,
search?: string,
): CancelablePromise<ExpenseViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Financial/expenses',
            query: {
                'Offset': offset,
                'Limit': limit,
                'employeeInformationId': employeeInformationId,
                'search': search,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param search 
     * @returns ExpenseViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listReviewedExpenses(
offset?: number,
limit?: number,
search?: string,
): CancelablePromise<ExpenseViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Financial/expenses/reviewed',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param expenseId 
     * @returns ExpenseViewStandardResponse Success
     * @throws ApiError
     */
    public static reviewExpense(
expenseId: string,
): CancelablePromise<ExpenseViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Financial/expense/{expenseId}/review',
            path: {
                'expenseId': expenseId,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param expenseId 
     * @returns ExpenseViewStandardResponse Success
     * @throws ApiError
     */
    public static approveExpense(
expenseId: string,
): CancelablePromise<ExpenseViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Financial/expense/{expenseId}/approve',
            path: {
                'expenseId': expenseId,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param expenseId 
     * @returns ExpenseViewStandardResponse Success
     * @throws ApiError
     */
    public static declineExpense(
expenseId: string,
): CancelablePromise<ExpenseViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Financial/expense/{expenseId}/decline',
            path: {
                'expenseId': expenseId,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param employeeInformationId 
     * @returns PayrollViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listPayrolls(
offset?: number,
limit?: number,
employeeInformationId?: string,
): CancelablePromise<PayrollViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Financial/payrolls',
            query: {
                'Offset': offset,
                'Limit': limit,
                'employeeInformationId': employeeInformationId,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param payrollId 
     * @returns BooleanStandardResponse Success
     * @throws ApiError
     */
    public static approvePayroll(
payrollId?: string,
): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Financial/payroll/approve',
            query: {
                'payrollId': payrollId,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param employeeInformationId 
     * @returns PaySlipViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listPaySlips(
offset?: number,
limit?: number,
employeeInformationId?: string,
): CancelablePromise<PaySlipViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Financial/payslips',
            query: {
                'Offset': offset,
                'Limit': limit,
                'employeeInformationId': employeeInformationId,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param payrollId 
     * @returns BooleanStandardResponse Success
     * @throws ApiError
     */
    public static generatePaySlip(
payrollId?: string,
): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Financial/generate-payslip',
            query: {
                'payrollId': payrollId,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param search 
     * @returns ExpenseViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listApprovedExpenses(
offset?: number,
limit?: number,
search?: string,
): CancelablePromise<ExpenseViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Financial/expenses/approved',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns BooleanStandardResponse Success
     * @throws ApiError
     */
    public static generateInvoicePayroll(
requestBody?: Array<string>,
): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Financial/invoice/payroll/generate',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns BooleanStandardResponse Success
     * @throws ApiError
     */
    public static generateInvoiceExpense(
requestBody?: Array<string>,
): CancelablePromise<BooleanStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Financial/invoice/expense/generate',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param search 
     * @returns ExpenseViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listAllApprovedExpenses(
offset?: number,
limit?: number,
search?: string,
): CancelablePromise<ExpenseViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Financial/expenses/approved/all',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param search 
     * @returns InvoiceViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listInvoices(
offset?: number,
limit?: number,
search?: string,
): CancelablePromise<InvoiceViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Financial/invoices/list',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @returns PayrollViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listPayrollsByPaymentPartner(
offset?: number,
limit?: number,
): CancelablePromise<PayrollViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Financial/payrolls/paymentpartner',
            query: {
                'Offset': offset,
                'Limit': limit,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param search 
     * @returns InvoiceViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listInvoicesByPaymentPartner(
offset?: number,
limit?: number,
search?: string,
): CancelablePromise<InvoiceViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Financial/paymentpartner/invoices',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param search 
     * @returns ExpenseViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listExpensesByPaymentPartner(
offset?: number,
limit?: number,
search?: string,
): CancelablePromise<ExpenseViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Financial/paymentpartner/expenses',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

}
