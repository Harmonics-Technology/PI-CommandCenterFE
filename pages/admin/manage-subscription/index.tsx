import { IManageSubProps } from '@components/generics/Schema';
import { withPageAuth } from '@components/generics/withPageAuth';
import { ManageSubscriptionComponent } from '@components/subpages/ManageSubscriptionComponent';
import { GetServerSideProps } from 'next';
import React from 'react';
import { SubscriptionService } from 'src/services';

const manageSubscriptionPage = ({ base, addon }: IManageSubProps) => {
    return <ManageSubscriptionComponent base={base} addon={addon} />;
};

export default manageSubscriptionPage;

export const getServerSideProps: GetServerSideProps = withPageAuth(async () => {
    try {
        const base = await SubscriptionService.listSubscription({
            subscriptionTypeId: 1,
        });
        const addon = await SubscriptionService.listSubscription({
            subscriptionTypeId: 2,
        });
        return {
            props: {
                base: base.data,
                addon: addon.data,
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
