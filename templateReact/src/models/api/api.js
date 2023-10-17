/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  #Axios        : Axios is a Javascript library used to make HTTP requests from server or XMLHttpRequests from the browser and it supports the Promise API that is native to JS
  #method       : Type action which we done using this API like, POST,PUT,PATCH,GET,DELETE.
  #url          : API URL,
  #postData     : Request data
  #header       : Recived the client details like browser details, methods, file types and access token also received using this header.
  #appInsights  : Appinsights used to store the logging details in MS-azure.
*/

import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'
import { appInsights } from '../../utils/AppInsigts'

export default function api(configs) {
  const coreDataInstance = axios.create({
    baseURL: ApiUrl ?? '',
    headers: {
      'content-type': 'application/json',
      'Ocp-Apim-Subscription-Key': ApimSubscriptionKey ?? '',
      Authorization: `Bearer ${accessToken}`,
    },
  })

  const getAppData = async (method, url, postData, header) => {
    let requestHeaders = header
    const useidvalue = ''
    const usenamevalue = ''
    if (SignInRequired === 'false') {
      requestHeaders = {
        ...requestHeaders,
        UserType: `Guest`,
      }
    }
    if (!(header && header?.FunctionKey)) {
      requestHeaders = {
        ...requestHeaders,
        Authorization: `Bearer ${accessToken}`,
      }
    }

    const response = await trackPromise(
      coreDataInstance({
        method,
        url,
        data: postData,
        headers: requestHeaders,
      })
        .then((responseData) => {
          appInsights.trackEvent({
            name: 'Api-core',
            properties: {
              postData,
              url,
              userID: useidvalue,
              userName: usenamevalue,
            },
          })
          return responseData
        })
        .catch((err) => {
          // Client error responses ( 400 – 499 )
          if (err?.response?.status <= 400 && err?.response?.status >= 499) {
            appInsights.trackException({
              error: new Error(err),
              severityLevel: SeverityLevel.Error,
            })
            authentication.signOut()
            localStorage.clear()
          }
          // Server error responses ( 500 – 599 )
          else if (
            err?.response?.status <= 500 &&
            err?.response?.status >= 599
          ) {
            appInsights.trackException({
              error: new Error(err),
              severityLevel: SeverityLevel.Error,
            })
            throw err
          } else {
            throw err
          }
        })
    )
    return response
  }

  return getAppData
}
