/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  In this file, we configured URL and componenet for that URL
  #lazy           : Lazy loading is a technique that enables us to load a specific component when a particular route is accessed. 
                    It exponentially enhances the load time and the loading speed. At the same time, it increases the react application performance.
  #React.Suspense : React Suspense here to offer a fallback React element when the component is lazy loaded from the server.
*/

import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('../pages/home/Home'))
const RecoilPage = lazy(() => import('../pages/recoil/RecoilPage'))

const RoutesFile = () => {
  return (
    <React.Suspense fallback={<p className="loadingblock"> Loading... </p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RecoilPage" element={<RecoilPage />} />
      </Routes>
    </React.Suspense>
  )
}

export default RoutesFile
