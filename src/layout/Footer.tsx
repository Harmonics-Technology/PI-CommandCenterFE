import { Box, Grid, HStack, Text, VStack } from '@chakra-ui/react';
import { AdminLogo } from '@components/bits-utils/AdminLogo';
import { FooterHeadings } from '@components/bits-utils/FooterHeadings';
import { FooterMenuItems } from '@components/bits-utils/FooterMenuItems';
import { FooterIcons } from '@components/bits-utils/Heros/FooterIcons';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';

function Footer() {
    return (
        <Box w="80%" mx="auto" py="6rem">
            <HStack align="flex-start">
                <VStack align="flex-start" w="50%">
                    <AdminLogo />
                    <Text
                        fontSize=".875rem"
                        lineHeight="1.75rem"
                        color="#636b83"
                        w="70%"
                    >
                        Lorem ipsum dolor sit amet cultricies egestas commodo
                        enim enim amet. Tellus pellentesque pretium a purus
                        mattis nisl.
                    </Text>
                </VStack>

                <Grid templateColumns={['1fr', 'repeat(3, 1fr)']} gap="2rem">
                    <VStack spacing="0" gap="1rem" align="flex-start">
                        <FooterHeadings text="Sections" />
                        <FooterMenuItems text="Home" url="/" />
                        <FooterMenuItems text="Features" url="/features" />
                        <FooterMenuItems text="Pricing" url="/pricing" />
                        <FooterMenuItems text="FAQs" url="/#faq" />
                    </VStack>
                    <VStack spacing="0" gap="1rem" align="flex-start">
                        <FooterHeadings text="Quick links" />
                        <FooterMenuItems text="Legal" url="/legal" />
                        <FooterMenuItems text="Term of use" url="/terms" />
                    </VStack>
                    <VStack spacing="0" gap="1rem" align="flex-start">
                        <FooterHeadings text="Contact us" />
                        <Text
                            fontSize=".875rem"
                            fontWeight="500"
                            color="#636b83"
                        >
                            Our Support team is available 24 /7 to answer your
                            queries
                        </Text>
                        <HStack spacing="1rem">
                            <FooterIcons icon={BsFacebook} url="/" />
                            <FooterIcons icon={FiTwitter} url="/" />
                            <FooterIcons icon={BsInstagram} url="/" />
                        </HStack>
                    </VStack>
                </Grid>
            </HStack>
        </Box>
    );
}

export default Footer;
