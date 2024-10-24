import { NewSignUpPage } from '@components/subpages/NewSignUpPage';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';

const SignUp = ({ base }: { base: any }) => {
    return <NewSignUpPage countries={base} />;
};

export default SignUp;

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
    try {
        const base = await axios.get(
            'https://countriesnow.space/api/v0.1/countries/flag/images',
        );

        return {
            props: {
                base: base.data.data,
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
};
