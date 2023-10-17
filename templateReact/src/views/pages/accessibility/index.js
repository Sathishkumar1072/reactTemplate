/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  This is the main component of the accessibility
  In this component, load the accessibility main page designing and its functionality
*/

import React, { useState } from 'react'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import AccessibilityLists from './Mainpage/Accessibilitylists'
import useAppContext from '../../components/hooks/useToast'
import './index.css'

const Accessibilitytool = ({ selcursortype, bodyStyles }, ref) => {
  const [isOpenPopupOpen, setisOpenPopupOpen] = useState(false)
  const [templateautoclose, setTemplateautoclose] = useState(false)
  const { selectedoption, setAccessibilityOptions } = useAppContext()
  const showmainpage = () => {
    setisOpenPopupOpen(true)
  }

  React.useImperativeHandle(ref, () => ({
    updateAccessibilty: async () => {
      sessionStorage.setItem('popupopenvalue', 'true')
      setTimeout(async () => {
        if (isOpenPopupOpen?.toString()?.toLowerCase() === 'true') {
          await closemainpage('true')
        } else {
          setisOpenPopupOpen(true)
          setisOpenPopupOpen(false)
        }
      }, 0)
    },
  }))

  const closemainpage = async (autoclose = 'false') => {
    sessionStorage.setItem('popupopenvalue', 'false')
    setisOpenPopupOpen(false)
    if (autoclose === 'true') {
      sessionStorage.setItem('popupopenvalue', 'true')
      await openmainpage()
    }
  }

  const openmainpage = () => {
    const getpopupopenstatus = sessionStorage.getItem('popupopenvalue')
    if (getpopupopenstatus === 'true') {
      setisOpenPopupOpen(true)
    }
  }

  const resetfeatursoption = (resetaction) => {
    const allelementarray = []
    if (resetaction?.toString()?.toLowerCase() === 'resetall') {
      localStorage.setItem('getdefaultcss', 'true')
      Object.keys(selectedoption)?.forEach((keyval) => {
        selectedoption[keyval].resetoption = true
        selectedoption[keyval].selectedelementvalue = 0
        allelementarray.push(selectedoption[keyval])
      })
    } else {
      selectedoption[resetaction].resetoption = true
      selectedoption[resetaction].selectedelementvalue = 0
      allelementarray.push(selectedoption[resetaction])
    }
    allelementarray?.length > 0 && setAccessibilityOptions(allelementarray)
  }
  return (
    <>
      <div className="accessibleiconmaindiv" title="Accessibility options">
        <div onClick={(e) => showmainpage(e)}>
          <AccessibilityNewIcon className="accessibleicon" />
        </div>
      </div>
      <div id="accessibilitypopup" className="accessibilitypopupdiv">
        <div className="entities_popup">
          {isOpenPopupOpen && (
            <AccessibilityLists
              closepopup={closemainpage}
              resetoption={resetfeatursoption}
              selcursortype={selcursortype}
              bodyStyles
            />
          )}
        </div>
      </div>
    </>
  )
}

export default React.forwardRef(Accessibilitytool)
