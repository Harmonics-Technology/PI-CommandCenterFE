import { Box } from '@chakra-ui/react';
import { FeatureBody } from '@components/bits-utils/FeatureBody';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import React from 'react';

export const LeaveMgt = () => {
    return (
        <Box>
            <Mainhero
                title="Effortless Leave Management Perfected: Embrace Simplified Time Off Tracking with TIMBA"
                buttonTitle="Start Using for FREE – Sign up here"
                image="/assets/pr (4).png"
                bgColor="brand.100"
                color="white"
                h="auto"
                gap={['33px', '2.25rem']}
                mainH={['55vh', '80vh']}
                fs={{
                    base: '24px',
                    xl: '2.3rem',
                    '2xl': '2.75rem',
                }}
            />
            <FeatureBody
                topText="TIMBA redefines how you handle time off requests, providing a comprehensive platform for efficient leave management. From vacation to sick leave, TIMBA streamlines the process, ensuring seamless request submission, clear approvals, and enhanced team coordination."
                mainTitle="Empower Your Workforce with TIMBA's Leave Management Excellence"
                options={[
                    {
                        title: 'Comprehensive Leave Tracking',
                        sub: "TIMBA offers a unified solution for various leave types – from vacation and sick leave to personal time off. Keep your workforce's time off organized in a single, accessible location.",
                    },
                    {
                        title: 'User-Friendly Request Submission',
                        sub: 'Team members can easily submit leave requests through TIMBA, ensuring a hassle-free experience that simplifies the process for both employees and managers.',
                    },
                    {
                        title: 'Efficient Approval Workflow',
                        sub: "Empower managers with the ability to review and respond to leave requests promptly. TIMBA's streamlined workflow ensures timely approvals or denials",
                    },
                    {
                        title: 'Enhanced Coordination',
                        sub: "Visualize leave requests across your team's calendar to ensure optimal coverage. TIMBA's coordination features prevent scheduling conflicts and maintain operational continuity.",
                    },
                    {
                        title: 'Streamlined Record Keeping',
                        sub: "TIMBA's leave management feature maintains accurate records of leave requests and approvals, streamlining administrative tasks and ensuring compliance.",
                    },
                    {
                        title: 'Leave Balance Insights',
                        sub: 'TIMBA provides insights into leave balances, enabling employees to make informed decisions about their time off while ensuring operational stability.',
                    },
                ]}
                img="/assets/pr (9).png"
                subText="Streamline leave requests, approvals, and coordination with a comprehensive platform designed to enhance team satisfaction and operational efficiency. TIMBA - Where Leave Management Meets Uncomplicated Excellence."
                fs="2.625rem"
                bHero="Have a bigger Team !"
            />
        </Box>
    );
};
