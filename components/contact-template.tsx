import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from '@react-email/components';

import { ContactEmailProps } from '@/types/contact';

export const ContactEmailTemplate = ({
  name,
  email,
  phone,
  subject,
  message,
}: ContactEmailProps) => {
  const containerStyle = {
    margin: '0 auto',
    padding: '0 1.25rem',
    marginTop: '1.25rem',
    marginBottom: '3rem',
  };

  const hrStyle = {
    marginTop: '0.625rem',
    marginBottom: '1.875rem',
    border: '1px solid #ccc',
  };

  const textStyle = {
    base: {
      fontSize: '1rem',
      marginTop: '0',
      marginBottom: '0.625rem',
    },
  };

  return (
    <Html>
      <Head />
      <Preview>Contact Message</Preview>
      <Body>
        <Container style={containerStyle}>
          <Text style={textStyle.base}>Name: {name}</Text>
          <Hr style={hrStyle} />
          <Text style={textStyle.base}>Email: {email}</Text>
          <Hr style={hrStyle} />
          <Text style={textStyle.base}>Phone: {phone}</Text>
          <Hr style={hrStyle} />
          <Text style={textStyle.base}>Subject: {subject}</Text>
          <Hr style={hrStyle} />
          <Text style={textStyle.base}>Message: {message}</Text>
          <Hr style={hrStyle} />
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmailTemplate;
