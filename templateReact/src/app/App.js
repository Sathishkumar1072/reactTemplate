/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  In this files we configured router and menubar details
  #MenuLayout     : In this menulayout we mapped all our 
  #BrowserRouter  : BrowserRouter is a router implementation that uses the HTML5 history API (pushstate, replacestate, and popstate events) to keep your UI in sync with the URL.
                    It is the parent component used to store all other components.
  #RecoilRoot     : Recoil used to manage the global state value(s)
*/

import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import RoutesFile from '../views/routes/Routes'
import MenuLayout from '../views/components/custom/menuLayout/MenuLayout'
import ErrorBoundary from '../views/components/custom/errorBoundary/ErrorBoundary'

function App() {
  const bodyStyles = document.body.style

  const navMenuRef = React.useRef()
  const accessbilityRef = React.useRef()
  const [selcursortype, setCursortype] = React.useState({})

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <RecoilRoot>
          <div className="Titlebar">
            <p className="title">FreeFlow</p>
          </div>
          <MenuLayout ref={navMenuRef} />
          <RoutesFile />
        </RecoilRoot>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
