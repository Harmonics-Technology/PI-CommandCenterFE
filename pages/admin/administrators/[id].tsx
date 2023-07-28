import { IAdminProps } from '@components/generics/Schema';
import { withPageAuth } from '@components/generics/withPageAuth';
import { SingleUserComponent } from '@components/subpages/SingleUserComponent';
import { GetServerSideProps } from 'next';
import React from 'react';
import { UserService } from 'src/services';

const SingleUser = ({ user, id }: IAdminProps) => {
    return <SingleUserComponent user={user} id={id} />;
};

export default SingleUser;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx) => {
        const { id } = ctx.query;
        try {
            const data = await UserService.getUserById({ userId: id });
            return {
                props: {
                    user: data.data,
                    id,
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
