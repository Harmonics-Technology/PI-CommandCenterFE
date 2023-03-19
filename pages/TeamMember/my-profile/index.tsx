import { withPageAuth } from '@components/generics/withPageAuth';
import MyProfile from '@components/subpages/MyProfile';
import { GetServerSideProps } from 'next';
import React from 'react';
import {
    FinancialService,
    PaymentScheduleListStandardResponse,
    UserService,
    UserView,
} from 'src/services';

function index({
    user,
    paymentSchedule,
}: {
    user: UserView;
    paymentSchedule: PaymentScheduleListStandardResponse;
}) {
    return <MyProfile user={user} paymentSchedule={paymentSchedule} />;
}

export default index;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx: any) => {
        const id = JSON.parse(ctx.req.cookies.user).id;
        const employeeId = JSON.parse(
            ctx.req.cookies.user,
        ).employeeInformationId;
        try {
            const data = await UserService.getUserById(id);
            const paymentSchedule =
                await FinancialService.getEmployeePaymentSchedule(employeeId);
            console.log({ data });
            return {
                props: {
                    user: data.data,
                    paymentSchedule,
                },
            };
        } catch (error: any) {
            console.log(error);
            return {
                props: {
                    data: [],
                },
            };
        }
    },
);
