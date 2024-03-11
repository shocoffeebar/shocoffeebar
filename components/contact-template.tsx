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

export const ContactEmailTemplate = ({ name }: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>The place in Winnipeg for European-quality coffee.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-1/414675958_122103462548160193_3185588417398115378_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-Cvm2Ulv7_kAX9PWWXQ&_nc_ht=scontent-ord5-1.xx&oh=00_AfCHdVzW4m3UbNnb9oeqJgVk8RHS8-VVRnlB7NaOn0mfKw&oe=65F3DD24`}
          width="200"
          height="200"
          alt="ShoCoffeeBar Logo"
          style={logo}
        />
        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>
          We have received your contact request and will get back to you as soon
          as possible!
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
