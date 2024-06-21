import { Box } from '@chakra-ui/react';
import { FeatureBody } from '@components/bits-utils/FeatureBody';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import React from 'react';

export const ShiftManagement = () => {
    return (
        <Box>
            <Mainhero
                title="Effortless Shift Management Redefined: Optimize Scheduling with TIMBA's Flexibility"
                buttonTitle="Start Using for FREE – Sign up here"
                image="/assets/pr (3).png"
                bgColor="brand.100"
                color="white"
                h="auto"
                gap={['33px', '2.25rem']}
                mainH={['55vh', '80vh']}
                fs={['24px', '2.75rem']}
            />
            <FeatureBody
                topText="TIMBA reimagines how you manage shifts, providing you with unparalleled flexibility to create, assign, and track shifts effortlessly. With customizable options and real-time availability monitoring, TIMBA ensures optimal coverage while prioritizing your team members' well-being."
                mainTitle="Achieve Seamless Workforce Coordination with TIMBA's Shift Management Excellence"
                options={[
                    {
                        title: 'Tailored Shift Creation',
                        sub: 'With TIMBA, you have the power to design shifts that match your unique needs. Craft shifts of any duration and assign them to specific days of the week.',
                    },
                    {
                        title: 'Unrestricted Scheduling',
                        sub: 'TIMBA liberates you from rigid scheduling constraints. Create shifts on any day, ensuring a schedule that accommodates your operational demands.',
                    },
                    {
                        title: 'Dynamic Team Assignment',
                        sub: "Seamlessly assign shifts to team members. TIMBA's intuitive interface streamlines the process, promoting efficient allocation of responsibilities.",
                    },
                    {
                        title: 'Real-time Availability Tracking',
                        sub: "Empower your team members with the ability to update their availability in real time. TIMBA's monitoring ensures shifts are assigned with consideration for individual preferences.",
                    },
                    {
                        title: 'Prevent Overbooking',
                        sub: "TIMBA's availability tracking helps prevent overbooking and scheduling conflicts, enabling a balanced workload and promoting team well-being.",
                    },
                    {
                        title: 'Holistic Coverage Assurance',
                        sub: "TIMBA's shift management feature ensures comprehensive coverage. Visualize shifts across the calendar to eliminate gaps and ensure operational continuity.",
                    },
                ]}
                img="/assets/pr (7).png"
                subText="Experience a New Era of Shift Management with TIMBA. Elevate your scheduling processes with flexibility, clarity, and efficient coordination. TIMBA - Where Shift Management Meets Streamlined Success."
                fs="2.625rem"
                bHero="Have a bigger Team !"
            />
        </Box>
    );
};
