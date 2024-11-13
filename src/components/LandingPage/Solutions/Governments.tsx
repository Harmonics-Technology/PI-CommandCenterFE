import { Box, VStack } from '@chakra-ui/react';
import { MainStyleHero } from '@components/bits-utils/Heros/MainStyleHero';
import { SolutionHero } from '@components/bits-utils/Heros/SolutionHero';
import { SingleServiceLTR } from '@components/bits-utils/SingleServiceLTR';
import { useRouter } from 'next/router';
import React from 'react';

export const Governments = () => {
    const router = useRouter();
    return (
        <Box>
            <MainStyleHero
                bgColor="brand.900"
                btnClick={() => router.push('/pricing')}
                btnText="Get Started for Free Today"
                title="Optimize Government Efficiency, One Task at a Time"
                desc="TIMBA’s robust platform supports government agencies by improving workforce management, tracking team productivity, and ensuring regulatory compliance. Simplify processes across departments, manage teams, and maintain accountability with TIMBA’s comprehensive suite of tools."
                gap={['20px', '60px']}
                sub="Sign up to enjoy all features for free ( 30 days trial - No credit card required.)"
                mainH={['70vh', '80vh']}
                img="/assets/gov.jpg"
            />
            <Box w="full" bgColor="white">
                <Box p={['2rem 0', '8rem 0 1rem']}>
                    <VStack
                        spacing="5rem"
                        w={['90%', '85%']}
                        mx="auto"
                        pb="4rem"
                        bgColor="white"
                    >
                        <SingleServiceLTR
                            image="/assets/gova.png"
                            title="Streamlined Team Coordination and Cross-Department Collaboration"
                            desc="Coordinate and manage team members across multiple departments effortlessly with TIMBA’s centralized dashboard."
                            items={[
                                {
                                    sub: `<p><strong>Team Assignments:  </strong>Assign roles across departments, create cross-functional teams, and keep every member aligned on project goals.</p>
                                    <p><strong>Clear Communication: </strong>Facilitate seamless communication within teams, ensuring everyone stays informed and productive.</p>`,
                                },
                            ]}
                            rtl
                        />
                        <SingleServiceLTR
                            image="/assets/cosb.png"
                            title="Detailed Time Tracking and Leave Management"
                            desc="TIMBA’s time management tools allow government agencies to track work hours, manage leave requests, and maintain accurate records for payroll and compliance."
                            items={[
                                {
                                    sub: `<p><strong>Time Tracking: </strong>Capture work hours effortlessly for payroll accuracy and productivity assessment.</p>
                                    <p><strong>Leave Management: </strong>Approve or decline leave requests, ensuring minimal disruption to essential services.</p>`,
                                },
                            ]}
                        />
                    </VStack>
                </Box>
            </Box>
            <Box w="full" bgColor="#F8FBFB">
                <Box p={['2rem 0', '4rem 0 3rem']}>
                    <VStack
                        spacing="5rem"
                        w={['90%', '85%']}
                        mx="auto"
                        pb="4rem"
                    >
                        <SingleServiceLTR
                            image="/assets/govc.png"
                            title="Training and Compliance Made Simple"
                            desc="Keep your teams trained, compliant, and ready for any task with TIMBA’s integrated compliance and reporting features."
                            items={[
                                {
                                    sub: `<p><strong>Training Approval:  </strong>Approve or assign training sessions to develop skills and ensure team readiness.</p>
                                    <p><strong>Regulatory Compliance:  </strong>Generate detailed reports to meet government standards and maintain compliance effortlessly.</p>`,
                                },
                            ]}
                            rtl
                        />
                    </VStack>
                </Box>
            </Box>
            <SolutionHero
                title="Transform Workforce Efficiency for Government Operations with TIMBA"
                sub="Enhance coordination, streamline administrative processes, and maintain compliance with TIMBA’s tailored solutions for government agencies. Experience the difference with a free trial."
            />
        </Box>
    );
};
