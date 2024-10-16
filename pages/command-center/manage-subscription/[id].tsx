import { ISubscriptionProps } from '@components/generics/Schema';
import { withPageAuth } from '@components/generics/withPageAuth';
import { SubscriptionFormComponent } from '@components/subpages/SubscriptionFormComponent';
import { GetServerSideProps } from 'next';
import React from 'react';
import { SubscriptionService } from 'src/services';

const EditSubscription = ({ data, features }: ISubscriptionProps) => {
    return <SubscriptionFormComponent isEdit data={data} features={features} />;
};

export default EditSubscription;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx: any) => {
        const { id } = ctx.query;
        try {
            const data = await SubscriptionService.getSubscriptionById({
                id,
            });
            const features = await SubscriptionService.listSubscriptionFeatures(
                {},
            );
            return {
                props: {
                    data: data.data,
                    features: features.data,
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
    },
);
