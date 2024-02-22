import { Box } from '@chakra-ui/react';
import { FeatureBody } from '@components/bits-utils/FeatureBody';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import React from 'react';

export const PayPartner = () => {
    return (
        <Box>
            <Mainhero
                title="Seamless Global Payments with TIMBA: Empower Your Team with Effortless Transactions"
                buttonTitle="Start Using for FREE – Sign up here"
                image="/assets/pr (6).png"
                bgColor="white"
                color="brand.100"
                gap="2.25rem"
                fs="2.75rem"
            />
            <FeatureBody
                topText="TIMBA redefines the way you handle payments for your team, eliminating complexities and enabling swift, hassle-free transactions across borders. With seamless integration of leading payment solutions, TIMBA ensures that compensating your team is both convenient and efficient."
                mainTitle="Unlock Unparalleled Convenience with TIMBA's Integrated Global Payment Partnerships"
                options={[
                    {
                        title: 'Effortless Payment Integration',
                        sub: 'TIMBA seamlessly links with renowned global payment platforms, eliminating manual transfer processes and ensuring a streamlined experience for disbursing payments.',
                    },
                    {
                        title: 'Cross-Border Efficiency',
                        sub: "No more worries about international payments. TIMBA's integrated global payment partnerships facilitate smooth cross-border transactions, simplifying your global team's compensation.",
                    },
                    {
                        title: 'Secure Transactions',
                        sub: 'Rest assured that your payments are handled with the highest level of security. TIMBA prioritizes data protection, ensuring that sensitive financial information remains safe and confidential.',
                    },
                    {
                        title: 'User-Friendly Experience',
                        sub: "Whether you're disbursing payments to remote workers or managing global teams, TIMBA's intuitive interface ensures a user-friendly experience, minimizing friction for both you and your team members.",
                    },
                    {
                        title: 'Reduced Administrative Burden',
                        sub: 'Bid farewell to manual payment handling. TIMBA automates the payment process, freeing up valuable time that can be directed toward more strategic tasks.',
                    },
                    {
                        title: 'Real-time Transparency',
                        sub: "TIMBA's payment integration offers real-time insights into transaction statuses. Monitor payment progress with ease and provide your team with clear visibility.",
                    },
                ]}
                img="/assets/pr (7).png"
                subText="Simplify the way you compensate your team, increase efficiency, and empower your workforce with TIMBA's seamless transaction capabilities. TIMBA - Where Global Payments Meet Elevated Convenience."
                fs="2.625rem"
                bHero="Have a bigger Team !"
            />
        </Box>
    );
};
