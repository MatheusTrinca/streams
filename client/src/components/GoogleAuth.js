import React, { useEffect } from 'react';

const GoogleAuth = () => {
  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '86969008379-rtspmv8mbi6t85g5313q23sebl5a5dl8.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }, []);

  return <div>Google Auth</div>;
};

export default GoogleAuth;
