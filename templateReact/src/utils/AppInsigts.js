/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  #Appinsights        : Appinsights used to store the logging details in MS-azure.
  #instrumentationKey : this instrumentation key identifies the resource that you want to associate your telemetry data with.
  #APP_APPINSIGHTKEY  : APP_APPINSIGHTKEY stored in process env file and used.
  #globalHistory      : This is a simple helper library to live alongside react-router-4 to help you access history object from the wherever file in your application
*/

import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import {
  ReactPlugin,
  withAITracking,
} from '@microsoft/applicationinsights-react-js'
import { globalHistory } from '@reach/router'
const reactPlugin = new ReactPlugin()
const ai = new ApplicationInsights({
  config: {
    instrumentationKey: process.env.APP_APPINSIGHTKEY,
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: { history: globalHistory },
    },
  },
})
ai.loadAppInsights()

export default (Component) => withAITracking(reactPlugin, Component)
export const { appInsights } = ai
