import {
    Box,
    Button,
    Circle,
    HStack,
    Icon,
    Text,
    VStack,
} from '@chakra-ui/react';
import { MainStyleHero } from '@components/bits-utils/Heros/MainStyleHero';
import { MainTitle } from '@components/bits-utils/Heros/MainTitle';
import { SolutionHero } from '@components/bits-utils/Heros/SolutionHero';
import { solutions } from '@components/Icons/solutionsIcon';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';

const SolutionBox = ({ label, icon, desc }) => {
    return (
        <HStack
            bgColor="#f8fbfb"
            px={['20px', '40px']}
            border=".8px solid #e4e6ea"
            h={['auto', '152px']}
            py={['1rem', '0']}
            gap={['1rem', '50px']}
        >
            <Icon as={icon} fontSize="50px" />
            <VStack gap="0px" align="flex-start">
                <Text
                    fontSize={['1rem', '18px']}
                    color="brand.100"
                    fontWeight={600}
                    m="0"
                >
                    {label}
                </Text>
                <Text
                    fontSize={['.85rem', '1rem']}
                    color="#636b83"
                    lineHeight="24px"
                    m="0 !important"
                >
                    {desc}
                </Text>
            </VStack>
        </HStack>
    );
};

export const SolutionsHomePage = () => {
    const useCases = [
        {
            key: 1,
            icon: solutions.a,
            label: 'Remote work',
            desc: 'Align your remote workforce effortlessly with Timba’s improved dashboard and project management tools. Easily assign team members to multiple departments, track time, collaborate across projects, and streamline payment processes.',
            url: '/',
        },
        {
            key: 2,
            icon: solutions.b,
            label: 'For Large Teams',
            desc: 'With Timba’s enhanced project management features, large teams can now assign multiple project managers to each project, ensuring smooth coordination and task delegation. Monitor progress, edit tasks on the go, and include hours worked directly into project timelines all from one central platform.',
            url: '/',
        },
        {
            key: 3,
            icon: solutions.c,
            label: 'Consultants',
            desc: 'Timba’s flexible project management module lets consultants track time spent on specific tasks, reassess workloads, and optimize project delivery for enhanced client satisfaction.',
            url: '/',
        },
        {
            key: 4,
            icon: solutions.d,
            label: 'Freelancers',
            desc: 'For freelancers juggling multiple clients and tasks, Timba simplifies the process with automated timesheets and payment management tools. Add comments, track task progress, and log hours without needing to submit timesheets manually, ensuring seamless project delivery and invoicing.',
            url: '/',
        },
    ];
    const industries = [
        {
            key: 1,
            icon: solutions.e,
            label: 'Construction',
            desc: 'Timba simplifies construction team management with real-time time tracking, resource allocation, and task scheduling. Keep your construction projects on track by adding, editing, and tracking progress with Gantt charts and GPS monitoring.',
            url: '/',
        },
        {
            key: 2,
            icon: solutions.f,
            label: 'Government',
            desc: 'From assigning team members across departments to managing cross-functional teams, Timba enhances workforce efficiency for government entities. Track work hours, manage leave requests, approve training sessions, and ensure compliance with detailed reporting.',
            url: '/',
        },
        {
            key: 3,
            icon: solutions.g,
            label: 'Creative Agencies',
            desc: 'Deliver creativity on time and within budget. Manage multiple projects, track client billable hours, assign team members, and monitor productivity. With Timba, creative agencies can focus on delivering top-notch work without worrying about administrative tasks.',
            url: '/',
        },
        {
            key: 4,
            icon: solutions.h,
            label: 'Manufacturing',
            desc: 'Optimize workforce productivity with Timba’s shift monitoring, automated timesheets, and real-time project updates. Track progress, assign tasks, and manage shifts efficiently to ensure maximum productivity and reduced operational costs.',
            url: '/',
        },
        {
            key: 5,
            icon: solutions.i,
            label: 'Technology',
            desc: 'Manage complex projects with Timba’s project management tools, including task assignments, audit trails, Gantt charts, and productivity tracking. For tech teams, Timba provides visibility into project workflows while ensuring compliance with industry standards.',
            url: '/',
        },
        {
            key: 6,
            icon: solutions.j,
            label: 'Staffing & Recruiting',
            desc: 'Timba’s all-in-one platform makes it easy to track work hours, automate payments, and manage candidate profiles. For staffing and recruiting firms, Timba simplifies the entire hiring and workforce management process.',
            url: '/',
        },
        {
            key: 6,
            icon: solutions.k,
            label: 'Subcontractors',
            desc: `Streamline your subcontracting work with Timba's intuitive project management and time tracking tools. Easily manage multiple projects, track billable hours, and generate detailed reports for clients. Timba's automated timesheets and payment management features ensure accurate invoicing and efficient communication with clients.`,
            url: '/',
        },
        {
            key: 7,
            icon: solutions.l,
            label: 'Human Resource Managers',
            desc: `Simplify employee management tasks with Timba's comprehensive HR tools. Easily track employee hours, manage leave requests, and onboard new hires seamlessly. Timba's automated processes and reporting features streamline HR workflows and provide valuable insights into your team's performance.`,
            url: '/',
        },
        {
            key: 8,
            icon: solutions.m,
            label: 'Recruiters',
            desc: `Efficiently manage your recruiting pipeline with Timba's collaborative tools. Track candidate progress, schedule interviews, and collaborate with hiring teams seamlessly. Timba's streamlined workflows and communication features help you find and hire top talent efficiently.`,
            url: '/',
        },
        {
            key: 9,
            icon: solutions.n,
            label: 'Entrepreneurs',
            desc: `Grow your business with Timba's versatile project management and team management tools. Easily track project progress, manage team performance, and streamline administrative tasks. Timba's intuitive interface and automation features empower entrepreneurs to focus on strategic growth and achieve their business goals.`,
            url: '/',
        },
    ];
    const router = useRouter();

    const [currentSolution, setCurrentSolution] = useState(1);
    const solutionOptions = [
        { key: 1, label: 'Use cases' },
        { key: 2, label: 'Industries' },
    ];
    const useCaseRef = useRef(null);
    const industriesRef = useRef(null);

    const goToSolution = (key) => {
        setCurrentSolution(key);
        if (key == 1) {
            (useCaseRef?.current as any)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            return;
        }
        if (key == 2) {
            (industriesRef?.current as any)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            return;
        }
    };
    return (
        <Box>
            <MainStyleHero
                bgColor="brand.100"
                btnClick={() => router.push('/pricing')}
                btnText="Sign Up For Free"
                desc="Timba empowers remote teams, SMEs, freelancers, and organizations across industries with an advanced platform for time management, operational efficiency, and seamless project handling. With our latest updates, managing cross-functional teams and complex projects has never been easier."
                title="Every Team Thrives with Timba"
                gap={['20px', '60px']}
                sub="Sign up to enjoy all features for free ( 30 days trial - No credit card required.)"
                mainH={['70vh', '80vh']}
                img="/assets/solu.jpeg"
            />
            <Box bgColor="white" w="full" pb="111px">
                <Box w={['85%', '80%']} mx="auto">
                    <Box pt="70px">
                        <MainTitle
                            text="Our Solution"
                            sub="Discover how Timba can transform your operations, no matter your industry or team size. From project management to daily task tracking, Timba offers the flexibility and control your teams need to thrive."
                            w={['100%', '70%']}
                        />
                    </Box>
                    <Box mt={['50px', '100px']}>
                        <HStack
                            align="flex-start"
                            gap="60px"
                            flexDir={['column', 'row']}
                        >
                            <Box
                                w={['100%', '25%']}
                                pos={['static', 'sticky']}
                                top="100px"
                            >
                                <Box
                                    pb="17px"
                                    pt="36px"
                                    borderBottom="1px solid #e4e6ea"
                                >
                                    <Text
                                        fontSize="24px"
                                        fontWeight={600}
                                        color="brand.100"
                                        mb="0"
                                    >
                                        Solutions
                                    </Text>
                                </Box>
                                <VStack
                                    mt="13px"
                                    align="flex-start"
                                    p="1rem 0 1.2rem"
                                    gap="0"
                                    borderBottom="1px solid #e4e6ea"
                                >
                                    {solutionOptions?.map((x) => (
                                        <HStack
                                            h={['48px']}
                                            gap="12px"
                                            cursor="pointer"
                                            onClick={() => goToSolution(x?.key)}
                                        >
                                            <Circle
                                                size="10px"
                                                bgColor={
                                                    currentSolution === x?.key
                                                        ? 'brand.100'
                                                        : 'transparent'
                                                }
                                            />
                                            <Text
                                                fontWeight={700}
                                                color="brand.100"
                                                mb="0"
                                            >
                                                {x.label}
                                            </Text>
                                        </HStack>
                                    ))}
                                </VStack>
                                <VStack
                                    gap="1rem"
                                    p="48px 32px 32px"
                                    bgColor="#2f4167"
                                    pos="relative"
                                    overflow="hidden"
                                    borderRadius="10px"
                                >
                                    <Text
                                        fontSize={['24px', '31px']}
                                        color="white"
                                        fontWeight="400"
                                        fontFamily="Nunito Sans"
                                        mb="0"
                                        lineHeight={['32.74px']}
                                        textAlign="center"
                                        zIndex={2}
                                    >
                                        Try Timba free for 30 days
                                    </Text>
                                    <Text
                                        fontSize={['14px', '1rem']}
                                        color={'white'}
                                        fontWeight="400"
                                        fontFamily="Nunito"
                                        mb="0"
                                        lineHeight={['19.1px']}
                                        zIndex={2}
                                    >
                                        Get full access to all Timba features
                                        with a free trial. No credit card
                                        needed. Cancel anytime.
                                    </Text>
                                    <Button
                                        fontSize="1.125rem"
                                        color="white"
                                        bgColor="brand.400"
                                        borderRadius="8px"
                                        px="2.5rem"
                                        h="4rem"
                                        onClick={() =>
                                            router.push('/book-a-demo')
                                        }
                                        w={['full', 'fit-content']}
                                        zIndex={2}
                                    >
                                        Book a demo
                                    </Button>
                                    <Circle
                                        size="400px"
                                        pos="absolute"
                                        bottom="-55%"
                                        left="-99%"
                                        bgColor="brand.100"
                                        zIndex={1}
                                    />
                                </VStack>
                            </Box>
                            <Box w={['100%', '75%']}>
                                <Box w="full" ref={useCaseRef}>
                                    <Text
                                        fontSize={['24px', '44px']}
                                        fontWeight={600}
                                        mb="24px"
                                    >
                                        By Use cases
                                    </Text>
                                    <Box
                                        border="1px solid #E4E6EA"
                                        borderRadius="4px"
                                        w="full"
                                    >
                                        {useCases?.map((x) => (
                                            <SolutionBox
                                                key={x?.key}
                                                label={x?.label}
                                                desc={x?.desc}
                                                icon={x?.icon}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                                <Box w="full" mt="51px" ref={industriesRef}>
                                    <Text
                                        fontSize={['24px', '44px']}
                                        fontWeight={600}
                                        mb="24px"
                                    >
                                        Industries
                                    </Text>
                                    <Box
                                        border="1px solid #E4E6EA"
                                        borderRadius="4px"
                                        w="full"
                                    >
                                        {industries?.map((x) => (
                                            <SolutionBox
                                                key={x?.key}
                                                label={x?.label}
                                                desc={x?.desc}
                                                icon={x?.icon}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </HStack>
                    </Box>
                </Box>
            </Box>
            <SolutionHero
                title="Ready to Simplify Workforce Management?"
                sub="Join thousands of businesses that trust Timba to optimize operations, enhance productivity, and manage teams effortlessly."
            />
        </Box>
    );
};
