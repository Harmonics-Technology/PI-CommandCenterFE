import { Box } from '@chakra-ui/react';
import React from 'react';

export const Spacing = ({ space, color }: { space: any; color?: any }) => {
    return <Box h={space} bgColor={color} />;
};
