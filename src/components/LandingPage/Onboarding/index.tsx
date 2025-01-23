import { Box } from '@chakra-ui/react';
import { FeatureBody } from '@components/bits-utils/FeatureBody';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import React from 'react';

export const Onboarding = () => {
    return (
        <Box>
            <Mainhero
                title="Effortless Employee Onboarding and Mastery: Empower New Hires with TIMBA's Seamless Integration"
                buttonTitle="Start Using for FREE – Sign up here"
                image="/assets/pr (9).png"
                bgColor="white"
                color="brand.100"
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
                topText="TIMBA revolutionizes the way you welcome and nurture new talent, ensuring a swift and effective integration into your organization. Our comprehensive employee onboarding and management tools pave the way for success, right from day one."
                mainTitle="Elevate Your Workforce Experience with TIMBA's Exceptional Employee Onboarding and Management"
                options={[
                    {
                        title: 'Swift Onboarding Simplified',
                        sub: 'Say goodbye to cumbersome onboarding processes. TIMBA offers pre-configured accounts for new employees, granting immediate access to a suite of essential features.',
                    },
                    {
                        title: 'Seamless Feature Integration',
                        sub: "Equip your new hires with the tools they need to hit the ground running. TIMBA's seamless integration enables swift navigation and engagement across all vital functionalities.",
                    },
                    {
                        title: 'Customizable Access',
                        sub: "Tailor access levels to match each employee's role. With TIMBA, you're in control, ensuring that employees have access to the precise features necessary for their responsibilities.",
                    },
                    {
                        title: 'Effortless Skill Mastery',
                        sub: 'TIMBA empowers employees to quickly master the platform. Intuitive interfaces and user-friendly features facilitate a rapid learning curve, enabling productive contributions in record time.',
                    },
                    {
                        title: 'Unified Communication',
                        sub: "Foster clear communication channels from the get-go. TIMBA's collaborative features ensure new hires can engage, interact, and align seamlessly with team members.",
                    },
                    {
                        title: 'Resourceful Onboarding',
                        sub: 'TIMBA serves as a knowledge hub for new employees. Access training materials, guidelines, and resources effortlessly, ensuring a comprehensive understanding of your organization.',
                    },
                ]}
                img="/assets/pr (9).png"
                subText="Experience the Power of TIMBA's Employee Onboarding and Management: Where Seamless Integration Meets Elevated Performance. Your workforce's journey towards excellence starts here."
                fs="2.625rem"
                bHero="Have a bigger Team !"
            />
        </Box>
    );
};
