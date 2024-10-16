import { ISubscriptionProps } from '@components/generics/Schema';
import { withPageAuth } from '@components/generics/withPageAuth';
import { SubscriptionFormComponent } from '@components/subpages/SubscriptionFormComponent';
import { GetServerSideProps } from 'next';
import React from 'react';
import { SubscriptionService } from 'src/services';

const NewSubscriptionPage = ({ data, features }: ISubscriptionProps) => {
    return <SubscriptionFormComponent data={data} features={features} />;
};

export default NewSubscriptionPage;

export const getServerSideProps: GetServerSideProps = withPageAuth(async () => {
    try {
        const data = await SubscriptionService.listSubscriptionFeatures({});
        return {
            props: {
                features: data.data,
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
