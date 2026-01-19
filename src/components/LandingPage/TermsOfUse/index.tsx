import { Box, Container, Heading, Text, UnorderedList, ListItem, VStack } from '@chakra-ui/react';
import { PageHero } from '@components/bits-utils/Heros/PageHero';

export const TermsOfUse = () => {
 return (
  <Box>
   <PageHero
    img="/assets/terms.png"
    text="Terms of Use"
    bg="brand.400"
   />
   <Container maxW="container.lg" py={['2rem', '4rem']}>
    <VStack align="start" spacing={6} color="#636B83">

     {/* Introduction */}
     <Box>
      <Heading as="h2" size="lg" mb={4} color="brand.100">
       Introduction: Our Commitment to Your Privacy
      </Heading>
      <Text mb={4}>
       At Timba, we are building more than software. We are building a trusted operational partner for modern businesses. Timba is a web-based platform designed to help organizations streamline workflows, manage team collaboration, track projects and time, coordinate onboarding, and oversee operational and financial activities in one unified environment.
      </Text>
      <Text mb={4}>
       Trust is foundational to how we operate. That trust begins with how we handle your data. We believe that clarity, transparency, and meaningful control over your personal information are essential to maintaining that trust.
      </Text>
      <Text mb={4}>
       This Privacy Policy explains in detail how Timba Software Inc. (“Timba,” “we,” “our,” or “us”) collects, uses, discloses, stores, and protects your personal information when you use our website, platform, and related services (collectively, the “Services”).
      </Text>
      <Text>
       This document is intended to give you a clear and practical understanding of our data practices. We encourage you to read it carefully. By accessing or using our Services, you acknowledge that your personal information will be handled as described in this Privacy Policy.
      </Text>
     </Box>

     {/* Section 1 */}
     <Box>
      <Heading as="h2" size="lg" mb={4} color="brand.100">
       1. Scope and Identifying the Data Controller
      </Heading>
      <Text mb={4}>
       This Privacy Policy applies to personal information processed through your interaction with:
      </Text>
      <UnorderedList spacing={2} pl={4} mb={4}>
       <ListItem>The Timba web application (<a href="https://app.timba.ca" style={{ color: '#2EAFA3' }}>https://app.timba.ca</a>)</ListItem>
       <ListItem>Our public website (<a href="https://www.timba.ca" style={{ color: '#2EAFA3' }}>https://www.timba.ca</a>)</ListItem>
       <ListItem>Any current or future web-based features, tools, or dashboards</ListItem>
       <ListItem>Communications with our support, sales, onboarding, or marketing teams</ListItem>
      </UnorderedList>

      <Text fontWeight="bold" mb={2}>Data Controller:</Text>
      <Text mb={4}>
       The data controller responsible for your personal information is <strong>Olade consulting Inc</strong>, a company incorporated under the laws of Canada.
      </Text>
      <Text>
       If you are located in the European Economic Area (EEA) or the United Kingdom (UK), Timba Software Inc. remains the controller of your personal data, and we process such data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR).
      </Text>
     </Box>

     {/* Section 2 */}
     <Box>
      <Heading as="h2" size="lg" mb={4} color="brand.100">
       2. Detailed Information We Collect
      </Heading>
      <Text mb={4}>
       We collect information that is reasonably necessary to operate, secure, support, and improve the Timba platform. The information we collect falls into the following categories.
      </Text>

      <Heading as="h3" size="md" mb={3} color="brand.100">
       2.1 Information You Provide Directly
      </Heading>

      <Text fontWeight="bold" mb={2}>Account and Profile Information</Text>
      <Text mb={2}>When you create or manage an account, we may collect:</Text>
      <UnorderedList spacing={1} pl={4} mb={4}>
       <ListItem>Full name</ListItem>
       <ListItem>Business or organization name</ListItem>
       <ListItem>Email address</ListItem>
       <ListItem>Phone number</ListItem>
       <ListItem>Login credentials</ListItem>
       <ListItem>Time zone, language preferences, and profile settings</ListItem>
      </UnorderedList>

      <Text fontWeight="bold" mb={2}>Business and Operational Content</Text>
      <Text mb={2}>This includes information you or your team upload or generate while using Timba, such as:</Text>
      <UnorderedList spacing={1} pl={4} mb={4}>
       <ListItem>Project details and timelines</ListItem>
       <ListItem>Task assignments and collaboration notes</ListItem>
       <ListItem>Time tracking data</ListItem>
       <ListItem>Uploaded documents and files</ListItem>
       <ListItem>Client, contractor, or team member records</ListItem>
       <ListItem>Operational and financial records associated with your workflow</ListItem>
      </UnorderedList>

      <Text fontWeight="bold" mb={2}>Billing and Payment Information</Text>
      <Text mb={2}>For paid subscriptions, we collect billing details such as:</Text>
      <UnorderedList spacing={1} pl={4} mb={4}>
       <ListItem>Legal business name</ListItem>
       <ListItem>Billing address</ListItem>
       <ListItem>Subscription plan details</ListItem>
      </UnorderedList>
      <Text>
       Payments are processed through PCI-DSS-compliant third-party payment processors (such as Stripe). Timba does not store full credit card numbers. We may retain limited billing references (such as the last four digits of a card) for record-keeping and support purposes.
      </Text>
     </Box>

    </VStack>
   </Container>
  </Box>
 );
};
