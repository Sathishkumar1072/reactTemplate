/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

import React from 'react'
import ReactTooltip from 'react-tooltip'

const Tooltipdisplay = ({ idvalue, selectedelement }) => {
  return (
    <ReactTooltip id={idvalue} place="top" type="dark" aria-haspopup="true">
      <span>{selectedelement && selectedelement.innerText}</span>
      {/* <span>Testing</span> */}
    </ReactTooltip>
  )
}

export default Tooltipdisplay
