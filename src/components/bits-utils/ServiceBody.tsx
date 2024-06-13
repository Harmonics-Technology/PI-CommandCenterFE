import { Box, Grid, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { MainTitle } from './Heros/MainTitle';
import { ServiceCard } from './ServiceCard';
import {
    ClientOnboard,
    Contarct,
    Emp,
    Leave,
    PayPartner,
    ProjectMgt,
    RobustReport,
    Shift,
    Ts,
} from '@components/Icons';
import { MiniText } from './MiniText';
import { NewHomeStack } from './NewHomeStack';

export const ServiceBody = () => {
    return (
        <Box w="full" bgColor="white">
            <Box py={['1.5rem', '5rem']} mx="auto" w={['90%', '80%']}>
                <MainTitle
                    text="Embark on a Journey of Efficiency with TIMBA's Outstanding Features"
                    w="90%"
                />
                <MiniText
                    text={` Ensure seamless coordination for both in-office and remote teams
            with TIMBA's real-time insights, keeping everyone on track and
            enhancing overall productivity.`}
                    align="center"
                    w={['95%', '80%']}
                    mx="auto"
                />
                {/* <Grid
                templateColumns={['1fr', 'repeat(3,1fr)']}
                gap="2rem"
                mt="2.5rem"
            >
                <ServiceCard
                    icon={ProjectMgt}
                    title="Project Management"
                    sub="Effortlessly streamline your project management process with TIMBA's robust suite of tools designed to elevate your project's efficiency and coordination. Say goodbye to chaos and embrace structured excellence through our state-of-the-art project planning features."
                    bg="white"
                    btn="Learn More"
                    btnClick="/features/project-management"
                />
                <ServiceCard
                    icon={Emp}
                    title="Employee onboarding and Management"
                    sub="TIMBA revolutionizes the way you welcome and nurture new talent, ensuring a swift and effective integration into your organization. Our comprehensive employee onboarding and management tools pave the way for success, right from day one."
                    bg="white"
                    btn="Learn More"
                    btnClick="/features/employee-management"
                />
                <ServiceCard
                    icon={Ts}
                    title="Automated timesheet"
                    sub="Gone are the days of painstakingly recording every minute spent on tasks and projects. TIMBA introduces a game-changing automated timesheet solution, ensuring accuracy, efficiency, and peace of mind for you and your team."
                    bg="white"
                    btn="Learn More"
                    btnClick="/features/automated-timesheet"
                />
                <ServiceCard
                    icon={Contarct}
                    title="Contract Management"
                    sub="Manage all employee contracts securely in one place. Monitor contract status, start and end dates, and milestones. Generate invoices and keep tabs on payments received. Receive alerts for approaching contract expirations."
                    bg="white"
                    btn="Learn More"
                    btnClick="/features/contract-management"
                />
                <ServiceCard
                    icon={PayPartner}
                    title="Payment partner for Remote teams"
                    sub="TIMBA redefines the way you handle payments for your team, eliminating complexities and enabling swift, hassle-free transactions across borders. With seamless integration of leading payment solutions, TIMBA ensures that compensating your team is both convenient and efficient."
                    bg="white"
                    btn="Learn More"
                    btnClick="/features/payment-partner"
                />
                <ServiceCard
                    icon={RobustReport}
                    title="Robust Report"
                    sub="TIMBA empowers you to make informed decisions and optimize your productivity journey through a robust array of reports. From billable hours to productivity metrics, TIMBA's reporting feature provides you with the tools to track progress, make strategic adjustments, and achieve your goals."
                    bg="white"
                    btn="Learn More"
                    btnClick="/features/robust-eport"
                />
                <ServiceCard
                    icon={Leave}
                    title="Leave Management"
                    sub="TIMBA redefines how you handle time off requests, providing a comprehensive platform for efficient leave management. From vacation to sick leave, TIMBA streamlines the process, ensuring seamless request submission, clear approvals, and enhanced team coordination."
                    bg="white"
                    btn="Learn More"
                    btnClick="/features/leave-management"
                />
                <ServiceCard
                    icon={Shift}
                    title="Shift Management"
                    sub="TIMBA reimagines how you manage shifts, providing you with unparalleled flexibility to create, assign, and track shifts effortlessly. With customizable options and real-time availability monitoring, TIMBA ensures optimal coverage while prioritizing your team members' well-being."
                    bg="white"
                    btn="Learn More"
                    btnClick="/features/shift-management"
                />
                <ServiceCard
                    icon={ClientOnboard}
                    title="Client Onboarding"
                    sub="TIMBA revolutionizes how you onboard new clients, ensuring a swift and seamless introduction to your services. Through pre-configured accounts, streamlined access, and insightful tracking, TIMBA empowers subcontractors to create lasting impressions and establish fruitful collaborations."
                    bg="white"
                    btn="Learn More"
                    btnClick="/features/client-onboarding"
                />
            </Grid> */}
                <VStack gap={['73px', '5rem']} m={['68px auto', '6rem auto']}>
                    <NewHomeStack
                        title="Elevate Your Project Management Experience"
                        sub={`Effortlessly streamline your project management process with TIMBA's robust suite of tools designed to elevate your project's efficiency and coordination. Say goodbye to chaos and embrace structured excellence through our state-of-the-art project planning features.`}
                        btn
                        btnClick={'/features/project-management'}
                        img={'/assets/home-a.png'}
                    />
                    <NewHomeStack
                        title="Automated and Simplified Time Tracking"
                        sub={`Gone are the days of painstakingly recording every minute spent on tasks and projects. TIMBA introduces a game-changing automated timesheet solution, ensuring accuracy, efficiency, and peace of mind for you and your team.`}
                        btn
                        btnClick={'/features/automated-timesheet'}
                        img={'/assets/home-b.png'}
                        rtl
                    />
                    <NewHomeStack
                        title="Employee Lifecycle Management"
                        sub={`TIMBA revolutionizes the way you welcome and nurture new talent, ensuring a swift and effective integration into your organization. Our comprehensive employee onboarding and management tools pave the way for success, right from day one`}
                        btn
                        btnClick={'/features/employee-management'}
                        img={'/assets/home-c.png'}
                    />
                    <NewHomeStack
                        title="Leave Management Made Effortless"
                        sub={`TIMBA redefines how you handle time off requests, providing a comprehensive platform for efficient leave management. From vacation to sick leave, TIMBA streamlines the process, ensuring seamless request submission, clear approvals, and enhanced team coordination.`}
                        btn
                        btnClick={'/features/leave-management'}
                        img={'/assets/home-d.png'}
                        rtl
                    />
                    <NewHomeStack
                        title="Shift Management Simplified"
                        sub={`TIMBA revolutionizes the way you welcome and nurture new talent, ensuring a swift and effective integration into your organization. Our comprehensive employee onboarding and management tools pave the way for success, right from day one`}
                        btn
                        btnClick={'/features/shift-management'}
                        img={'/assets/home-e.png'}
                    />
                    <NewHomeStack
                        title="Client and Contract Management"
                        sub={[
                            {
                                title: 'Contract Management',
                                sub: 'Manage all contracts securely in one place. Monitor contract status, start and end dates, and milestones. Generate invoices and keep tabs on payments received. Receive alerts for approaching contract expirations.',
                            },
                            {
                                title: 'Client Onboarding',
                                sub: 'TIMBA revolutionizes how you onboard new clients, ensuring a swift and seamless introduction to your services. Through pre-configured accounts, streamlined access, and insightful tracking, TIMBA empowers subcontractors to create lasting impressions and establish fruitful collaborations.',
                            },
                        ]}
                        isMulti
                        btn
                        btnClick={'/features/client-onboarding'}
                        img={'/assets/home-f.png'}
                        rtl
                    />
                    {/* <NewHomeStack
                        title="Contract Management"
                        sub={`Manage all contracts securely in one place. Monitor contract status, start and end dates, and milestones. Generate invoices and keep tabs on payments received. Receive alerts for approaching contract expirations.`}
                        btn
                        btnClick={'/features/contract-management'}
                        img={'/assets/home-f.png'}
                    /> */}
                    <NewHomeStack
                        title="Realize Your Business Potential with Robust Reports"
                        sub={`TIMBA empowers you to make informed decisions and optimize your productivity journey. Access a robust array of reports, from billable hours to productivity metrics, providing tools to track progress, make strategic adjustments, and achieve your goals.`}
                        btn
                        btnClick={'/features/robust-report'}
                        img={'/assets/home-g.png'}
                    />
                </VStack>
            </Box>
        </Box>
    );
};
