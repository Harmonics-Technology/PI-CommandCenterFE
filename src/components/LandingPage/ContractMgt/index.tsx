import { Box } from '@chakra-ui/react';
import { FeatureBody } from '@components/bits-utils/FeatureBody';
import { Mainhero } from '@components/bits-utils/Heros/Mainhero';
import React from 'react';

export const ContractMgt = () => {
    return (
        <Box>
            <Mainhero
                title="Revolutionize Contract Management with TIMBA: Secure, Efficient, and Insightful"
                buttonTitle="Start Using for FREE – Sign up here"
                image="/assets/pr (6).png"
                bgColor="brand.100"
                color="white"
                gap="2.25rem"
                fs="2.75rem"
            />
            <FeatureBody
                topText="TIMBA empowers you to streamline and optimize your contract management processes like never before. From secure storage to intelligent alerts, TIMBA ensures your contracts are meticulously organized and effortlessly managed."
                mainTitle="Experience Unparalleled Control with TIMBA's Advanced Contract Management"
                options={[
                    {
                        title: 'Centralized Contract Repository',
                        sub: 'Bid farewell to scattered contracts. TIMBA consolidates all employee contracts securely in a single, easily accessible location.',
                    },
                    {
                        title: 'Real-time Contract Monitoring',
                        sub: 'Keep your finger on the pulse of your contracts. TIMBA allows you to monitor contract status, start and end dates, and key milestones in real-time.',
                    },
                    {
                        title: 'Effortless Invoicing',
                        sub: "Seamlessly generate invoices with TIMBA's integrated tools. Efficiently track payments and ensure the financial aspects of your contracts are handled flawlessly.",
                    },
                    {
                        title: 'Payment Insights',
                        sub: "Gain a comprehensive overview of payments received. TIMBA's analytics provide clear insights into financial transactions, enhancing your financial oversight.",
                    },
                    {
                        title: 'Intelligent Expiration Alerts',
                        sub: 'Stay ahead of contract expirations. TIMBA sends timely alerts, enabling you to take proactive measures before contracts reach their end dates.',
                    },
                    {
                        title: 'Enhanced Compliance',
                        sub: "Achieve unparalleled compliance with TIMBA's secure environment. Rest easy knowing your contracts are stored with the utmost security and privacy.",
                    },
                ]}
                img="/assets/pr (7).png"
                subText="From secure storage to intelligent alerts, TIMBA revolutionizes the way you manage contracts, ensuring precision, security, and efficiency every step of the way. TIMBA - Your Pathway to Contract Excellence."
                fs="2.625rem"
                bHero="Have a bigger Team !"
            />
        </Box>
    );
};
