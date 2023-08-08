import { VStack } from '@chakra-ui/react';
import { SingleServiceLTR } from '@components/bits-utils/SingleServiceLTR';
import React from 'react';

export const ReServices = () => {
    return (
        <VStack spacing="5rem" w="100%" mx="auto">
            <VStack spacing="5rem" w="100%" py="5rem" mx="auto" bgColor="white">
                <VStack spacing="5rem" w="85%" mx="auto">
                    <SingleServiceLTR
                        image="/assets/rea.png"
                        title="Streamlined Client Management"
                        items={[
                            {
                                title: 'Client Collaboration Made Easy',
                                sub: "TIMBA's collaboration tools facilitate seamless communication with clients. Share candidate profiles, progress updates, and feedback effortlessly, ensuring strong partnerships and client satisfaction.",
                            },
                            {
                                title: 'User-Friendly Interface',
                                sub: "TIMBA's intuitive interface is designed with HR managers in mind. Effortlessly navigate through tasks and access vital information at your fingertips.",
                            },
                        ]}
                        rtl
                    />
                    <SingleServiceLTR
                        image="/assets/reb.png"
                        title="Effortless Employee Onboarding"
                        items={[
                            {
                                title: 'Automated Onboarding Processes',
                                sub: 'TIMBA streamlines the employee onboarding journey. Automate paperwork, training materials, and compliance tasks, providing a smooth onboarding experience for new hires and saving time for recruiters.',
                            },
                            {
                                title: 'Real-Time Progress Monitoring',
                                sub: "Stay updated on onboarding progress with TIMBA's real-time tracking. Recruiters can monitor each step of the onboarding process, ensuring a seamless and timely transition for new employees.",
                            },
                        ]}
                    />
                </VStack>
            </VStack>
            <VStack w="85%" mx="auto" pb="5rem">
                <SingleServiceLTR
                    image="/assets/rec.png"
                    title="Powerful Reporting and Analytics"
                    items={[
                        {
                            title: 'Comprehensive Recruitment Analytics',
                            sub: "TIMBA's advanced reporting and analytics provide recruiters with valuable insights into their recruitment performance. Identify successful sourcing strategies and optimize recruitment processes for better results",
                        },
                        {
                            title: 'Data-Driven Decision Making',
                            sub: "Empowered by TIMBA's analytics, recruiters can make informed decisions that drive recruitment success. Say goodbye to guesswork and rely on data for strategic recruitment moves.",
                        },
                    ]}
                    rtl
                />
            </VStack>
        </VStack>
    );
};
