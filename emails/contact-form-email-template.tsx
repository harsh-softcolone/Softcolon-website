import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface Props {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  companyName?: string;
}

export const ContactFormEmailTemplate = ({
  fullName = 'Sarah Johnson',
  email = 'sarah.johnson@example.com',
  phone = '+1 (555) 987-6543',
  subject = 'Website Development Inquiry',
  message = "Hi there! I'm looking to redesign my small business website and would love to discuss your web development services. I run a local bakery and need an e-commerce solution to sell our products online. Could we schedule a call this week to discuss pricing and timeline?",
  companyName = 'Softcolon Pvt. Ltd.',
}: Props) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>
        You&apos;re now ready to make live transactions with Stripe!
      </Preview>
      <Container style={container}>
        <Section style={box}>
          {/* Alert Banner */}
          <div style={alertBanner}>
            <span style={alertBannerText}>🔔 New Contact Inquiry Received</span>
          </div>
          <Text style={subTitle}>
            You&apos;ve received a new inquiry through your website contact
            form. Here are the details:
          </Text>
          <Hr style={hr} />
          {/* Centered Card */}
          <Container style={container}>
            <Section style={detailsContainer}>
              <Text style={heading}>Customer Information</Text>

              <div style={pair}>
                <Text style={labelFirst}>Name:</Text>
                <Text style={value}>{fullName}</Text>
              </div>
              <div style={pair}>
                <Text style={label}>Email:</Text>
                <Link href={`mailto:${email}`} style={anchor}>
                  {email}
                </Link>
              </div>
              <div style={pair}>
                <Text style={label}>Phone:</Text>
                <Link href={`tel:${phone}`} style={phoneNumber}>
                  {phone}
                </Link>
              </div>
              <div style={pair}>
                <Text style={label}>Subject:</Text>
                <Text style={value}>{subject}</Text>
              </div>
              <div style={pair}>
                <Text style={label}>Message:</Text>
                <Text style={value}>{message}</Text>
              </div>
            </Section>
            {/* Priority Section */}
            <Section style={prioritySection}>
              <Text style={prioritySectionText}>
                💡 <strong>Response Recommendation:</strong> Aim to respond
                within 2-4 hours for the best customer experience.
              </Text>
            </Section>
          </Container>
          <Hr style={hr} />
          <Text style={footer}>
            {companyName}, 308, 3rd Floor, Kasturi Pride, 326, near Vishala
            Supreme, Nikol, Ahmedabad, Gujarat 382350, India
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmailTemplate;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 20px',
  marginBottom: '30px',
};

const box = {
  padding: '0 25px',
};

const alertBanner = {
  backgroundColor: '#008000',
  color: '#ffffff',
  padding: '10px',
  textAlign: 'center' as const,
  borderRadius: '5px',
};

const alertBannerText = {
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const heading = {
  color: '#525f7f',
  fontSize: '20px',
  lineHeight: '24px',
  textAlign: 'center' as const,
};

const subTitle = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'center' as const,
};

const detailsContainer = {
  backgroundColor: '#f6f9fc',
  padding: '20px',
  borderRadius: '5px',
};

const anchor = {
  color: '#556cd6',
};

const phoneNumber = {
  color: '#556cd6',
};

const prioritySection = {
  backgroundColor: '#eff6ff',
  borderRadius: '10px',
  marginTop: '20px',
  padding: '0px 10px',
  border: '1px solid #bfdcfc',
};

const prioritySectionText = {
  color: '#4265bb',
  fontSize: '14px',
  lineHeight: '24px',
  textAlign: 'center' as const,
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};

const pair = {
  marginBottom: '18px',
};

const labelFirst = {
  fontWeight: 'bold',
  fontSize: '14px',
  marginBottom: '2px',
  color: '#222',
  marginTop: 0,
};

const label = {
  fontWeight: 'bold',
  fontSize: '14px',
  marginBottom: '2px',
  color: '#222',
  marginTop: '8px',
};

const value = {
  fontSize: '15px',
  color: '#444',
  marginBottom: 0,
  marginTop: 0,
};
