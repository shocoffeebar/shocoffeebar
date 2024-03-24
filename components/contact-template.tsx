import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from '@react-email/components';
import { ContactEmailProps } from '@/types/contact';
import * as React from 'react';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const ContactEmailTemplate = ({ name, type }: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>The place in Winnipeg for European-quality coffee.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://utfs.io/f/2cf1e835-3290-4b09-b32e-324648d8bcc1-worcxp.png`}
          width="300"
          height="150"
          alt="ShoCoffeeBarLogo"
          style={logo}
        />
        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>
          {type === 'Feedback'
            ? 'Thank you for your feedback! We appreciate all and any type of feedback!'
            : type === 'Join Team'
            ? 'Thank you for your interest in joining our team! We will review your application and get back to you!'
            : 'We have received your contact request and will get back to you as soon as possible!'}
        </Text>
        <Text style={paragraph}>
          Best,
          <br />
          The ShoCoffeeBar Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>290 William Ave, Winnipeg, MB R3B 0R1</Text>
      </Container>
    </Body>
  </Html>
);

export default ContactEmailTemplate;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
