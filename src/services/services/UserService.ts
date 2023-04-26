/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Enable2FAViewStandardResponse } from '../models/Enable2FAViewStandardResponse';
import type { InitiateResetModel } from '../models/InitiateResetModel';
import type { LoginModel } from '../models/LoginModel';
import type { PasswordReset } from '../models/PasswordReset';
import type { RegisterModel } from '../models/RegisterModel';
import type { ShiftUsersListViewPagedCollectionStandardResponse } from '../models/ShiftUsersListViewPagedCollectionStandardResponse';
import type { TeamMemberModel } from '../models/TeamMemberModel';
import type { UpdateUserModel } from '../models/UpdateUserModel';
import type { UserCountByPayrollTypeViewListStandardResponse } from '../models/UserCountByPayrollTypeViewListStandardResponse';
import type { UserProfileViewStandardResponse } from '../models/UserProfileViewStandardResponse';
import type { UserViewListStandardResponse } from '../models/UserViewListStandardResponse';
import type { UserViewPagedCollectionStandardResponse } from '../models/UserViewPagedCollectionStandardResponse';
import type { UserViewStandardResponse } from '../models/UserViewStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * @param requestBody 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static create(
requestBody?: RegisterModel,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/register',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static loginUser(
requestBody?: LoginModel,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/login',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param token 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static verify(
token: string,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/verifyUser/{token}',
            path: {
                'token': token,
            },
        });
    }

    /**
     * @param redirectUrl 
     * @param requestBody 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static initiateReset(
redirectUrl?: string,
requestBody?: InitiateResetModel,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/reset/initiate',
            query: {
                'redirectUrl': redirectUrl,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static completeReset(
requestBody?: PasswordReset,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/reset/complete',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static updateUser(
requestBody?: UpdateUserModel,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/update',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param password 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static updatePassword(
password?: string,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/change_password',
            query: {
                'password': password,
            },
        });
    }

    /**
     * @param userId 
     * @returns UserProfileViewStandardResponse Success
     * @throws ApiError
     */
    public static userProfile(
userId: string,
): CancelablePromise<UserProfileViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/user-profile/{userId}',
            path: {
                'userId': userId,
            },
        });
    }

    /**
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static validateToken(): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/validate-token',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param role 
     * @param offset 
     * @param limit 
     * @param search 
     * @param startDate 
     * @param endDate 
     * @returns UserViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listUsers(
role: string,
offset?: number,
limit?: number,
search?: string,
startDate?: string,
endDate?: string,
): CancelablePromise<UserViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/list/{role}',
            path: {
                'role': role,
            },
            query: {
                'Offset': offset,
                'Limit': limit,
                'Search': search,
                'StartDate': startDate,
                'EndDate': endDate,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static resendInvite(
requestBody?: InitiateResetModel,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/invite/resend',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param id 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static getUserById(
id: string,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/get/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param id 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static toggleUserActive(
id: string,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/toggle-active/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static adminUpdateUser(
requestBody?: UpdateUserModel,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/admin-update-user',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static addTeamMember(
requestBody?: TeamMemberModel,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/add-team-member',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param id 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static activateTeamMember(
id: string,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/activate-team-member/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static updateTeamMember(
requestBody?: TeamMemberModel,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/update-team-member',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param clientId 
     * @returns UserViewListStandardResponse Success
     * @throws ApiError
     */
    public static getSupervisors(
clientId: string,
): CancelablePromise<UserViewListStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/supervisors/{clientId}',
            path: {
                'clientId': clientId,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param startDate 
     * @param endDate 
     * @returns ShiftUsersListViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listShiftUsers(
offset?: number,
limit?: number,
startDate?: string,
endDate?: string,
): CancelablePromise<ShiftUsersListViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/shift-users',
            query: {
                'Offset': offset,
                'Limit': limit,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param search 
     * @param supervisorId 
     * @param startDate 
     * @param endDate 
     * @returns UserViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static getSupervisees(
offset?: number,
limit?: number,
search?: string,
supervisorId?: string,
startDate?: string,
endDate?: string,
): CancelablePromise<UserViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/supervisees',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
                'supervisorId': supervisorId,
                'StartDate': startDate,
                'EndDate': endDate,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param search 
     * @param clientId 
     * @param startDate 
     * @param endDate 
     * @returns UserViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static getClientSupervisors(
offset?: number,
limit?: number,
search?: string,
clientId?: string,
startDate?: string,
endDate?: string,
): CancelablePromise<UserViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/client/supervisors',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
                'clientId': clientId,
                'StartDate': startDate,
                'EndDate': endDate,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param search 
     * @param clientId 
     * @param startDate 
     * @param endDate 
     * @returns UserViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static getClientTeamMembers(
offset?: number,
limit?: number,
search?: string,
clientId?: string,
startDate?: string,
endDate?: string,
): CancelablePromise<UserViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/client/team-members',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
                'clientId': clientId,
                'StartDate': startDate,
                'EndDate': endDate,
            },
        });
    }

    /**
     * @param offset 
     * @param limit 
     * @param search 
     * @param paymentPartnerId 
     * @param startDate 
     * @param endDate 
     * @returns UserViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static getPaymentPartnerTeamMembers(
offset?: number,
limit?: number,
search?: string,
paymentPartnerId?: string,
startDate?: string,
endDate?: string,
): CancelablePromise<UserViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/payment-partner/team-members',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
                'paymentPartnerId': paymentPartnerId,
                'StartDate': startDate,
                'EndDate': endDate,
            },
        });
    }

    /**
     * @param is2FaEnabled 
     * @returns Enable2FAViewStandardResponse Success
     * @throws ApiError
     */
    public static enable2Fa(
is2FaEnabled?: boolean,
): CancelablePromise<Enable2FAViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/enable2fa',
            query: {
                'is2FAEnabled': is2FaEnabled,
            },
        });
    }

    /**
     * @param code 
     * @param twoFactorCode 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static completeTowFactorAuthentication(
code: string,
twoFactorCode: string,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/enable2fa/complete/{code}/{twoFactorCode}',
            path: {
                'code': code,
                'twoFactorCode': twoFactorCode,
            },
        });
    }

    /**
     * @param code 
     * @param twoFactorCode 
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static completeTowFactorAuthenticationLogin(
code: string,
twoFactorCode: string,
): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/login/complete/{code}/{twoFactorCode}',
            path: {
                'code': code,
                'twoFactorCode': twoFactorCode,
            },
        });
    }

    /**
     * @param year 
     * @returns UserCountByPayrollTypeViewListStandardResponse Success
     * @throws ApiError
     */
    public static getUserCountByPayrolltypePerYear(
year?: number,
): CancelablePromise<UserCountByPayrollTypeViewListStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/chart/teammembers-by-payrolls',
            query: {
                'year': year,
            },
        });
    }

}
