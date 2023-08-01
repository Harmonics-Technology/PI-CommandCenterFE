import React from 'react';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

export const FooterMenuItems = ({
    text,
    url,
}: {
    text: string;
    url: string;
}) => {
    return (
        <Link passHref href={url}>
            <Text
                fontWeight="500"
                fontSize={['.8rem', '1rem']}
                mb="0"
                cursor="pointer"
                color="brand.100"
            >
                {text}
            </Text>
        </Link>
    );
};
