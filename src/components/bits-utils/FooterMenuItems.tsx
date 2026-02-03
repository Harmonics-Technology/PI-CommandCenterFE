import { Text } from '@chakra-ui/react';

export const FooterMenuItems = ({
    text,
    url,
}: {
    text: string;
    url: string;
}) => {
    return (
        <Text
            fontWeight="500"
            fontSize={['.8rem', '1rem']}
            mb="0"
            cursor="pointer"
            color="brand.100"
        >
            <a href={url}>{text}</a>
        </Text>
    );
};
