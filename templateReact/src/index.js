/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  This is the App starting file of the application.
  StrictMode  : StrictMode is a tool for highlighting potential problems in an application. Like Fragment , 
                StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
