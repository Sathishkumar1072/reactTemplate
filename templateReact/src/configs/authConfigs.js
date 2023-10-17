/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  In this we stored the user's autherntication details to access the server.
*/

const appEnvironment = String(process.env.APP_ENV).toLowerCase()

const b2cPolicies = {
  names: {
    signUpSignIn: 'B2C_1_SignInSignUpDev',
    forgotPassword: 'B2C_1_ResetDev',
  },
  authorities: {
    signUpSignIn: {
      authority: 'https://jsonplaceholder.typicode.com/B2C_1_SignInSignUpDev', //Need to change actual URL based on the project requirement.
    },
    forgotPassword: {
      authority: 'https://jsonplaceholder.typicode.com/B2C_1_ResetDev', //Need to change actual URL based on the project requirement.
    },
  },
  authorityDomain: 'https://jsonplaceholder.typicode.com/', //Need to change actual URL based on the project requirement.
}

function getMSALConfigs() {
  if (appEnvironment === 'qa')
    //Based on the environment (QA)
    return {
      auth: {
        clientId: 'client_id', // Need to configure the client ID from the server
        authority: b2cPolicies.authorities.signUpSignIn.authority,
        knownAuthorities: [b2cPolicies.authorityDomain],
        redirectUri: 'URLRedirect',
        postLogoutRedirectUri: 'LogoutURL',
      },
      cache: {
        cacheLocation: 'localStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO.
        storeAuthStateInCookie: false, // If you wish to store cache items in cookies as well as browser cache, set this to "true".
      },
    }

  return {
    auth: {
      clientId: 'client_id', // Need to configure the client ID from the server
      authority: b2cPolicies.authorities.signUpSignIn.authority,
      knownAuthorities: [b2cPolicies.authorityDomain],
      redirectUri: 'URLRedirect',
      postLogoutRedirectUri: 'LogoutURL',
    },
    cache: {
      cacheLocation: 'localStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO.
      storeAuthStateInCookie: false, // If you wish to store cache items in cookies as well as browser cache, set this to "true".
    },
  }
}

const msalConfig = getMSALConfigs()

export default { msalConfig, b2cPolicies }
