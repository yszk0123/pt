import Amplify from 'aws-amplify';

export default function configureAuth() {
  Amplify.configure({
    Auth: {
      identityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
      region: process.env.REACT_APP_COGNITO_REGION,
      userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
      userPoolWebClientId:
        process.env.REACT_APP_COGNITO_USER_POOL_WEB_CLIENT_ID,
    },
  });
}
