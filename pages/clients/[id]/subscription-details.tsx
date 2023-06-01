import { IClientInfoProps } from '@components/generics/Schema';
import { SubscriptionDetails } from '@components/subpages/SubscriptionDetails';
import { GetServerSideProps } from 'next';
import React from 'react';

const SubscriptionDetailsPage = ({ id }: IClientInfoProps) => {
    return <SubscriptionDetails id={id} />;
};

export default SubscriptionDetailsPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    return {
        props: {
            id,
        },
    };
};
