import { Icon } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export const FooterIcons = ({ icon, url }: { icon: any; url: string }) => {
    return (
        <Link target="_blank" rel="noopener noreferrer" passHref href={url}>
            <Icon
                fontSize={['1rem', '1.3rem']}
                cursor="pointer"
                color="brand.400"
                as={icon}
            />
        </Link>
    );
};
