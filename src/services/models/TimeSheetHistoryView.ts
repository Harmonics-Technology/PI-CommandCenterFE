/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeeInformationView } from './EmployeeInformationView';

export type TimeSheetHistoryView = {
    name?: string | null;
    email?: string | null;
    employeeInformationId?: string | null;
    employeeInformation?: EmployeeInformationView;
    totalHours?: number;
    numberOfDays?: number;
    approvedNumberOfHours?: number;
    date?: string;
    startDate?: string;
    endDate?: string;
    dateModified?: string | null;
};
