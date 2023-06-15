import { IManageSubProps } from '@components/generics/Schema';
import { withPageAuth } from '@components/generics/withPageAuth';
import { ManageSubscriptionComponent } from '@components/subpages/ManageSubscriptionComponent';
import { GetServerSideProps } from 'next';
import React from 'react';
import { SubscriptionService } from 'src/services';

const manageSubscriptionPage = ({ data }: IManageSubProps) => {
    return <ManageSubscriptionComponent data={data} />;
};

export default manageSubscriptionPage;

export const getServerSideProps: GetServerSideProps = withPageAuth(async () => {
    try {
        const data = await SubscriptionService.listSubscription({});
        return {
            props: {
                data: data.data,
            },
        };
    } catch (error: any) {
        console.log({ error });
        return {
            props: {
                data: [],
            },
        };
    }
});
