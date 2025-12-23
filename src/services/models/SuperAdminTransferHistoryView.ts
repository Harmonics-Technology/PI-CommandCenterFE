/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SuperAdminTransferHistoryView = {
    id?: string;
    previousSuperAdminId?: string;
    previousSuperAdminName?: string | null;
    newSuperAdminId?: string;
    newSuperAdminName?: string | null;
    initiatedByUserId?: string;
    initiatedByUserName?: string | null;
    transferReason?: string | null;
    transferDate?: string;
    transferStatus?: string | null;
    totalEntitiesUpdated?: number;
    isRolledBack?: boolean;
    completionDate?: string | null;
    errorMessage?: string | null;
};
