import { HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface leaveProps {
    tabValue: any[];
}

export const LeaveTab = ({ tabValue }: leaveProps) => {
    const router = useRouter();
    return (
        <HStack w="full" borderBottom="2px solid #e0e0e0" gap="1rem">
            {tabValue.map((x) => (
                <Link href={`${x.url}`} passHref>
                    <Text
                        fontWeight={
                            router.asPath.startsWith(`${x.url}`) ? '700' : '500'
                        }
                        fontSize=".9rem"
                        borderBottom={
                            router.asPath.startsWith(`${x.url}`)
                                ? '3px solid #2EAFA3'
                                : '0'
                        }
                        mb="0"
                        py=".3rem"
                        cursor="pointer"
                        color={
                            router.asPath.startsWith(`${x.url}`)
                                ? 'brand.400'
                                : ' black'
                        }
                        _hover={{
                            color: 'brand.400',
                            borderColor: 'brand.400',
                            borderBottom: '2px solid',
                        }}
                    >
                        {x.text}
                    </Text>
                </Link>
            ))}
        </HStack>
    );
};
