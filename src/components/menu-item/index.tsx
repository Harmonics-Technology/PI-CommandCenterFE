import { Box, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface MenuProps {
    menuTitle: string;
}
function MenuItem({ menuTitle }: MenuProps) {
    const router = useRouter();
    const admin = router.pathname.startsWith('/command-center');
    const url = `${admin ? '/command-center' : ''}/${menuTitle}`;
    return (
        <>
            <Link href={url} passHref>
                <VStack cursor="pointer" spacing="5px" role="group">
                    <Text
                        color={
                            router.pathname.startsWith(url)
                                ? 'brand.400'
                                : 'black'
                        }
                        fontWeight="700"
                        fontSize=".9rem"
                        fontFamily="Nunito"
                        noOfLines={1}
                        mb="0"
                        textTransform="capitalize"
                    >
                        {menuTitle.replaceAll('-', ' ')}
                    </Text>
                    {admin && (
                        <Box
                            h="5px"
                            w={router.pathname.startsWith(url) ? 'full' : '0'}
                            bgColor="brand.400"
                            transition="width .3s ease"
                            _groupHover={{
                                w: 'full',
                            }}
                        />
                    )}
                </VStack>
            </Link>
        </>
    );
}

export default MenuItem;
