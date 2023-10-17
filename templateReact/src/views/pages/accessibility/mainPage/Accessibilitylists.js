/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  
*/

import React, { useState, useEffect, useReducer, useCallback } from 'react'
import './Accessibilitylists.css'
import CloseIcon from '@mui/icons-material/Close'
import RefreshIcon from '@mui/icons-material/Refresh'
import { Button, IconButton, InputBase, Paper, Tooltip } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import CardMembershipIcon from '@mui/icons-material/CardMembership'
import SearchIcon from '@mui/icons-material/Search'
import Orientalprofiles from '../Profiles/Orientaladjustments'
import Colorprofiles from '../Profiles/Coloradjustmentsprofile'
import Contentprofiles from '../Profiles/Contentadjustment'
import Accessibilityprofile from '../Profiles/Accessibilityprofiles'
import useAppContext from '../../../components/hooks/useToast'
import { accessibilitydata } from '../Profiles/accessibilityData'
import Tooltipdisplay from '../Profiles/Tooltipvisible'
import { accessibilityProfileCombination } from '../Profiles/AccessibilityProfileCombination'
import AccessibilityStatement from './AccessibilitylistsStatement'
import allcursors from './Cursorwhite'

const AccessibilityLists = ({ closepopup, resetoption, bodyStyles }) => {
  let getcurrentelementvalue = ''
  let cursorselection = {}

  const {
    selectedoption,
    setAccessibilityOptions,
    // setSelectedCursorType,
    setAnimationboolean,
    // readmodehtmldata,
    // setReadmodecontent,
    setacbrowheight,
  } = useAppContext()
  const [currentelement, setCurrentelement] = useState(false)
  const [htmlcurrentdocelement, sethtmlcurrentdocelement] = useState(null)
  useEffect(() => {
    setCurrentelement(!currentelement)
  }, [selectedoption])
  const accessprofile = (elementdata) => {
    const allelementarray = []
    // elementdata = { ...elementdata, selectedtype: 'checkbox' }
    elementdata.selectedtype = 'checkbox'
    allelementarray.push(elementdata)
    // setAccessibilityOptions(elementdata)
    const getprofilecombination =
      accessibilityProfileCombination &&
      accessibilityProfileCombination[elementdata?.target?.id]
    if (getprofilecombination && getprofilecombination?.length > 0) {
      for (let i = 0; i < getprofilecombination?.length; i++) {
        // getprofilecombination?.forEach((ele)=>{
        const customelement = {
          selectedtype: 'button',
          selectedelementid: getprofilecombination[i],
          selectedelementvalue: elementdata?.target?.checked,
          selectedelementdata: {},
        }
        allelementarray.push(customelement)
      }
    }
    allelementarray?.length > 0 && setAccessibilityOptions(allelementarray)
  }

  const statementview = (selectvalue, divid, elementdata) => {
    const allelementarray = []
    elementdata.selectedtype = 'headeroption'
    elementdata.recid = divid
    elementdata.displayoption = selectvalue
    allelementarray.push(elementdata)
    allelementarray?.length > 0 && setAccessibilityOptions(allelementarray)
  }

  const addaccessibilitydivs = () => {
    const div = document.createElement('div')

    return div
  }

  useEffect(() => {
    const applycommonclasstoalldivs = (elementdet) => {
      if (
        !(
          (elementdet?.classList &&
            elementdet?.classList?.contains('accessibleiconmaindiv')) ||
          (elementdet?.classList &&
            elementdet?.classList?.contains('accessibilitypopupdiv'))
        )
      ) {
        if (
          elementdet?.classList?.length > 0 &&
          (elementdet?.tagName?.toString()?.toLowerCase() === 'div' ||
            elementdet?.tagName?.toString()?.toLowerCase() === 'p' ||
            elementdet?.tagName?.toString()?.toLowerCase() === 'span' ||
            elementdet?.tagName?.toString()?.toLowerCase() === 'img')
        ) {
          elementdet?.classList?.remove('ff-accessibility-profile')
          elementdet.className += ' ff-accessibility-profile'
        } else {
          elementdet?.classList?.add('ff-accessibility-profile')
        }

        for (let eleid = 0; eleid < elementdet?.childNodes?.length; eleid++) {
          if (elementdet?.children[eleid])
            applycommonclasstoalldivs(elementdet.children[eleid])
        }
      }
    }

    const appbody = document.getElementsByTagName('body')[0]
    applycommonclasstoalldivs(appbody)
  }, [])

  const removecommonstyle = () => {
    const applycommonclasstoalldivs = (elementdet) => {
      if (
        window
          .getComputedStyle(elementdet, null)
          .getPropertyValue('cursor')
          ?.includes('url') &&
        elementdet.style.length < 2
      ) {
        elementdet.removeAttribute('style')
      } else if (
        window
          .getComputedStyle(elementdet, null)
          .getPropertyValue('cursor')
          ?.includes('url')
      ) {
        elementdet.style.setProperty('cursor', 'default', 'important')
      }

      for (let eleid = 0; eleid < elementdet?.childNodes?.length; eleid++) {
        if (elementdet?.children[eleid])
          applycommonclasstoalldivs(elementdet.children[eleid])
      }
    }

    const appbody = document.getElementsByTagName('body')[0]
    applycommonclasstoalldivs(appbody)
  }

  const contentadjustment = (elementdata) => {
    const allelementarray = []
    // elementdata = { ...elementdata, selectedtype: 'button' }
    // text alignment disable profile
    elementdata.selectedtype = 'button'
    allelementarray.push(elementdata)
    allelementarray?.length > 0 && setAccessibilityOptions(allelementarray)

    if (
      elementdata?.target?.id?.toString()?.toLowerCase() === 'aligntextleft' ||
      elementdata?.selectedelementid?.toString()?.toLowerCase() ===
        'aligntextleft'
    ) {
      if (selectedoption.aligntextright)
        selectedoption.aligntextright.selectedelementvalue = false
      if (selectedoption.aligntextcenter)
        selectedoption.aligntextcenter.selectedelementvalue = false
    }

    if (
      elementdata?.target?.id?.toString()?.toLowerCase() === 'aligntextright' ||
      elementdata?.selectedelementid?.toString()?.toLowerCase() ===
        'aligntextright'
    ) {
      if (selectedoption.aligntextleft)
        selectedoption.aligntextleft.selectedelementvalue = false
      if (selectedoption.aligntextcenter)
        selectedoption.aligntextcenter.selectedelementvalue = false
    }

    if (
      elementdata?.target?.id?.toString()?.toLowerCase() ===
        'aligntextcenter' ||
      elementdata?.selectedelementid?.toString()?.toLowerCase() ===
        'aligntextcenter'
    ) {
      if (selectedoption.aligntextleft)
        selectedoption.aligntextleft.selectedelementvalue = false
      if (selectedoption.aligntextright)
        selectedoption.aligntextright.selectedelementvalue = false
    }

    if (
      elementdata?.target?.id?.toString()?.toLowerCase() === 'monochrome' ||
      elementdata?.selectedelementid?.toString()?.toLowerCase() === 'monochrome'
    ) {
      if (selectedoption.highsturate)
        selectedoption.highsturate.selectedelementvalue = false
      if (selectedoption.lowstaurate)
        selectedoption.lowstaurate.selectedelementvalue = false

      if (selectedoption.lightcontrast)
        selectedoption.lightcontrast.selectedelementvalue = false
      if (selectedoption.highcontrast)
        selectedoption.highcontrast.selectedelementvalue = false
      if (selectedoption.darkcontrast)
        selectedoption.darkcontrast.selectedelementvalue = false
    }

    if (
      elementdata?.target?.id?.toString()?.toLowerCase() === 'highsturate' ||
      elementdata?.selectedelementid?.toString()?.toLowerCase() ===
        'highsturate'
    ) {
      if (selectedoption.monochrome)
        selectedoption.monochrome.selectedelementvalue = false
      if (selectedoption.lowstaurate)
        selectedoption.lowstaurate.selectedelementvalue = false

      if (selectedoption.lightcontrast)
        selectedoption.lightcontrast.selectedelementvalue = false
      if (selectedoption.highcontrast)
        selectedoption.highcontrast.selectedelementvalue = false
      if (selectedoption.darkcontrast)
        selectedoption.darkcontrast.selectedelementvalue = false
    }

    if (
      elementdata?.target?.id?.toString()?.toLowerCase() === 'lowstaurate' ||
      elementdata?.selectedelementid?.toString()?.toLowerCase() ===
        'lowstaurate'
    ) {
      if (selectedoption.monochrome)
        selectedoption.monochrome.selectedelementvalue = false
      if (selectedoption.highsturate)
        selectedoption.highsturate.selectedelementvalue = false

      if (selectedoption.lightcontrast)
        selectedoption.lightcontrast.selectedelementvalue = false
      if (selectedoption.highcontrast)
        selectedoption.highcontrast.selectedelementvalue = false
      if (selectedoption.darkcontrast)
        selectedoption.darkcontrast.selectedelementvalue = false
    }

    if (
      elementdata?.target?.id?.toString()?.toLowerCase() === 'darkcontrast' ||
      elementdata?.selectedelementid?.toString()?.toLowerCase() ===
        'darkcontrast'
    ) {
      if (selectedoption.lightcontrast)
        selectedoption.lightcontrast.selectedelementvalue = false
      if (selectedoption.highcontrast)
        selectedoption.highcontrast.selectedelementvalue = false

      if (selectedoption.monochrome)
        selectedoption.monochrome.selectedelementvalue = false
      if (selectedoption.highsturate)
        selectedoption.highsturate.selectedelementvalue = false
      if (selectedoption.lowstaurate)
        selectedoption.lowstaurate.selectedelementvalue = false
    }

    if (
      elementdata?.target?.id?.toString()?.toLowerCase() === 'lightcontrast' ||
      elementdata?.selectedelementid?.toString()?.toLowerCase() ===
        'lightcontrast'
    ) {
      if (selectedoption.darkcontrast)
        selectedoption.darkcontrast.selectedelementvalue = false
      if (selectedoption.highcontrast)
        selectedoption.highcontrast.selectedelementvalue = false

      if (selectedoption.monochrome)
        selectedoption.monochrome.selectedelementvalue = false
      if (selectedoption.highsturate)
        selectedoption.highsturate.selectedelementvalue = false
      if (selectedoption.lowstaurate)
        selectedoption.lowstaurate.selectedelementvalue = false
    }

    if (
      elementdata?.target?.id?.toString()?.toLowerCase() === 'highcontrast' ||
      elementdata?.selectedelementid?.toString()?.toLowerCase() ===
        'highcontrast'
    ) {
      if (selectedoption.lightcontrast)
        selectedoption.lightcontrast.selectedelementvalue = false
      if (selectedoption.darkcontrast)
        selectedoption.darkcontrast.selectedelementvalue = false

      if (selectedoption.monochrome)
        selectedoption.monochrome.selectedelementvalue = false
      if (selectedoption.highsturate)
        selectedoption.highsturate.selectedelementvalue = false
      if (selectedoption.lowstaurate)
        selectedoption.lowstaurate.selectedelementvalue = false
    }

    if (
      elementdata?.target?.id?.toString()?.toLowerCase() === 'bigcursorblack' ||
      elementdata?.selectedelementid?.toString()?.toLowerCase() ===
        'bigcursorblack'
    ) {
      if (selectedoption && selectedoption.bigcursorwhite) {
        selectedoption.bigcursorwhite.selectedelementvalue = false
      }
    }

    if (
      elementdata?.target?.id?.toString()?.toLowerCase() === 'bigcursorwhite' ||
      elementdata?.selectedelementid?.toString()?.toLowerCase() ===
        'bigcursorwhite'
    ) {
      if (selectedoption && selectedoption.bigcursorblack) {
        selectedoption.bigcursorblack.selectedelementvalue = false
      }
    }
  }

  const contentadjustmentvalue = (elementdata) => {
    const allelementarray = []
    // elementdata = { ...elementdata, selectedtype: 'button' }
    elementdata.selectedtype = 'calculatevalue'
    elementdata.calculatetype =
      elementdata?.target?.parentElement?.classList[2]?.toLowerCase()
    allelementarray.push(elementdata)
    allelementarray?.length > 0 && setAccessibilityOptions(allelementarray)
  }

  const coloronselect = (elementdata) => {
    const allelementarray = []
    elementdata.selectedtype = 'colorselect'
    elementdata.calculatetype = 'colors'
    allelementarray.push(elementdata)
    allelementarray?.length > 0 && setAccessibilityOptions(allelementarray)
  }

  useEffect(() => {
    selectedoption &&
      Object.keys(selectedoption)?.length > 0 &&
      Object.keys(selectedoption)?.forEach((selkey) => {
        switch (selectedoption[selkey]?.selectedelementid) {
          case 'seizuresafe':
            seizuresafeprofileapply(selectedoption[selkey])
            break
          case 'visionimpaired':
            visionimpairedprofileapply(selectedoption[selkey])
            break
          case 'adhdfriendly':
            adhdfriendlyprofileapply(selectedoption[selkey])
            break
          case 'cognitivedisability':
            cognitivedisabilityprofileapply(selectedoption[selkey])
            break
          case 'keyboardnavigator':
            keyboardnavigatorprofileapply(selectedoption[selkey])
            break
          case 'blindusers':
            blindusersprofileapply(selectedoption[selkey])
            break
          case 'readguide':
            readingguide(selectedoption[selkey])
            break
          case 'contentscale':
            contentscallingprofileapply(selectedoption[selkey])
            break
          case 'readablefont':
            readablefornadjustmentapply(selectedoption[selkey])
            break
          case 'fontsize':
            fontsizeadjustmentprofileapply(selectedoption[selkey])
            break
          case 'fontcolor':
          case 'titlefontcolor':
          case 'bgcolor':
            fontcolouradjustmentprofileapply(selectedoption[selkey])
            break
          case 'hideimages':
            hideimageadjustmentsapply(selectedoption[selkey])
            break
          case 'letterspace':
            letterspaceadjustmentprofileapply(selectedoption[selkey])
            break
          case 'lineheight':
            lineheightadjustmentprofileapply(selectedoption[selkey])
            break
          case 'aligntextleft':
          case 'aligntextcenter':
          case 'aligntextright':
            textalignmentadjustmentprofile(selectedoption[selkey])
            break
          case 'highsturate':
            highsaturationadjustmentprofile(selectedoption[selkey])
            break
          case 'monochrome':
            monochromeadjustmentprofile(selectedoption[selkey])
            break
          case 'lowstaurate':
            lowsaturationadjustmentprofile(selectedoption[selkey])
            break
          case 'readmask':
            readingmaskprofileapply(selectedoption[selkey])
            break
          case 'mutesound':
            mutesoundprofileapply(selectedoption[selkey])
            break
          case 'darkcontrast':
            darkcontrastprofileapply(selectedoption[selkey])
            break
          case 'lightcontrast':
            lightcontrastprofileapply(selectedoption[selkey])
            break
          case 'highcontrast':
            highcontrastprofileapply(selectedoption[selkey])
            break
          case 'highlighthover':
            highlighthoverprofileapply(selectedoption[selkey])
            break
          case 'highlightfocus':
            highlightclickprofileapply(selectedoption[selkey])
            break
          case 'bigcursorblack':
          case 'bigcursorwhite':
            changetobigcursor(selectedoption[selkey])
            break
          case 'stopanimate':
            stopanimateprofileapply(selectedoption[selkey])
            break
          case 'highlightlinks':
            highlightlinksprofileapply(selectedoption[selkey])
            break
          case 'textmagnifier':
            textmagnifierprofileapply(selectedoption[selkey])
            break
          case 'highlighttitle':
            highlighttitlesprofileapply(selectedoption[selkey])
            break
          case 'readmode':
            readmodeprofileapply(selectedoption[selkey])
            break
          default:
            break
        }
      })
  }, [selectedoption])

  const seizuresafeprofileapply = (elementdata) => {
    const htmlelement =
      document.documentElement || document.getElementsByTagName('html')[0]
    if (elementdata?.selectedelementvalue) {
      // setSctrollposition()
      if (htmlelement?.classList?.length > 0) {
        htmlelement?.classList?.remove('ff-seizure-safe-contrast')
        htmlelement.className += ' ff-seizure-safe-contrast'
      } else {
        htmlelement?.classList?.add('ff-seizure-safe-contrast')
      }
    } else {
      htmlelement?.classList?.length > 0 &&
        htmlelement?.classList?.remove('ff-seizure-safe-contrast')
    }
  }

  const contentscallingprofileapply = (elementdata) => {
    const defaultcss = JSON.parse(sessionStorage.getItem('getdefaultcss'))
    const htmlelement =
      document.documentElement || document.getElementsByTagName('html')[0]
    if (
      Number.isInteger(Number(elementdata?.selectedelementvalue)) &&
      Number(elementdata?.selectedelementvalue) !== 0
    ) {
      // const zoomsize = 1 + (Number(elementdata?.selectedelementvalue) / 10) * 0.016
      const zoomsize = 1 + Number(elementdata?.selectedelementvalue) / 100
      const currentfontsize =
        selectedoption &&
        Number(selectedoption.fontsize?.selectedelementvalue) > 0
          ? Number(selectedoption.fontsize?.selectedelementvalue) / 100
          : 0
      // htmlelement.style.zoom =
      //   1 + (Number(elementdata?.selectedelementvalue) / 10) * 0.016
      // htmlelement.style.transform=`scale(${zoomsize})`
      accessibilitydata[elementdata?.selectedelementid]?.forEach(
        (stylename) => {
          document.body.style.setProperty(
            stylename,
            `${(
              Number(defaultcss[stylename]?.toLowerCase()?.replace('px', '')) *
              (Number(zoomsize) + Number(currentfontsize))
            ).toFixed(2)}px`
          )
        }
      )
    } else if (
      !(selectedoption && selectedoption.fontsize) ||
      (selectedoption &&
        Number.isInteger(
          Number(selectedoption.fontsize?.selectedelementvalue)
        ) &&
        Number(selectedoption.fontsize?.selectedelementvalue) === 0)
    ) {
      // htmlelement.style.transform='scale(1)'
      // htmlelement.style.zoom=1
      accessibilitydata[elementdata?.selectedelementid]?.forEach(
        (stylename) => {
          document.body.style.setProperty(stylename, defaultcss[stylename])
        }
      )
    }
  }

  const readablefornadjustmentapply = (elementdata) => {
    const appbody = document.getElementsByTagName('body')[0]
    if (elementdata?.selectedelementvalue) {
      if (appbody?.classList?.length > 0) {
        appbody?.classList?.remove('ff-readable-font')
        appbody.className += ' ff-readable-font'
      } else {
        appbody?.classList?.add('ff-readable-font')
      }
    } else {
      appbody?.classList?.length > 0 &&
        appbody?.classList?.remove('ff-readable-font')
    }
  }

  const hideimageadjustmentsapply = (elementdata) => {
    // let appbody = document.getElementsByTagName('body')[0]
    if (elementdata?.selectedelementvalue) {
      // if (appbody?.classList?.length > 0) {
      //   appbody?.classList?.remove('hide-svg-images')
      //   appbody.className += ' hide-svg-images'
      // } else {
      //   appbody?.classList?.add('hide-svg-images')
      // }
      applycssclassname('hide-svg-images')
    } else {
      // appbody?.classList?.length > 0 &&
      //   appbody?.classList?.remove('hide-svg-images')
      removecssclassname('hide-svg-images')
    }
  }

  const fontsizeadjustmentprofileapply = (elementdata) => {
    // getbodycssstyles()
    const defaultcss = JSON.parse(sessionStorage.getItem('getdefaultcss'))
    if (
      Number.isInteger(Number(elementdata?.selectedelementvalue)) &&
      Number(elementdata?.selectedelementvalue) != 0
    ) {
      const currentcontentscale =
        selectedoption &&
        Number(selectedoption.contentscale?.selectedelementvalue) > 0
          ? Number(selectedoption.contentscale?.selectedelementvalue) / 100
          : 0
      applycssclassname('ff-font-size')
      accessibilitydata[elementdata?.selectedelementid]?.forEach(
        (stylename) => {
          document.body.style.setProperty(
            stylename,
            `${(
              Number(defaultcss[stylename]?.toLowerCase()?.replace('px', '')) *
              (1 +
                Number(elementdata.selectedelementvalue) / 100 +
                currentcontentscale)
            ).toFixed(2)}px`
          )
        }
      )
    } else if (
      !(selectedoption && selectedoption.contentscale) ||
      (selectedoption &&
        Number.isInteger(
          Number(selectedoption.contentscale?.selectedelementvalue)
        ) &&
        Number(selectedoption.contentscale?.selectedelementvalue) === 0)
    ) {
      // applycssclassname('ff-font-size')
      accessibilitydata[elementdata?.selectedelementid]?.forEach(
        (stylename) => {
          document.body.style.setProperty(stylename, defaultcss[stylename])
        }
      )
    }
  }

  const letterspaceadjustmentprofileapply = (elementdata) => {
    if (
      Number.isInteger(Number(elementdata?.selectedelementvalue)) &&
      Number(elementdata?.selectedelementvalue) != 0
    ) {
      applycssclassname('ff-letter-space')
      accessibilitydata[elementdata?.selectedelementid]?.forEach(
        (stylename) => {
          document.body.style.setProperty(
            stylename,
            `${Number(elementdata?.selectedelementvalue) * 0.02}px`
          )
        }
      )
    } else {
      removecssclassname('ff-letter-space')
      // accessibilitydata[elementdata?.selectedelementid]?.forEach(
      //   (stylename) => {
      //     document.body.style.setProperty(stylename, '0px')
      //   }
      // )
    }
  }

  const lineheightadjustmentprofileapply = (elementdata) => {
    // const defaultcss = JSON.parse(sessionStorage.getItem('getdefaultcss'))
    // const currentlineheight = Number(window.getComputedStyle(document.getElementsByTagName("body")[0])?.lineHeight?.replace('px',''))
    if (
      Number.isInteger(Number(elementdata?.selectedelementvalue)) &&
      Number(elementdata?.selectedelementvalue) != 0
    ) {
      // const currentappliedperncetage = Number(sessionStorage.getItem('lineheightpercentage'))
      // const diffpercentage = (Number(elementdata?.selectedelementvalue) - currentappliedperncetage)
      // applycssclassname('ff-textline-height', 'true',diffpercentage)
      sessionStorage.setItem(
        'acblineheight',
        elementdata?.selectedelementvalue?.toString()
      )
      // const allrowdivs = document.querySelectorAll('[role="row"]')
      if (
        elementdata?.selectedelementdata?.calculatetype?.toString() ===
        'increase'
      ) {
        setacbrowheight()
      } else if (
        elementdata?.selectedelementdata?.calculatetype?.toString() ===
        'decrease'
      ) {
        setacbrowheight()
      }
      applycssclassname(
        'ff-textline-height',
        'true',
        elementdata?.selectedelementvalue
      )
    } else {
      sessionStorage.setItem('acblineheight', '0')
      removecssclassname('ff-textline-height', 'true')
      setacbrowheight()
    }
  }

  const fontcolouradjustmentprofileapply = (elementdata) => {
    const defaultcss = JSON.parse(sessionStorage.getItem('getdefaultcss'))
    if (
      Number(elementdata?.selectedelementvalue) != 0 &&
      elementdata?.selectedelementvalue?.toString()?.toLowerCase() !== 'default'
    ) {
      accessibilitydata[elementdata?.selectedelementid]?.forEach(
        (stylename) => {
          document.body.style.setProperty(
            stylename,
            elementdata?.selectedelementvalue
          )
        }
      )
    } else if (
      !(
        accessibilitydata &&
        accessibilitydata.darkcontrast &&
        accessibilitydata.darkcontrast?.selectedelementvalue
          ?.toString()
          ?.toLowerCase() === 'true'
      )
    ) {
      accessibilitydata[elementdata?.selectedelementid]?.forEach(
        (stylename) => {
          document.body.style.setProperty(stylename, defaultcss[stylename])
        }
      )
    }
  }

  const applycssclassname = (
    classnamedet,
    applystyle = 'false',
    calculateperncetage = 0
  ) => {
    const divdetails = document.querySelectorAll('.ff-accessibility-profile')
    ;[].forEach.call(divdetails, function (el) {
      if (applystyle === 'true') {
        // const currentlineheight = Number(window.getComputedStyle(el)?.lineHeight?.replace('px',''))
        // ((Number(currentlineheight)/10)*0.625)*(1 + Number(elementdata.selectedelementvalue) / 100)
        // el.style.lineHeight = (Number(currentlineheight)*(Number(calculateperncetage) / 100))+'px'
        el.style.lineHeight = `${100 + calculateperncetage}%`
      } else {
        el.classList.add(classnamedet)
      }
    })
  }

  const removecssclassname = (classnamedet, removestyle = 'false') => {
    const divdetails = document.querySelectorAll('.ff-accessibility-profile')
    ;[].forEach.call(divdetails, function (el) {
      if (removestyle === 'true') {
        el.style.lineHeight = null
      } else {
        el.classList.remove(classnamedet)
      }
    })
  }

  const removecustomclassname = (customclassname) => {
    const divdetails = document.querySelectorAll(customclassname)
    ;[].forEach.call(divdetails, function (el) {
      el.classList.remove(customclassname)
    })
  }
  const textalignmentadjustmentprofile = (elementdata) => {
    // const appbody = document.getElementsByTagName('body')[0]
    // const treedivs = document.getElementsByClassName('MuiTreeView-root')
    if (elementdata?.selectedelementvalue) {
      if (
        elementdata?.selectedelementid?.toString()?.toLowerCase() ===
        'aligntextleft'
      ) {
        document.body.style.setProperty('--flexalignitems', 'flex-start')
        document.body.style.setProperty('--textahrlignment', 'left')
        document.body.style.setProperty('--footertextahrlignment', 'left')
      } else if (
        elementdata?.selectedelementid?.toString()?.toLowerCase() ===
        'aligntextcenter'
      ) {
        document.body.style.setProperty('--flexalignitems', 'center')
        document.body.style.setProperty('--textahrlignment', 'center')
        document.body.style.setProperty('--footertextahrlignment', 'center')
      } else if (
        elementdata?.selectedelementid?.toString()?.toLowerCase() ===
        'aligntextright'
      ) {
        document.body.style.setProperty('--flexalignitems', 'flex-end')
        document.body.style.setProperty('--textahrlignment', 'right')
        document.body.style.setProperty('--footertextahrlignment', 'right')
      }

      applycssclassname('ff-textalign')
    } else if (
      !(
        (selectedoption &&
          selectedoption.aligntextright &&
          selectedoption.aligntextright?.selectedelementvalue
            ?.toString()
            ?.toLowerCase() === 'true') ||
        (selectedoption &&
          selectedoption.aligntextcenter &&
          selectedoption.aligntextcenter?.selectedelementvalue
            ?.toString()
            ?.toLowerCase() === 'true') ||
        (selectedoption &&
          selectedoption.aligntextleft &&
          selectedoption.aligntextleft?.selectedelementvalue
            ?.toString()
            ?.toLowerCase() === 'true')
      )
    ) {
      removecssclassname('ff-textalign')
    }
  }

  const visionimpairedprofileapply = (elementdata) => {
    const htmlelement =
      document.documentElement || document.getElementsByTagName('html')[0]
    if (elementdata?.selectedelementvalue) {
      if (htmlelement?.classList?.length > 0) {
        htmlelement?.classList?.remove('ff-saturation-contrast')
        htmlelement.className += ' ff-saturation-contrast'
      } else {
        htmlelement?.classList?.add('ff-saturation-contrast')
      }
    } else {
      htmlelement?.classList?.length > 0 &&
        htmlelement?.classList?.remove('ff-saturation-contrast')
    }
  }

  const highsaturationadjustmentprofile = (elementdata) => {
    const htmlelement =
      document.documentElement || document.getElementsByTagName('html')[0]
    if (elementdata?.selectedelementvalue) {
      if (htmlelement?.classList?.length > 0) {
        htmlelement?.classList?.remove('ff-high-saturation')
        htmlelement.className += ' ff-high-saturation'
      } else {
        htmlelement?.classList?.add('ff-high-saturation')
      }
    } else {
      htmlelement?.classList?.length > 0 &&
        htmlelement?.classList?.remove('ff-high-saturation')
    }
  }

  const monochromeadjustmentprofile = (elementdata) => {
    const htmlelement =
      document.documentElement || document.getElementsByTagName('html')[0]
    if (elementdata?.selectedelementvalue) {
      if (htmlelement?.classList?.length > 0) {
        htmlelement?.classList?.remove('ff-mono-chrome')
        htmlelement.className += ' ff-mono-chrome'
      } else {
        htmlelement?.classList?.add('ff-mono-chrome')
      }
    } else {
      htmlelement?.classList?.length > 0 &&
        htmlelement?.classList?.remove('ff-mono-chrome')
    }
  }

  const lowsaturationadjustmentprofile = (elementdata) => {
    const htmlelement =
      document.documentElement || document.getElementsByTagName('html')[0]
    if (elementdata?.selectedelementvalue) {
      if (htmlelement?.classList?.length > 0) {
        htmlelement?.classList?.remove('ff-low-saturation')
        htmlelement.className += ' ff-low-saturation'
      } else {
        htmlelement?.classList?.add('ff-low-saturation')
      }
    } else {
      htmlelement?.classList?.length > 0 &&
        htmlelement?.classList?.remove('ff-low-saturation')
    }
  }

  // Getting mousemove y axis point
  const updateReadGuide = (e) => {
    let newPosy = 0
    let newPosx = 0
    const adhdvalidation = sessionStorage.getItem('adhdfriendprofile')
    const gappixcel = adhdvalidation === 'true' ? 30 : 15
    const contentscalapplytogappixcel =
      (selectedoption.contentscale &&
      typeof selectedoption.contentscale?.selectedelementvalue === 'number'
        ? Number(selectedoption.contentscale?.selectedelementvalue)
        : 0) * 0.75

    if (e.type == 'touchmove') {
      newPosy = e.changedTouches[0].clientY
      newPosx = e.changedTouches[0].clientX
    } else {
      newPosy = e.y
      newPosx = e.x
    }
    // ADHD functionality implementation, Readguide implementaiton
    if (document.getElementById('adhdtopdiv'))
      document.getElementById('adhdtopdiv').style.height = `${
        newPosy - (gappixcel + contentscalapplytogappixcel)
      }px`
    if (document.getElementById('adhdbottomdiv'))
      document.getElementById('adhdbottomdiv').style.height = `${
        window.innerHeight - newPosy - (gappixcel + contentscalapplytogappixcel)
      }px`

    if (document.getElementById('readguidediv')) {
      const widthcalcpercentage =
        1 -
        (selectedoption.contentscale &&
        typeof selectedoption.contentscale?.selectedelementvalue === 'number'
          ? Number(selectedoption.contentscale?.selectedelementvalue) / 100
          : 0)

      const finalbottomposition =
        (window.innerHeight - newPosy) * widthcalcpercentage
      document.getElementById('readguidediv').style.bottom = `${
        finalbottomposition === window.innerHeight - newPosy
          ? finalbottomposition + 1
          : finalbottomposition
      }px`
      document.getElementById('readguidediv').style.left = `${
        (newPosx - window.innerWidth * 0.2) * widthcalcpercentage
      }px`
    }
  }

  const applyclasstoelement = (htmlele, toapplyclassname) => {
    if (htmlele && htmlele?.classList?.length > 0) {
      htmlele?.classList?.remove(toapplyclassname)
      htmlele.className += ` ${toapplyclassname}`
    } else {
      htmlele?.classList?.add(toapplyclassname)
    }
  }

  const removeexisthiglight = (removeclassname) => {
    document.querySelectorAll(`.${removeclassname}`)?.forEach((el) => {
      if (el?.classList?.length > 0) {
        el.classList.remove(removeclassname)
      }
    })
  }

  const getxandypointerclick = (e) => {
    removeexisthiglight('ff-focus-click')
    const currentdocelement = document.elementFromPoint(e.x, e.y)
    if (currentdocelement) {
      applyclasstoelement(currentdocelement, 'ff-focus-click')
    }
  }

  // Mute/unmute the audio and video sound based on the control enable/disable
  const mutesoundprofileapply = (elementdata) => {
    const audiovediofile = document.querySelectorAll('audio, video')
    if (elementdata.selectedelementvalue) {
      // const audiovediofile = document.getElementsByTagName('audio')
      audiovediofile &&
        audiovediofile.forEach(function (el) {
          if (!el.paused) el.muted = true
        })
    } else {
      audiovediofile &&
        audiovediofile.forEach(function (el) {
          if (el.muted) el.muted = false
        })
    }
  }

  const adhdfriendlyprofileapply = (elementdata) => {
    const htmlelement =
      document.documentElement || document.getElementsByTagName('html')[0]
    if (elementdata?.selectedelementvalue) {
      sessionStorage.setItem('adhdfriendprofile', 'true')
      if (htmlelement && htmlelement?.classList?.length > 0) {
        htmlelement?.classList?.remove('adhd-friendly')
        htmlelement.className += ' adhd-friendly'
      } else {
        htmlelement?.classList?.add('adhd-friendly')
      }
      // updateReadGuide()
      document.body.addEventListener('mousemove', updateReadGuide)
      const appbody = document.getElementsByTagName('body')[0]
      const adhddivtop = addaccessibilitydivs()
      adhddivtop.id = 'adhdtopdiv'
      adhddivtop.classList.add('adhdfriendly', 'topdiv')
      if (!document.getElementById('adhdtopdiv'))
        appbody.appendChild(adhddivtop)
      const adhddivbottom = addaccessibilitydivs()
      adhddivbottom.id = 'adhdbottomdiv'
      adhddivbottom.classList.add('adhdfriendly', 'bottomdiv')
      if (!document.getElementById('adhdbottomdiv'))
        appbody.appendChild(adhddivbottom)
    } else {
      sessionStorage.setItem('adhdfriendprofile', 'false')
      if (
        selectedoption &&
        selectedoption.adhdfriendly &&
        selectedoption &&
        selectedoption.readmask
      ) {
        if (
          (selectedoption.adhdfriendly?.selectedelementvalue
            ?.toString()
            ?.toLowerCase() === 'false' ||
            selectedoption.adhdfriendly?.selectedelementvalue === 0) &&
          (selectedoption.readmask?.selectedelementvalue
            ?.toString()
            ?.toLowerCase() === 'false' ||
            selectedoption.readmask?.selectedelementvalue === 0)
        ) {
          document.body.removeEventListener('mousemove', updateReadGuide)
          const topdivtoberemove = document.getElementById('adhdtopdiv')
          if (topdivtoberemove) topdivtoberemove.remove()
          const bottomdivtoberemove = document.getElementById('adhdbottomdiv')
          if (bottomdivtoberemove) bottomdivtoberemove.remove()
          htmlelement &&
            htmlelement?.classList?.length > 0 &&
            htmlelement?.classList?.remove('adhd-friendly')
        }
      } else {
        document.body.removeEventListener('mousemove', updateReadGuide)
        const topdivtoberemove = document.getElementById('adhdtopdiv')
        if (topdivtoberemove) topdivtoberemove.remove()
        const bottomdivtoberemove = document.getElementById('adhdbottomdiv')
        if (bottomdivtoberemove) bottomdivtoberemove.remove()
        htmlelement &&
          htmlelement?.classList?.length > 0 &&
          htmlelement?.classList?.remove('adhd-friendly')
      }
    }
  }

  const readingmaskprofileapply = (elementdata) => {
    if (elementdata?.selectedelementvalue) {
      document.body.addEventListener('mousemove', updateReadGuide)
      const appbody = document.getElementsByTagName('body')[0]
      const adhddivtop = addaccessibilitydivs()
      adhddivtop.id = 'adhdtopdiv'
      adhddivtop.classList.add('adhdfriendly', 'topdiv')
      if (!document.getElementById('adhdtopdiv'))
        appbody.appendChild(adhddivtop)
      const adhddivbottom = addaccessibilitydivs()
      adhddivbottom.id = 'adhdbottomdiv'
      adhddivbottom.classList.add('adhdfriendly', 'bottomdiv')
      if (!document.getElementById('adhdbottomdiv'))
        appbody.appendChild(adhddivbottom)
    } else if (
      selectedoption &&
      selectedoption.adhdfriendly &&
      selectedoption &&
      selectedoption.readmask
    ) {
      if (
        (selectedoption.adhdfriendly?.selectedelementvalue
          ?.toString()
          ?.toLowerCase() === 'false' ||
          selectedoption.adhdfriendly?.selectedelementvalue === 0) &&
        (selectedoption.readmask?.selectedelementvalue
          ?.toString()
          ?.toLowerCase() === 'false' ||
          selectedoption.readmask?.selectedelementvalue === 0)
      ) {
        document.body.removeEventListener('mousemove', updateReadGuide)
        const topdivtoberemove = document.getElementById('adhdtopdiv')
        if (topdivtoberemove) topdivtoberemove.remove()
        const bottomdivtoberemove = document.getElementById('adhdbottomdiv')
        if (bottomdivtoberemove) bottomdivtoberemove.remove()
        // htmlelement && htmlelement?.classList?.length > 0 &&
        //   htmlelement?.classList?.remove('adhd-friendly')
      }
    } else {
      document.body.removeEventListener('mousemove', updateReadGuide)
      const topdivtoberemove = document.getElementById('adhdtopdiv')
      if (topdivtoberemove) topdivtoberemove.remove()
      const bottomdivtoberemove = document.getElementById('adhdbottomdiv')
      if (bottomdivtoberemove) bottomdivtoberemove.remove()
    }
  }

  const cognitiveprofileonmousemove = (e) => {
    const cognitivediv = document.elementFromPoint(e.x, e.y)
    if (cognitivediv.tagName?.toString()?.toLowerCase() === 'a') {
      removecustomclassname('ff-cognitive-anchor')
      if (cognitivediv && cognitivediv?.classList?.length > 0) {
        cognitivediv?.classList?.remove('ff-cognitive-anchor')
        cognitivediv.className += ' ff-cognitive-anchor'
      } else {
        bodyelement?.classList?.add('ff-cognitive-anchor')
      }
    } else if (cognitivediv.tagName?.toString()?.toLowerCase() === 'img') {
      removecustomclassname('ff-cognitive-img')
      if (cognitivediv && cognitivediv?.classList?.length > 0) {
        cognitivediv?.classList?.remove('ff-cognitive-img')
        cognitivediv.className += ' ff-cognitive-img'
      } else {
        cognitivediv?.classList?.add('ff-cognitive-img')
      }
    }
  }

  const cognitivedisabilityprofileapply = (elementdata) => {
    const bodyelement = document.getElementsByTagName('body')[0]
    if (elementdata?.selectedelementvalue) {
      document.addEventListener('mousemove', cognitiveprofileonmousemove)
      if (bodyelement?.classList?.length > 0) {
        bodyelement?.classList?.remove('ff-cognitive-disable-profile')
        bodyelement.className += ' ff-cognitive-disable-profile'
      } else {
        bodyelement?.classList?.add('ff-cognitive-disable-profile')
      }
    } else {
      document.removeEventListener('mousemove', cognitiveprofileonmousemove)
      bodyelement?.classList?.length > 0 &&
        bodyelement?.classList?.remove('ff-cognitive-disable-profile')
    }
  }

  const darkcontrastprofileapply = (elementdata) => {
    const defaultcss = JSON.parse(sessionStorage.getItem('getdefaultcss'))
    if (elementdata?.selectedelementvalue) {
      applycssclassname('ff-dark-contrast')
      accessibilitydata[elementdata?.selectedelementid]?.forEach(
        (stylename) => {
          document.body.style.setProperty(stylename, 'white')
        }
      )
      accessibilitydata[`${elementdata?.selectedelementid}_bgcolor`]?.forEach(
        (stylename) => {
          document.body.style.setProperty(stylename, 'black')
        }
      )
    } else {
      removecssclassname('ff-dark-contrast')
      if (
        !(
          (selectedoption &&
            selectedoption.lightcontrast &&
            selectedoption.lightcontrast?.selectedelementvalue
              ?.toString()
              ?.toLowerCase() === 'true') ||
          selectedoption.bgcolor?.selectedelementvalue
            ?.toString()
            ?.toLowerCase() === 'true'
        )
      ) {
        accessibilitydata[elementdata?.selectedelementid]?.forEach(
          (stylename) => {
            document.body.style.setProperty(stylename, defaultcss[stylename])
          }
        )
        accessibilitydata[`${elementdata?.selectedelementid}_bgcolor`]?.forEach(
          (stylename) => {
            document.body.style.setProperty(stylename, defaultcss[stylename])
          }
        )
      }
    }
  }

  const lightcontrastprofileapply = (elementdata) => {
    const defaultcss = JSON.parse(sessionStorage.getItem('getdefaultcss'))
    if (elementdata?.selectedelementvalue) {
      applycssclassname('ff-light-contrast')
      accessibilitydata[elementdata?.selectedelementid]?.forEach(
        (stylename) => {
          document.body.style.setProperty(stylename, 'balck')
        }
      )
      accessibilitydata[`${elementdata?.selectedelementid}_bgcolor`]?.forEach(
        (stylename) => {
          document.body.style.setProperty(stylename, 'white')
        }
      )
    } else {
      removecssclassname('ff-light-contrast')
      if (
        !(
          selectedoption &&
          selectedoption?.darkcontrast &&
          selectedoption?.darkcontrast?.selectedelementvalue
            ?.toString()
            ?.toLowerCase() === 'true'
        )
      ) {
        accessibilitydata[elementdata?.selectedelementid]?.forEach(
          (stylename) => {
            document.body.style.setProperty(stylename, defaultcss[stylename])
          }
        )
        accessibilitydata[`${elementdata?.selectedelementid}_bgcolor`]?.forEach(
          (stylename) => {
            document.body.style.setProperty(stylename, defaultcss[stylename])
          }
        )
      }
    }
  }

  const highcontrastprofileapply = (elementdata) => {
    const htmlelement =
      document.documentElement || document.getElementsByTagName('html')[0]
    if (elementdata?.selectedelementvalue) {
      // applycssclassname('ff-high-contrast')
      if (htmlelement?.classList?.length > 0) {
        htmlelement?.classList?.remove('ff-high-contrast')
        htmlelement.className += ' ff-high-contrast'
      } else {
        htmlelement?.classList?.add('ff-high-contrast')
      }
    } else {
      // removecssclassname('ff-high-contrast')
      htmlelement?.classList?.length > 0 &&
        htmlelement?.classList?.remove('ff-high-contrast')
    }
  }

  const highlighthoverprofileapply = useCallback((elementdata) => {
    const bodyElement = document.body
    if (elementdata?.selectedelementvalue) {
      bodyElement.addEventListener('mousemove', getxandypointerhover)
    } else {
      bodyElement.removeEventListener('mousemove', getxandypointerhover)
      removeexisthiglight('ff-highlight-hover')
      // contentadjustment(elementdata.selectedelementdata)
    }
  }, [])

  const getxandypointerhover = (e) => {
    const ffacbselections = JSON.parse(
      localStorage.getItem('ffacbselectiondetails')
    )
    removeexisthiglight('ff-highlight-hover')
    const currentdocelement = document.elementFromPoint(e.x, e.y)
    if (
      currentdocelement &&
      ffacbselections?.blindusers?.selectedelementvalue
    ) {
      applyclasstoelement(currentdocelement, 'ff-highlight-hover')
    }
  }

  const changetobigcursor = useCallback((elementdata) => {
    const recs = {
      selectedelementid: elementdata.selectedelementid,
      selectedelementvalue: elementdata.selectedelementvalue,
    }
    cursorselection = {
      ...cursorselection,
      [elementdata?.selectedelementid]: recs,
    }

    const cursordata = JSON.stringify(cursorselection)
    sessionStorage.setItem('cursortype', cursordata)

    if (
      (cursorselection &&
        cursorselection.bigcursorwhite &&
        cursorselection.bigcursorwhite?.selectedelementvalue
          ?.toString()
          ?.toLowerCase() === 'true') ||
      (cursorselection &&
        cursorselection.bigcursorblack &&
        cursorselection.bigcursorblack?.selectedelementvalue
          ?.toString()
          ?.toLowerCase() === 'true')
    ) {
      // document.body.style.cursor="Unset"
      document.body.addEventListener('mousemove', getxandycoordination)
      // let img = document.createElement("img");
      // img.id="cursorimage"
      // img.src = "#";
      // img.className="cursorimageclass"
      // document.body.appendChild(img)
    } else {
      document.body.removeEventListener('mousemove', getxandycoordination)
      // const imgelement = document.getElementById("cursorimage")
      // imgelement?.remove();
      removecommonstyle()
    }
  }, [])

  const getxandycoordination = (e) => {
    const currelement = JSON.parse(sessionStorage.getItem('cursortype'))
    getcursordetails(e, currelement)
  }

  const getcursordetails = (e, currelement) => {
    const urldet = ''
    // let bodydiv = document.getElementsByTagName('body')[0]
    const cursorimage = ''
    const selecteddiv = document.elementFromPoint(e.x, e.y)
    // let imgelement = document.getElementById("cursorimage")
    let cursorselect = false
    let cursorcolor = 'w_'
    let cursortype =
      window.getComputedStyle(selecteddiv, null).getPropertyValue('cursor') ||
      'default'
    if (cursortype?.includes('url')) {
      // cursortype = cursortype
      //   ?.toString()
      //   ?.split('_')[1]
      //   ?.replace('.png', '')
      //   ?.split('"')[0]
      //   ?.replace('cursor', '')
      //   ?.replace('/', '')
      // cursortype = cursortype?.split('_')[2]?.split('.png')[0]?.split('/')[1]
      cursortype = cursortype?.split(',')[1]?.replace(' ', '')
    }

    if (
      currelement &&
      currelement.bigcursorwhite &&
      currelement.bigcursorwhite?.selectedelementvalue
        ?.toString()
        ?.toLowerCase() === 'true'
    ) {
      cursorselect = true
      cursorcolor = 'w_'
      // cursorimage = require(`../white_cursor/${cursortype}.png`)
      // getBase64(cursorimage.default, (result) => {
      //   urldet = result
      // })
      // urldet = `../../../../../white_cursor/${cursortype}.png`
      // urldet = `${publicurl}/white_cursor/${cursortype}.png`
      // urldet = new URL(`../public/white_cursor/${cursortype}.png`,window.location.origin)
      // urldet = `https://dev.azure.com/marstonfreedom/c5a43e52-b609-4506-9103-45c2d4003de5/_apis/git/repositories/62d092fd-56d2-4fa2-b7e2-20c0a81eb065/items?path=/public/white_cursor/${cursortype}.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=Dev&resolveLfs=true&%24format=octetStream&api-version=5.0`
      // urldet = `../white_cursor/${cursortype}.png`
      // imgelement.src=`../white_cursor/${cursortype}.png`
    } else if (
      currelement &&
      currelement.bigcursorblack &&
      currelement.bigcursorblack?.selectedelementvalue
        ?.toString()
        ?.toLowerCase() === 'true'
    ) {
      cursorselect = true
      cursorcolor = 'b_'
      // cursorimage = require(`../black_cursor/${cursortype}.png`)
      // getBase64(cursorimage.default, (result) => {
      //   urldet = result
      // })
      // imgelement.src=`../black_cursor/${cursortype}.png`
      // urldet = `../../../../../black_cursor/${cursortype}.png`
      // urldet = `${publicurl}/black_cursor/${cursortype}.png`
      // urldet = new URL(`../public/black_cursor/${cursortype}.png`,window.location.origin)
      // urldet = `https://dev.azure.com/marstonfreedom/c5a43e52-b609-4506-9103-45c2d4003de5/_apis/git/repositories/62d092fd-56d2-4fa2-b7e2-20c0a81eb065/items?path=/public/black_cursor/${cursortype}.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=Dev&resolveLfs=true&%24format=octetStream&api-version=5.0`
    }

    if (cursorselect) {
      // if (!cursortype) {
      //   cursortype = 'auto'
      // }
      if (
        cursortype?.toString()?.toLowerCase() === 'undefined' ||
        cursortype === undefined
      ) {
        cursortype = 'auto'
      } else if (cursortype?.toString()?.toLowerCase() === 'default') {
        cursortype = 'defaultcursor'
      }

      // imgelement.style.transform=`translate(${e.clientX}px, ${e.clientY-window.innerHeight}px)`;
      if (
        selecteddiv?.getAttribute('role')?.toString()?.toLowerCase() ===
          'grid' ||
        selecteddiv?.getAttribute('role')?.toString()?.toLowerCase() ===
          'rowgroup' ||
        selecteddiv?.getAttribute('role')?.toString()?.toLowerCase() ===
          'row' ||
        selecteddiv?.getAttribute('role')?.toString()?.toLowerCase() ===
          'columnheader' ||
        selecteddiv?.getAttribute('role')?.toString()?.toLowerCase() ===
          'gridcell'
      ) {
        // removecustomclassname('gridcursorstyle')
        // selecteddiv?.classList?.add('gridcursorstyle')
        // if (selecteddiv?.classList?.length > 0) {
        //   selecteddiv.className += ' gridcursorstyle'
        // } else {
        //   selecteddiv?.classList?.add('gridcursorstyle')
        // }
        // const cursorname = `'url(${
        //   cursors[cursorcolor + cursortype]
        // }) 15 15,${cursortype}'`
        // document.body.style.setProperty('--cursor-Name', cursorname)
        // document.body.style.setProperty(
        //   '--cursor-Name',
        //   `url(${
        //     cursors[cursorcolor + cursortype]
        //   }) 15 15,${cursortype} !important`
        // )
      } else {
        selecteddiv.style.setProperty(
          'cursor',
          `url(${cursors[cursorcolor + cursortype]}) 15 15,${cursortype}`,
          'important'
        )
      }
      // bodydiv.style.setProperty('cursor', {auto}, 'important')
      // imgelement.src={cursorimage}
      // bodydiv.style.setProperty('cursor', {auto}, 'important')
    } else {
      document.body.style.setProperty('cursor', 'default', 'important')
      // imgelement.src="#"
    }
  }

  function* generateindexvalue() {
    let index = 0

    while (true) {
      yield index++
    }
  }

  function getMenuselection() {
    removeexisthiglight('key-navigation')
    let currentindexvalue = 0
    const allmenus = document.getElementsByTagName('ul')
    currentindexvalue = getcurrentelementvalue.next().value

    if (currentindexvalue > allmenus?.length) {
      getcurrentelementvalue = generateindexvalue()
      currentindexvalue = getcurrentelementvalue.next().value
    }

    for (let i = 0; i < allmenus?.length; i++) {
      if (i !== currentindexvalue) {
        if (allmenus[i]?.classList?.length > 0) {
          allmenus[i]?.classList?.remove('key-navigation')
        }
      } else {
        allmenus[i]?.focus()
        if (allmenus[i]?.classList?.length > 0) {
          allmenus[i]?.classList?.remove('key-navigation')
          allmenus[i].className += ' key-navigation'
        } else {
          allmenus[i]?.classList?.add('key-navigation')
        }
      }
    }
  }

  function getHeadingselection() {
    removeexisthiglight('key-navigation')
    let currentindexvalue = 0
    const allmenus = document.querySelectorAll('h1, h2, h3, h4, h5, h6, legend')
    currentindexvalue = getcurrentelementvalue.next().value

    if (currentindexvalue > allmenus?.length) {
      getcurrentelementvalue = generateindexvalue()
      currentindexvalue = getcurrentelementvalue.next().value
    }

    for (let i = 0; i < allmenus?.length; i++) {
      if (i !== currentindexvalue) {
        if (allmenus[i]?.classList?.length > 0) {
          allmenus[i]?.classList?.remove('key-navigation')
        }
      } else {
        allmenus[i]?.focus()
        if (allmenus[i]?.classList?.length > 0) {
          allmenus[i]?.classList?.remove('key-navigation')
          allmenus[i].className += ' key-navigation'
        } else {
          allmenus[i]?.classList?.add('key-navigation')
        }
      }
    }
  }

  function getFormselection() {
    removeexisthiglight('key-navigation')
    let currentindexvalue = 0
    const allmenus = document.getElementsByTagName('input')
    currentindexvalue = getcurrentelementvalue.next().value

    if (currentindexvalue > allmenus?.length) {
      getcurrentelementvalue = generateindexvalue()
      currentindexvalue = getcurrentelementvalue.next().value
    }

    for (let i = 0; i < allmenus?.length; i++) {
      if (i !== currentindexvalue) {
        if (allmenus[i]?.classList?.length > 0) {
          allmenus[i]?.classList?.remove('key-navigation')
        }
      } else {
        allmenus[i]?.focus()
        if (allmenus[i]?.classList?.length > 0) {
          allmenus[i]?.classList?.remove('key-navigation')
          allmenus[i].className += ' key-navigation'
        } else {
          allmenus[i]?.classList?.add('key-navigation')
        }
      }
    }
  }

  function getButtonselection() {
    removeexisthiglight('key-navigation')
    let currentindexvalue = 0
    const allmenus = document.getElementsByTagName('button')
    currentindexvalue = getcurrentelementvalue.next().value

    if (currentindexvalue > allmenus?.length) {
      getcurrentelementvalue = generateindexvalue()
      currentindexvalue = getcurrentelementvalue.next().value
    }

    for (let i = 0; i < allmenus?.length; i++) {
      if (i !== currentindexvalue) {
        if (allmenus[i]?.classList?.length > 0) {
          allmenus[i]?.classList?.remove('key-navigation')
        }
      } else {
        allmenus[i]?.focus()
        if (allmenus[i]?.classList?.length > 0) {
          allmenus[i]?.classList?.remove('key-navigation')
          allmenus[i].className += ' key-navigation'
        } else {
          allmenus[i]?.classList?.add('key-navigation')
        }
      }
    }
  }

  function getGraphicsselection() {
    removeexisthiglight('key-navigation')
    let currentindexvalue = 0
    const allmenus = document.getElementsByTagName('img')
    currentindexvalue = getcurrentelementvalue.next().value

    if (currentindexvalue > allmenus?.length) {
      getcurrentelementvalue = generateindexvalue()
      currentindexvalue = getcurrentelementvalue.next().value
    }

    for (let i = 0; i < allmenus?.length; i++) {
      if (i !== currentindexvalue) {
        if (allmenus[i]?.classList?.length > 0) {
          allmenus[i]?.classList?.remove('key-navigation')
        }
      } else {
        allmenus[i]?.focus()
        if (allmenus[i]?.classList?.length > 0) {
          allmenus[i]?.classList?.remove('key-navigation')
          allmenus[i].className += ' key-navigation'
        } else {
          allmenus[i]?.classList?.add('key-navigation')
        }
      }
    }
  }

  const selectrespecitveelement = (e) => {
    const currelement = JSON.parse(sessionStorage.getItem('cursortype'))
    if (
      currelement &&
      currelement.keyboardnavigator &&
      currelement.keyboardnavigator?.selectedelementvalue
        ?.toString()
        ?.toLowerCase() === 'true'
    ) {
      switch (e.key) {
        case 'm':
        case 'M':
          getMenuselection()
          break
        case 'h':
        case 'H':
          getHeadingselection()
          break
        case 'f':
        case 'F':
          getFormselection()
          break
        case 'b':
        case 'B':
          getButtonselection()
          break
        case 'g':
        case 'G':
          getGraphicsselection()
          break
        default:
          break
      }
    }
    // const indexvalue = getcurrentelementvalue.next().value
    // document.getElementById("Search").focus()

    // var selectedText = ''
    // function getSelectedText() {
    //   if (window.getSelection) {
    //     selectedText = window.getSelection()?.toString()
    //   } else if (document.getSelection) {
    //     selectedText = document.getSelection()?.toString()
    //   } else if (document.selection) {
    //     selectedText = document.selection.createRange().text
    //   }
    // }

    // getSelectedText()
    // if (selectedText && selectedText !== '' && selectedText?.length > 0) {
    //   texttospeechdivstext(selectedText)
    // }
  }

  const highlightclickprofileapply = useCallback((elementdata) => {
    if (elementdata?.selectedelementvalue) {
      document.body.addEventListener('mousemove', getxandypointerclick)
    } else {
      document.body.removeEventListener('mousemove', getxandypointerclick)
      removeexisthiglight('ff-focus-click')
    }
  }, [])

  const keyboardnavigatorprofileapply = useCallback((elementdata) => {
    const recs = {
      selectedelementid: elementdata.selectedelementid,
      selectedelementvalue: elementdata.selectedelementvalue,
    }
    cursorselection = {
      ...cursorselection,
      [elementdata?.selectedelementid]: recs,
    }

    const cursordata = JSON.stringify(cursorselection)
    sessionStorage.setItem('cursortype', cursordata)

    if (elementdata?.selectedelementvalue) {
      if (document?.body?.classList?.length > 0) {
        document?.body?.classList?.remove('keyboardselection')
        document.body.className += ' keyboardselection'
      } else {
        document?.body?.classList?.add('keyboardselection')
      }

      document.body.addEventListener('keypress', selectrespecitveelement)
      getcurrentelementvalue = generateindexvalue()
    } else {
      removeexisthiglight('key-navigation')
      document.body.removeEventListener('keypress', selectrespecitveelement)
    }
  }, [])

  // function converthtmltotext(htmldata) {
  //   var returntext = '';

  //   if (htmldata.nodeType == 3) {
  //     returntext = htmldata.nodeValue
  //   } else {
  //     for (var i = 0; i < htmldata.childNodes.length; i++) {
  //       returntext += converthtmltotext(htmldata.childNodes[i])
  //     }
  //     var d = getComputedStyle(htmldata).getPropertyValue('display')
  //     if (d.match(/^block/) || d.match(/list/) || htmldata.tagName == 'BR') {
  //       returntext += "\n";
  //     }
  //   }

  //   return returntext
  // }

  // const converthtmltotext = (elementdet) => {
  //   const plaintext=''
  //   if (
  //     !(
  //       (elementdet?.classList &&
  //         elementdet?.classList?.contains('accessibleiconmaindiv')) ||
  //       (elementdet?.classList &&
  //         elementdet?.classList?.contains('accessibilitypopupdiv'))
  //     )
  //   ) {
  //     if (
  //       elementdet?.tagName?.toString()?.toLowerCase() === 'div' ||
  //         elementdet?.tagName?.toString()?.toLowerCase() === 'p' ||
  //         elementdet?.tagName?.toString()?.toLowerCase() === 'span' ||
  //         elementdet?.tagName?.toString()?.toLowerCase() === 'li' ||
  //         elementdet?.tagName?.toString()?.toLowerCase() === 'ul'
  //     ) {
  //       plaintext += '\n'+elementdet?.innerText+'\n'
  //     } else {
  //       plaintext += elementdet?.toString()
  //     }

  //     for (let eleid = 0; eleid < elementdet?.childNodes?.length; eleid++) {
  //       if (elementdet?.children[eleid])
  //         applycommonclasstoalldivs(elementdet.children[eleid])
  //     }
  //   } else {
  //     plaintext += elementdet?.toString()
  //   }
  // }

  const hideimgforreadmode = (displaystatus) => {
    const allimgdiv = document.getElementsByTagName('img')
    for (let i = 0; i < allimgdiv.length; i++) {
      allimgdiv[i].style.setProperty('display', displaystatus)
    }
  }

  const readmodeprofileapply = (elementdata) => {
    // let html = document.getElementsByTagName("body")[0]?.cssText=''
    if (elementdata?.selectedelementvalue) {
      // setReadmodecontent(html)
      hideimgforreadmode('none')
      document.getElementsByTagName('body')[0].style.cssText = 'width:50;'
      // const plaintextofhtml = converthtmltotext(html)

      // html = html?.innerHTML?.toString()
      // html = html.replace(/<style([\s\S]*?)<\/style>/gi, '');
      // html = html.replace(/<script([\s\S]*?)<\/script>/gi, '');
      // html = html.replace(/<\/div>/ig, '\n');
      // html = html.replace(/<\/li>/ig, '\n');
      // html = html.replace(/<li>/ig, '  *  ');
      // html = html.replace(/<\/ul>/ig, '\n');
      // document.body.cssText=''
      // html = html.replace(/<\/p>/ig, '\n');
      // html = html.replace(/<br\s*[\/]?>/gi, "\n");
      // html = html.replace(/<[^>]+>/ig, '');
      // document.getElementsByTagName("body")[0].innerHTML=html
    } else {
      hideimgforreadmode('block')
      // html.innerHTML=readmodehtmldata
    }
  }

  const blindusersprofileapply = useCallback((elementdata) => {
    if (elementdata?.selectedelementvalue) {
      document.body.addEventListener('mouseup', texttospeechdivselection)
    } else {
      document.body.removeEventListener('mouseup', texttospeechdivselection)
    }
  }, [])

  const readingguide = (elementdata) => {
    const htmlelement =
      document.documentElement || document.getElementsByTagName('html')[0]
    if (elementdata?.selectedelementvalue) {
      if (htmlelement?.classList?.length > 0) {
        htmlelement?.classList?.remove('ff-reading-guide')
        htmlelement.className += ' ff-reading-guide'
      } else {
        htmlelement?.classList?.add('ff-reading-guide')
      }
      // updateReadGuide()
      document.body.addEventListener('mousemove', updateReadGuide)
      const appbody = document.getElementsByTagName('body')[0]
      const ffreadguidediv = addaccessibilitydivs()
      ffreadguidediv.id = 'readguidediv'
      ffreadguidediv.classList.add('readingguidediv')
      if (!document.getElementById('readguidediv'))
        appbody.appendChild(ffreadguidediv)
    } else {
      document.body.removeEventListener('mousemove', updateReadGuide)
      const readguidedivtoberemove = document.getElementById('readguidediv')
      if (readguidedivtoberemove) readguidedivtoberemove.remove()
      htmlelement?.classList?.length > 0 &&
        htmlelement?.classList?.remove('ff-reading-guide')
    }
  }

  const stopanimateprofileapply = (elementdata) => {
    const htmlelement =
      document.documentElement || document.getElementsByTagName('html')[0]
    if (elementdata?.selectedelementvalue) {
      sessionStorage.setItem('animationboolean', false)
      // setAnimationboolean(false)
      if (htmlelement?.classList?.length > 0) {
        htmlelement?.classList?.remove('ff-stop-animation')
        htmlelement.className += ' ff-stop-animation'
      } else {
        htmlelement?.classList?.add('ff-stop-animation')
      }
    } else {
      htmlelement?.classList?.length > 0 &&
        htmlelement?.classList?.remove('ff-stop-animation')
      // setAnimationboolean(true)
      sessionStorage.setItem('animationboolean', true)
    }
  }

  const highlightlinksprofileapply = (elementdata) => {
    const htmlelement =
      document.documentElement || document.getElementsByTagName('html')[0]
    if (elementdata?.selectedelementvalue) {
      if (htmlelement?.classList?.length > 0) {
        htmlelement?.classList?.remove('ff-highlight-links')
        htmlelement.className += ' ff-highlight-links'
      } else {
        htmlelement?.classList?.add('ff-highlight-links')
      }
    } else {
      htmlelement?.classList?.length > 0 &&
        htmlelement?.classList?.remove('ff-highlight-links')
    }
  }

  const highlighttitlesprofileapply = (elementdata) => {
    const htmlelement =
      document.documentElement || document.getElementsByTagName('html')[0]
    if (elementdata?.selectedelementvalue) {
      if (htmlelement?.classList?.length > 0) {
        htmlelement?.classList?.remove('ff-highlight-titles')
        htmlelement.className += ' ff-highlight-titles'
      } else {
        htmlelement?.classList?.add('ff-highlight-titles')
      }
    } else {
      htmlelement?.classList?.length > 0 &&
        htmlelement?.classList?.remove('ff-highlight-titles')
    }
  }

  const removetextmagnigyelement = () => {
    const magnifydivtoberemove =
      document.getElementsByClassName('ff-textmagnify')
    if (!!magnifydivtoberemove && magnifydivtoberemove?.length > 0) {
      for (let i = magnifydivtoberemove.length - 1; i >= 0; i--) {
        magnifydivtoberemove[i].remove()
      }
    }
  }

  const textmagnifierprofileapply = useCallback((elementdata) => {
    // removetextmagnigyelement()
    // if (magnifydivtoberemove) magnifydivtoberemove.remove()
    if (elementdata?.selectedelementvalue) {
      const magnifyele = document.getElementsByTagName('body')[0]
      const newele = addaccessibilitydivs()
      newele.id = 'fftextmagnify'
      newele.className = 'ff-textmagnify'
      magnifyele.appendChild(newele)
      document.body.addEventListener('mousemove', gettextmagnifier)
    } else {
      document.body.removeEventListener('mousemove', gettextmagnifier)
      removetextmagnigyelement()
      // const magnifydivtoberemove = document.getElementsByClassName('ff-textmagnify')
      // magnifydivtoberemove && magnifydivtoberemove.forEach((ele)=>{
      //   ele.remove()
      // })
    }
  }, [])

  const texttospeechdivstext = (textvalues) => {
    if (textvalues && textvalues !== '' && textvalues?.length > 0) {
      const utter = new SpeechSynthesisUtterance()
      utter.lang = 'en'
      utter.voice = window.speechSynthesis.getVoices()[0]
      utter.rate = 1
      utter.volume = 1
      utter.pitch = 0.8
      utter.text = textvalues
      utter.onend = function () {
        window.speechSynthesis.cancel()
        window.reading = false
      }

      window.speechSynthesis.speak(utter)
    }
  }

  const urllinkhandler = (event, propertyDetails) => {
    const urllink = propertyDetails.value

    if (propertyDetails && propertyDetails.text) {
      window.open(urllink, '_blank').focus()
    }
  }

  const texttospeechdivselection = (e) => {
    const ffacbselections = JSON.parse(
      localStorage.getItem('ffacbselectiondetails')
    )
    let selectedText = ''
    function getSelectedText() {
      if (window.getSelection) {
        selectedText = window.getSelection()?.toString()
      } else if (document.getSelection) {
        selectedText = document.getSelection()?.toString()
      } else if (document.selection) {
        selectedText = document.selection.createRange().text
      }
    }

    getSelectedText()
    if (
      selectedText &&
      selectedText !== '' &&
      selectedText?.length > 0 &&
      ffacbselections?.blindusers?.selectedelementvalue
    ) {
      texttospeechdivstext(selectedText)
    }
  }

  const gettextmagnifier = (e) => {
    const currentdocelement = document.elementFromPoint(e.x, e.y)
    if (currentdocelement) {
      const htmltext = currentdocelement.innerText
      if (htmltext && htmltext !== '' && htmltext.length > 0) {
        const magnifyhtmlelement = document.getElementById('fftextmagnify')
        magnifyhtmlelement.innerText = htmltext

        magnifyhtmlelement.style.top = `${e.y + 10}px`
        magnifyhtmlelement.style.left = `${e.x + 10}px`
        // magnifyhtmlelement.style.height = `${20}px`
        // magnifyhtmlelement.style.overflow = `auto`
      }
    }
  }

  return (
    <div className="ac-main-page">
      <div className="accessibilitymainpageheaderdiv">
        <div className="mainheader">
          <div className="popupcloseicon">
            <Tooltip className="tooltipfront" title="Close">
              <CloseIcon
                style={{ color: 'white' }}
                fontSize="small"
                onClick={closepopup}
              />
            </Tooltip>
          </div>
          <div className="resetoption">
            {/* <Tooltip className="tooltipfront" title="Reset features">
              <RefreshIcon
                style={{ color: 'white' }}
                fontSize="small"
                onClick={resetoption}
              />
            </Tooltip> */}
          </div>
        </div>
        <div className="accessibilityheadertext">Accessibility Adjustments</div>
        <div className="accessibilityadjust">
          <Button
            className="button btnbase resetbtn"
            variant="outlined"
            onClick={(e) => resetoption('resetall')}
            startIcon={<RefreshIcon />}
          >
            Reset Options
          </Button>
          <Button
            className="button btnbase resetbtn"
            variant="outlined"
            onClick={(e) => statementview(true, 'btnstatementview', e)}
            startIcon={<CardMembershipIcon />}
            id="btnstatementview"
          >
            Statement
          </Button>
          {/* <Button
            className="button btnbase resetbtn"
            variant="outlined"
            //onClick={resetoption}
            startIcon={<VisibilityOffIcon />}
          >
            Hide Interface
          </Button> */}
        </div>
        <div className="accessibilitysearch">
          {/* <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              Width: '85%',
            }}
          >
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search in dictionary"
              inputProps={{ 'aria-label': 'search in dictionary' }}
            />
          </Paper> */}
        </div>
      </div>
      <div className="accessibilitymainpage">
        <Accessibilityprofile
          accessprofile={accessprofile}
          selectedoption={selectedoption}
        />
        <Contentprofiles
          contentadjustment={contentadjustment}
          selectedoption={selectedoption}
          contentadjustmentvalue={contentadjustmentvalue}
        />
        <Colorprofiles
          contentadjustment={contentadjustment}
          selectedoption={selectedoption}
          contentadjustmentvalue={contentadjustmentvalue}
          coloronselect={coloronselect}
          resetoption={resetoption}
        />
        <Orientalprofiles
          contentadjustment={contentadjustment}
          selectedoption={selectedoption}
          contentadjustmentvalue={contentadjustmentvalue}
          urllinkhandler={urllinkhandler}
        />
      </div>
      <Tooltipdisplay
        idvalue="textmagnifierid"
        selectedelement={htmlcurrentdocelement}
      />
      {selectedoption &&
      selectedoption.btnstatementview &&
      selectedoption.btnstatementview?.selectedelementvalue
        ?.toString()
        ?.toLowerCase() === 'true' ? (
        <AccessibilityStatement statementview={statementview} />
      ) : null}
      <div className="accessibilityfooter">Marston Holdings</div>
    </div>
  )
}

export default AccessibilityLists
