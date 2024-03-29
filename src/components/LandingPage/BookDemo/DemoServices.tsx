import { Box } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import { MainTitle } from '@components/bits-utils/Heros/MainTitle';
import { SingleServiceLTR } from '@components/bits-utils/SingleServiceLTR';

export const DemoServices = () => {
    const router = useRouter();
    return (
        <Box py="6rem" mx="auto" w="90%">
            <Box mb="6rem" w='70%' mx='auto'>
                <MainTitle
                    text="Experience the Power of TIMBA Firsthand - Book your free demo"
                    sub="Book a personalized demo with our expert team and embark on an immersive journey into the world of TIMBA. Discover how our powerful software can transform your organization's productivity and efficiency."
                />
            </Box>
            <SingleServiceLTR
                image="/assets/demo.png"
                title="A Personalized Demo Experience"
                items={[
                    {
                        title: 'Tailored to Your Needs',
                        sub: 'Your success is our priority. During the demo, our team will cater the experience to your specific requirements, focusing on the features most relevant to your business.',
                    },
                    {
                        title: 'Live Interaction',
                        sub: 'Interact in real-time with our knowledgeable experts. Ask questions, seek guidance, and witness the seamless functionality of TIMBA firsthand.',
                    },
                    {
                        title: 'Explore Our Suite of Solutions',
                        sub: "Whether you're interested in time tracking, project management, HR management, or recruitment, our demo covers it all. Experience the comprehensive capabilities of TIMBA's powerful features.",
                    },
                    {
                        title: 'See the Impact',
                        sub: "Witness how TIMBA can elevate your organization's efficiency, productivity, and decision-making. From streamlined processes to enhanced collaboration, discover the tangible benefits of adopting TIMBA.",
                    },
                ]}
            />
        </Box>
    );
};
