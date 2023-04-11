import HidePage from '@components/bits-utils/HidePage';
import useWindowSize from '@components/generics/useWindowSize';
import { withPageAuth } from '@components/generics/withPageAuth';
// import Timesheet from "@components/subpages/Timesheet";
import TimesheetTeam from '@components/subpages/TimesheetTeam';
import moment from 'moment';
import { GetServerSideProps } from 'next';
import React from 'react';
import { TimeSheetMonthlyView, TimeSheetService } from 'src/services';
interface Size {
    width: number | undefined;
    height: number | undefined;
}

function SingleTimeSheet({
    timeSheets,
    id,
}: {
    timeSheets: TimeSheetMonthlyView;
    id: string;
}) {
    const size: Size = useWindowSize();

    return (
        <>
            <TimesheetTeam timeSheets={timeSheets} id={id} />
        </>
    );
}

export default SingleTimeSheet;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx: any) => {
        // console.log({
        //     ctx: JSON.parse(ctx.req.cookies.user).employeeInformationId,
        // });
        const id = JSON.parse(ctx.req.cookies.user).employeeInformationId;
        console.log({ id });

        let { date } = ctx.query;
        if (date === undefined) {
            date = moment(new Date()).format('YYYY-MM-DD');
        }

        try {
            const data = await TimeSheetService.getTimeSheet(id, date);
            console.log({ data });
            return {
                props: {
                    timeSheets: data.data,
                    id,
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
