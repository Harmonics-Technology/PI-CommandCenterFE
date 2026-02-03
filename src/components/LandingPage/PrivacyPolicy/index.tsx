import {
 Box,
 Container,
 Heading,
 Text,
 UnorderedList,
 ListItem,
 VStack,
 Table,
 Thead,
 Tbody,
 Tr,
 Th,
 Td,
 TableContainer,
 Link,
} from '@chakra-ui/react';
import { PageHero } from '@components/bits-utils/Heros/PageHero';

export const PrivacyPolicy = () => {
 return (
  <Box>
   <PageHero
    img="/assets/bg-hero.png"
    text="Privacy Policy"
    bg="brand.100"
   />
   <Container maxW="container.lg" py={['2rem', '4rem']}>
    <VStack align="start" spacing={8} color="#636B83">

     {/* Introduction */}
     <Box>
      <Heading as="h2" size="lg" mb={4} color="brand.100">
       Introduction: Our Commitment to Your Privacy
      </Heading>
      <Text mb={4}>
       At Timba, we are building more than software. We are building a trusted partner for your business operations. Timba helps businesses streamline workflows, manage team collaboration, track projects, and handle financial activities in one unified platform. We believe that clarity, transparency, and control over your data are fundamental to that trust.
      </Text>
      <Text mb={4}>
       This Privacy Policy explains in detail how Pro Insight Consulting as ("Timba," "we," "our," or "us") collects, uses, discloses, and protects your personal information when you use our website, platform, mobile applications, and related services (collectively, the "Services").
      </Text>
      <Text mb={4}>
       This document is designed to provide you with a comprehensive understanding of our data practices. We encourage you to read it thoroughly. By using our Services, you agree to the collection and use of information in accordance with this policy.
      </Text>
     </Box>

     {/* Section 1 */}
     <Box>
      <Heading as="h3" size="md" mb={4} color="brand.100">
       1. Scope and Controller
      </Heading>
      <Text mb={3}>
       This Privacy Policy applies to all information processed through your interaction with:
      </Text>
      <UnorderedList spacing={2} pl={4} mb={4}>
       <ListItem>The Timba web application (<Link href="https://tts.timba.ca/login" color="#2EAFA3" isExternal>tts.timba.ca</Link>).</ListItem>
       <ListItem>Our public website (<Link href="https://timba.ca" color="#2EAFA3" isExternal>timba.ca</Link>).</ListItem>
       <ListItem>Our official mobile applications.</ListItem>
       <ListItem>Any communication with our support, sales, or marketing teams.</ListItem>
      </UnorderedList>
      <Text mb={4}>
       The data controller for the personal information described herein is Timba Software Inc., a company incorporated under the laws of Canada.
      </Text>
      <Text>
       For our users in the European Economic Area (EEA) or the United Kingdom (UK), please note that Timba Software Inc. is the controller of your personal data. We process your data in accordance with applicable laws, including the General Data Protection Regulation (GDPR).
      </Text>
     </Box>

     {/* Section 2 */}
     <Box width="100%">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       2. Detailed Information We Collect
      </Heading>
      <Text mb={4}>
       We collect information necessary to provide, secure, and improve our Services. This data falls into three primary categories:
      </Text>

      <Box mb={4}>
       <Heading as="h4" size="sm" mb={2} color="brand.100">
        2.1. Information You Provide Directly
       </Heading>
       <UnorderedList spacing={2} pl={4}>
        <ListItem>
         <Text as="span" fontWeight="bold">Account & Profile Data:</Text> When you create an account, we collect your name, email address, phone number, company name, and password. You may also provide a profile picture, business address, and timezone.
        </ListItem>
        <ListItem>
         <Text as="span" fontWeight="bold">Business Content:</Text> This includes data you entrust to us for managing your business, such as project details, team collaboration notes, documents, tasks, financial records, and other information uploaded to the platform.
        </ListItem>
        <ListItem>
         <Text as="span" fontWeight="bold">Financial and Billing Data:</Text> For paid subscription plans, we require billing information such as your company’s legal name, registered address, and payment details. We use PCI-DSS compliant third-party payment processors (like Stripe) and do not store full credit card numbers on our servers. We may retain the last four digits and expiry date for your reference.
        </ListItem>
        <ListItem>
         <Text as="span" fontWeight="bold">Communications Data:</Text> Contents of your emails, support tickets, chat logs, survey responses, and call recordings with our team. If you participate in a webinar or demo, we record attendance and engagement data.
        </ListItem>
        <ListItem>
         <Text as="span" fontWeight="bold">Integration Data:</Text> Credentials and data you authorize us to access from linked third-party services (e.g., document storage platforms, e-commerce integrations, cloud services).
        </ListItem>
       </UnorderedList>
      </Box>

      <Box mb={4}>
       <Heading as="h4" size="sm" mb={2} color="brand.100">
        2.2. Information Collected Automatically
       </Heading>
       <UnorderedList spacing={2} pl={4}>
        <ListItem>
         <Text as="span" fontWeight="bold">Usage & Log Data:</Text> IP address, browser type and version, device identifiers, operating system, pages viewed, links clicked, and the dates/times of your visits.
        </ListItem>
        <ListItem>
         <Text as="span" fontWeight="bold">Service Telemetry:</Text> Feature usage patterns, clickstreams, time spent on specific functions, error reports, and performance data (e.g., load times).
        </ListItem>
        <ListItem>
         <Text as="span" fontWeight="bold">Location Data:</Text> Approximate location derived from your IP address.
        </ListItem>
        <ListItem>
         <Text as="span" fontWeight="bold">Cookies and Tracking Technologies:</Text> We use cookies, web beacons, pixel tags, and similar technologies:
         <UnorderedList spacing={1} pl={4} mt={1} styleType="circle">
          <ListItem><Text as="span" fontWeight="bold">Essential Cookies:</Text> Required for core functionality (user authentication, session security, payment processing).</ListItem>
          <ListItem><Text as="span" fontWeight="bold">Performance & Analytics Cookies:</Text> Help us understand how our Services are used (e.g., Google Analytics). They collect aggregated, anonymized data.</ListItem>
          <ListItem><Text as="span" fontWeight="bold">Functionality Cookies:</Text> Remember your preferences (like language or timezone).</ListItem>
          <ListItem><Text as="span" fontWeight="bold">Targeting/Advertising Cookies:</Text> Used by us and our partners to deliver relevant marketing on other platforms. You have full control over these non-essential cookies via our Cookie Preference Center.</ListItem>
         </UnorderedList>
        </ListItem>
       </UnorderedList>
      </Box>

      <Box>
       <Heading as="h4" size="sm" mb={2} color="brand.100">
        2.3. Information from Third Parties
       </Heading>
       <Text mb={2}>We may receive information about you from:</Text>
       <UnorderedList spacing={2} pl={4}>
        <ListItem><Text as="span" fontWeight="bold">Business Partners:</Text> Like resellers or referral programs.</ListItem>
        <ListItem><Text as="span" fontWeight="bold">Service Providers:</Text> Such as analytics providers or data enrichment services (where lawful).</ListItem>
        <ListItem><Text as="span" fontWeight="bold">Publicly Available Sources:</Text> Including business registries or social media profiles (for lead generation purposes, where applicable).</ListItem>
        <ListItem><Text as="span" fontWeight="bold">Other Users:</Text> When a team member invites you to collaborate on their Timba account.</ListItem>
       </UnorderedList>
      </Box>
     </Box>

     {/* Section 3 - Table */}
     <Box width="100%">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       3. Purposes of Processing & Legal Bases
      </Heading>
      <Text mb={4}>
       We process your personal information only for specific, legitimate purposes. For EEA/UK users, we rely on the following legal bases under the GDPR:
      </Text>
      <TableContainer border="1px" borderColor="gray.200" borderRadius="md" bg="white">
       <Table variant="simple" size="sm">
        <Thead>
         <Tr>
          <Th whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200" py='1rem'>Purpose of Processing</Th>
          <Th whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200" py='1rem'>Categories of Data Used</Th>
          <Th whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200" py='1rem'>Legal Basis (GDPR)</Th>
         </Tr>
        </Thead>
        <Tbody>
         <Tr>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200"><Text fontWeight="bold">Service Delivery & Contract Fulfillment:</Text> To create your account, provide the core platform features, process payments, and send essential service communications.</Td>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200">Account Data, Business Content, Billing Data, Communications Data</Td>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200">Performance of a Contract (Art. 6(1)(b))</Td>
         </Tr>
         <Tr>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200"><Text fontWeight="bold">Security & Integrity:</Text> To protect our Services, detect and prevent fraud, security incidents, and other malicious activity.</Td>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200">All data categories, primarily Log Data and Account Data</Td>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200">Legitimate Interests (Art. 6(1)(f)) in securing our platform. Legal Obligation (Art. 6(1)(c)) where applicable</Td>
         </Tr>
         <Tr>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200"><Text fontWeight="bold">Service Improvement & Development:</Text> To analyze usage trends, troubleshoot issues, develop new features, and research to improve our Services.</Td>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200">Aggregated and anonymized Usage Data, with limited pseudonymized personal data</Td>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200">Legitimate Interests (Art. 6(1)(f)) in improving and innovating our platform</Td>
         </Tr>
         <Tr>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200"><Text fontWeight="bold">Marketing & Promotional Communication:</Text> To send newsletters, product updates, and promotional offers we believe are relevant to your business.</Td>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200">Account Data, Usage Data, Communications Data</Td>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200">Consent (Art. 6(1)(a)) where required by law, or Legitimate Interests (Art. 6(1)(f)) in promoting our Services to existing customers. You can opt-out anytime</Td>
         </Tr>
         <Tr>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200"><Text fontWeight="bold">Compliance & Legal Obligations:</Text> To comply with applicable laws, regulations, court orders, or valid legal requests.</Td>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200">Account Data, Billing Data, Business Content</Td>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200">Legal Obligation (Art. 6(1)(c))</Td>
         </Tr>
         <Tr>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200"><Text fontWeight="bold">Business Administration:</Text> To enforce our Terms of Service, protect our legal rights, and in connection with a business transaction (e.g., merger, sale).</Td>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200">All data categories as necessary</Td>
          <Td verticalAlign="top" whiteSpace="normal" wordBreak="break-word" border="1px solid" borderColor="gray.200">Legitimate Interests (Art. 6(1)(f)) or Legal Obligation (Art. 6(1)(c))</Td>
         </Tr>
        </Tbody>
       </Table>
      </TableContainer>
     </Box>

     {/* Section 4 */}
     <Box>
      <Heading as="h3" size="md" mb={4} color="brand.100">
       4. Data Sharing and Disclosure
      </Heading>
      <Text mb={4}>
       We do not sell your personal information. We only share your information under these circumstances:
      </Text>
      <UnorderedList spacing={2} pl={4}>
       <ListItem><Text as="span" fontWeight="bold">With Your Explicit Consent:</Text> For example, when connecting a third-party app.</ListItem>
       <ListItem><Text as="span" fontWeight="bold">With Trusted Service Providers (Processors):</Text> Subprocessors who assist in delivering our Services, contractually bound to confidentiality. Examples: cloud hosting, payment processing, support, analytics, marketing automation.</ListItem>
       <ListItem><Text as="span" fontWeight="bold">For Legal Compliance & Protection:</Text> Required by law, subpoena, or legal process; to protect the rights, safety, and property of Timba, our users, or the public.</ListItem>
       <ListItem><Text as="span" fontWeight="bold">In Connection with a Business Transfer:</Text> If involved in a merger, acquisition, financing, or sale of assets, your information may be transferred. We will notify you.</ListItem>
       <ListItem><Text as="span" fontWeight="bold">Professional Advisors:</Text> Lawyers, accountants, auditors, or consultants for necessary professional services.</ListItem>
      </UnorderedList>
     </Box>

     {/* Section 5 */}
     <Box>
      <Heading as="h3" size="md" mb={4} color="brand.100">
       5. International Data Transfers
      </Heading>
      <Text>
       Timba is headquartered in Canada. Your information may be processed in Canada, the United States, and other countries where our subprocessors operate. We ensure adequate safeguards such as Standard Contractual Clauses (SCCs) or other legally recognized mechanisms.
      </Text>
     </Box>

     {/* Section 6 */}
     <Box>
      <Heading as="h3" size="md" mb={4} color="brand.100">
       6. Data Security
      </Heading>
      <Text mb={3}>
       We implement a robust, multi-layered security program, including:
      </Text>
      <UnorderedList spacing={1} pl={4}>
       <ListItem>Encryption (TLS 1.2+ in transit, AES-256 at rest)</ListItem>
       <ListItem>Role-based access and multi-factor authentication</ListItem>
       <ListItem>Firewalls, intrusion detection, patching, vulnerability scanning</ListItem>
       <ListItem>Industry-leading data center security (AWS, Google Cloud)</ListItem>
       <ListItem>SOC 2 Type II certification and annual audits</ListItem>
      </UnorderedList>
     </Box>

     {/* Section 7 */}
     <Box>
      <Heading as="h3" size="md" mb={4} color="brand.100">
       7. Data Retention
      </Heading>
      <UnorderedList spacing={2} pl={4}>
       <ListItem><Text as="span" fontWeight="bold">Account Data:</Text> For the duration of your account lifecycle.</ListItem>
       <ListItem><Text as="span" fontWeight="bold">Business Content:</Text> You control deletion; backups retained briefly for disaster recovery.</ListItem>
       <ListItem><Text as="span" fontWeight="bold">Billing Data:</Text> 7–10 years as required by law.</ListItem>
       <ListItem><Text as="span" fontWeight="bold">Log Data:</Text> Up to 90 days for security/operational monitoring.</ListItem>
       <ListItem><Text as="span" fontWeight="bold">Marketing Data:</Text> Until you withdraw consent.</ListItem>
      </UnorderedList>
     </Box>

     {/* Section 8 */}
     <Box>
      <Heading as="h3" size="md" mb={4} color="brand.100">
       8. Your Rights and Choices
      </Heading>
      <Text mb={3}>
       Depending on your location, you may access, correct, delete, restrict, or object to processing of your personal information.
      </Text>
      <UnorderedList spacing={2} pl={4}>
       <ListItem><Text as="span" fontWeight="bold">Account Settings:</Text> Many rights can be exercised directly.</ListItem>
       <ListItem><Text as="span" fontWeight="bold">Other Requests:</Text> Email <Link href="mailto:info@timba.ca" color="#2EAFA3">info@timba.ca</Link> with verifiable proof of identity.</ListItem>
      </UnorderedList>
     </Box>

     {/* Section 9 */}
     <Box>
      <Heading as="h3" size="md" mb={4} color="brand.100">
       9. Specific Jurisdictional Disclosures
      </Heading>
      <Text fontWeight="bold" mb={2}>Canada (PIPEDA and Provincial Laws)</Text>
      <Text mb={4}>
       Timba is a Canadian company and complies with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy laws, including Quebec’s Law 25, Alberta PIPA, and British Columbia PIPA.
      </Text>
      <Text mb={2}>Canadian users have the right to:</Text>
      <UnorderedList spacing={1} pl={4} mb={4}>
       <ListItem>Access their personal information</ListItem>
       <ListItem>Request corrections</ListItem>
       <ListItem>Withdraw consent (subject to legal or contractual limits)</ListItem>
       <ListItem>Ask questions about how their data is handled</ListItem>
      </UnorderedList>
      <Text mb={4}>
       Personal information may be processed outside Canada and may be subject to foreign laws. If a data breach poses a real risk of significant harm, we will notify affected individuals and relevant authorities as required by law.
      </Text>
      <Text>
       You may file a complaint with the Office of the Privacy Commissioner of Canada if concerns remain unresolved.
      </Text>
     </Box>

     {/* Section 10 */}
     <Box>
      <Heading as="h3" size="md" mb={4} color="brand.100">
       10. Children’s Privacy
      </Heading>
      <Text>
       Services are intended for business use and not for individuals under 18. We do not knowingly collect data from children.
      </Text>
     </Box>

     {/* Section 11 */}
     <Box>
      <Heading as="h3" size="md" mb={4} color="brand.100">
       11. Changes to This Policy
      </Heading>
      <Text>
       We may update this Privacy Policy periodically. Material changes are notified via website, email, or prominent notice within the Services.
      </Text>
     </Box>

     {/* Section 12 */}
     <Box>
      <Heading as="h3" size="md" mb={4} color="brand.100">
       12. Contact Us & Lodging Complaints
      </Heading>
      <Text mb={2}>Attn: Privacy Officer</Text>
      <Text mb={2}>Email: <Link href="mailto:info@timba.ca" color="#2EAFA3">info@timba.ca</Link></Text>
      <Text mb={2}>Mailing Address: 25 Sheppard Avenue West, Suite 300 Toronto, ON, Canada.</Text>
      <Text>
       EEA/UK users can lodge complaints with local data protection authorities, though we prefer the chance to resolve issues directly.
      </Text>
     </Box>

    </VStack>
   </Container>
  </Box>
 );
};
