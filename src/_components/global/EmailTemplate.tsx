import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  message: string;

}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message
}) => (
  <div>
    <h1>You have a message from {email} sent from <a href="https://peroxmusic.com">PEROX Website</a></h1>
    <p><strong>{message}</strong></p>
  </div>
);
