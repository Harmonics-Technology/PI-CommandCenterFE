import { Box, Container, Heading, Text, UnorderedList, ListItem, VStack, Link, SimpleGrid } from '@chakra-ui/react';
import { PageHero } from '@components/bits-utils/Heros/PageHero';

export const TermsOfUse = () => {
 return (
  <Box>
   <PageHero
    img="/assets/terms.png"
    text="Terms of Service"
    bg="brand.400"
   />
   <Container maxW="container.lg" py={['2rem', '4rem']}>
    <VStack align="start" spacing={8} color="#636B83">

     <Text fontWeight="bold">Last Updated: Jan. 12, 2026</Text>

     {/* Summary Overview */}
     <Box p={6} bg="gray.50" borderRadius="md" width="100%">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       Summary Overview
      </Heading>
      <Text mb={4}>This summary highlights key points of these Terms of Service. It does not replace the full Terms below.</Text>
      <UnorderedList spacing={2} pl={4}>
       <ListItem>Timba is a business operations platform provided by a Canadian company.</ListItem>
       <ListItem>You own your data; Timba uses it only to operate and improve the Services.</ListItem>
       <ListItem>You are responsible for your account activity and how you use the platform.</ListItem>
       <ListItem>Paid plans are billed on a subscription basis.</ListItem>
       <ListItem>Timba provides the Services “as is” and limits liability as allowed by law.</ListItem>
       <ListItem>Ontario law governs these Terms.</ListItem>
      </UnorderedList>
     </Box>

     {/* Table of Contents */}
     <Box width="100%">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       Table of Contents
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={2}>
       <Link href="#acceptance-of-terms" color="brand.100">1. Acceptance of Terms</Link>
       <Link href="#eligibility-and-authority" color="brand.100">2. Eligibility and Authority</Link>
       <Link href="#description-of-services" color="brand.100">3. Description of the Services</Link>
       <Link href="#account-registration" color="brand.100">4. Account Registration and Responsibilities</Link>
       <Link href="#user-content" color="brand.100">5. User Content and Data Ownership</Link>
       <Link href="#acceptable-use" color="brand.100">6. Acceptable Use</Link>
       <Link href="#subscriptions-fees" color="brand.100">7. Subscriptions, Fees, and Payments</Link>
       <Link href="#third-party-services" color="brand.100">8. Third‑Party Services and Integrations</Link>
       <Link href="#intellectual-property" color="brand.100">9. Intellectual Property</Link>
       <Link href="#confidentiality" color="brand.100">10. Confidentiality</Link>
       <Link href="#suspension-termination" color="brand.100">11. Suspension and Termination</Link>
       <Link href="#disclaimers" color="brand.100">12. Disclaimers</Link>
       <Link href="#limitation-of-liability" color="brand.100">13. Limitation of Liability</Link>
       <Link href="#indemnification" color="brand.100">14. Indemnification</Link>
       <Link href="#governing-law" color="brand.100">15. Governing Law and Jurisdiction</Link>
       <Link href="#changes-to-terms" color="brand.100">16. Changes to These Terms</Link>
       <Link href="#miscellaneous" color="brand.100">17. Miscellaneous</Link>
       <Link href="#contact-information" color="brand.100">18. Contact Information</Link>
      </SimpleGrid>
     </Box>

     {/* Section 1 */}
     <Box id="acceptance-of-terms" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       1. Acceptance of Terms
      </Heading>
      <Text mb={4}>
       These Terms of Service (“Terms”) govern your access to and use of the Timba website, platform, and related services (collectively, the “Services”). The Services are operated by Pro Insight Consulting., a company incorporated under the laws of Canada (“Timba,” “we,” “our,” or “us”).
      </Text>
      <Text>
       By accessing or using the Services, creating an account, or clicking to accept these Terms, you agree to be legally bound by them and by our <Link href="/privacy-policy" color="#2EAFA3">Privacy Policy</Link>. If you do not agree, you must not use the Services.
      </Text>
     </Box>

     {/* Section 2 */}
     <Box id="eligibility-and-authority" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       2. Eligibility and Authority
      </Heading>
      <Text mb={2}>You may use the Services only if:</Text>
      <UnorderedList spacing={2} pl={4} mb={4}>
       <ListItem>You are at least 18 years old;</ListItem>
       <ListItem>You have the legal capacity to enter into a binding agreement; and</ListItem>
       <ListItem>If using the Services on behalf of an organization, you confirm that you have authority to bind that organization.</ListItem>
      </UnorderedList>
      <Text>
       You are responsible for ensuring that your use of the Services complies with all applicable laws.
      </Text>
     </Box>

     {/* Section 3 */}
     <Box id="description-of-services" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       3. Description of the Services
      </Heading>
      <Text mb={4}>
       Timba provides a web‑based platform designed to help organizations manage workflows, projects, collaboration, onboarding, operational tracking, and related business activities.
      </Text>
      <Text>
       The Services may evolve over time. We may add, modify, or discontinue features without liability. Timba does not provide legal, accounting, tax, or financial advisory services.
      </Text>
     </Box>

     {/* Section 4 */}
     <Box id="account-registration" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       4. Account Registration and Responsibilities
      </Heading>
      <Text mb={2}>To access certain features, you must create an account. You agree to:</Text>
      <UnorderedList spacing={2} pl={4} mb={4}>
       <ListItem>Provide accurate and current information;</ListItem>
       <ListItem>Safeguard your login credentials;</ListItem>
       <ListItem>Notify us promptly of unauthorized account access.</ListItem>
      </UnorderedList>
      <Text>
       You are responsible for all activity under your account. Timba is not liable for losses resulting from unauthorized access caused by your failure to protect credentials.
      </Text>
     </Box>

     {/* Section 5 */}
     <Box id="user-content" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       5. User Content and Data Ownership
      </Heading>
      <Heading as="h4" size="sm" mb={2} color="brand.100">5.1 Ownership</Heading>
      <Text mb={4}>
       You retain ownership of all data, content, files, and information you upload or generate through the Services (“User Content”).
      </Text>
      <Heading as="h4" size="sm" mb={2} color="brand.100">5.2 License to Timba</Heading>
      <Text mb={4}>
       You grant Timba a limited, non‑exclusive, worldwide license to host, process, transmit, and display User Content solely to provide, maintain, secure, and improve the Services.
      </Text>
      <Heading as="h4" size="sm" mb={2} color="brand.100">5.3 Your Responsibilities</Heading>
      <Text>
       You represent that you have all rights necessary to submit User Content and that such content does not violate laws or third‑party rights.
      </Text>
     </Box>

     {/* Section 6 */}
     <Box id="acceptable-use" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       6. Acceptable Use
      </Heading>
      <Text mb={2}>You agree not to:</Text>
      <UnorderedList spacing={2} pl={4} mb={4}>
       <ListItem>Use the Services for unlawful or fraudulent purposes;</ListItem>
       <ListItem>Interfere with system integrity or security;</ListItem>
       <ListItem>Attempt unauthorized access to data or systems;</ListItem>
       <ListItem>Upload malware or harmful code;</ListItem>
       <ListItem>Reverse engineer or resell the Services without permission.</ListItem>
      </UnorderedList>
      <Text>
       Timba may suspend or terminate access for violations.
      </Text>
     </Box>

     {/* Section 7 */}
     <Box id="subscriptions-fees" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       7. Subscriptions, Fees, and Payments
      </Heading>
      <Text mb={4}>
       Some features require paid subscriptions. By subscribing, you agree to pay applicable fees and authorize Timba or its payment processors to charge your payment method.
      </Text>
      <Text>
       Fees are non‑refundable unless required by law or expressly stated. Pricing changes will be communicated in advance.
      </Text>
     </Box>

     {/* Section 8 */}
     <Box id="third-party-services" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       8. Third‑Party Services and Integrations
      </Heading>
      <Text>
       The Services may integrate with third‑party tools. Timba is not responsible for third‑party services, content, or practices. Your use of third‑party services is governed by their own terms.
      </Text>
     </Box>

     {/* Section 9 */}
     <Box id="intellectual-property" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       9. Intellectual Property
      </Heading>
      <Text mb={4}>
       The Services and all related intellectual property (excluding User Content) belong to Timba or its licensors and are protected by applicable laws.
      </Text>
      <Text>
       You are granted a limited, non‑exclusive, non‑transferable right to use the Services during your subscription.
      </Text>
     </Box>

     {/* Section 10 */}
     <Box id="confidentiality" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       10. Confidentiality
      </Heading>
      <Text>
       Each party agrees to protect the other’s confidential information and use it only for purposes related to the Services, unless disclosure is required by law.
      </Text>
     </Box>

     {/* Section 11 */}
     <Box id="suspension-termination" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       11. Suspension and Termination
      </Heading>
      <Text mb={4}>
       Timba may suspend or terminate access for violations, non‑payment, security concerns, or legal requirements.
      </Text>
      <Text>
       You may terminate your account at any time. Upon termination, access to the Services will end subject to data retention obligations described in our Privacy Policy.
      </Text>
     </Box>

     {/* Section 12 */}
     <Box id="disclaimers" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       12. Disclaimers
      </Heading>
      <Text>
       The Services are provided “as is” and “as available.” Timba disclaims all warranties to the fullest extent permitted by law.
      </Text>
     </Box>

     {/* Section 13 */}
     <Box id="limitation-of-liability" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       13. Limitation of Liability
      </Heading>
      <Text mb={4}>
       To the maximum extent permitted by law, Timba will not be liable for indirect, incidental, consequential, or punitive damages.
      </Text>
      <Text>
       Timba’s total liability shall not exceed the fees paid by you in the twelve (12) months preceding the claim.
      </Text>
     </Box>

     {/* Section 14 */}
     <Box id="indemnification" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       14. Indemnification
      </Heading>
      <Text>
       You agree to indemnify and hold harmless Timba from claims arising from your use of the Services, User Content, or violation of these Terms.
      </Text>
     </Box>

     {/* Section 15 */}
     <Box id="governing-law" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       15. Governing Law and Jurisdiction
      </Heading>
      <Text>
       These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Courts located in Ontario, Canada shall have exclusive jurisdiction.
      </Text>
     </Box>

     {/* Section 16 */}
     <Box id="changes-to-terms" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       16. Changes to These Terms
      </Heading>
      <Text>
       We may update these Terms periodically. Continued use of the Services after changes become effective constitutes acceptance.
      </Text>
     </Box>

     {/* Section 17 */}
     <Box id="miscellaneous" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       17. Miscellaneous
      </Heading>
      <Text>
       These Terms constitute the entire agreement. If any provision is unenforceable, the remaining provisions remain in effect.
      </Text>
     </Box>

     {/* Section 18 */}
     <Box id="contact-information" scrollMarginTop="100px">
      <Heading as="h3" size="md" mb={4} color="brand.100">
       18. Contact Information
      </Heading>
      <Text mb={2}>Email: <Link href="mailto:support@timba.ca" color="#2EAFA3">support@timba.ca</Link></Text>
      <Text mb={2}>Privacy: <Link href="mailto:info@timba.ca" color="#2EAFA3">info@timba.ca</Link></Text>
      <Text>Address: 25 Sheppard Avenue West, Suite 300, Toronto, ON, Canada</Text>
     </Box>

    </VStack>
   </Container>
  </Box>
 );
};
