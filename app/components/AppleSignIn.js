import { useEffect } from 'react';

const AppleSignIn = () => {
  useEffect(() => {
    // Dynamically load the Apple sign-in script
    const script = document.createElement('script');
    script.src = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      // Initialize Apple ID if the script has loaded
      if (window.AppleID) {
        window.AppleID.auth.init({
          clientId: process.env.NEXT_PUBLIC_APPLE_CLIENT_ID,
          scope: 'name email',
          redirectURI: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
          state: 'state',
          nonce: 'nonce',
          usePopup: true,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Clean up script if component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="appleid-signin" className="signin-button" data-color="white" data-border="true" data-type="sign-in">
    </div>
  );
};

export default AppleSignIn;