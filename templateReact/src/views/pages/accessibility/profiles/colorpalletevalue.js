/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

import React from 'react'

const Colorpallet = ({ coloronselect, colorpage, selectedoption }) => {
  return (
    <>
      <div
        className={`colorpallet ${colorpage} ${
          selectedoption &&
          selectedoption[colorpage] &&
          selectedoption[colorpage].selectedelementvalue?.toString() ===
            '#0076B4' &&
          'active'
        }`}
        title="Change color to Blue"
        style={{ backgroundColor: '#0076B4' }}
        id="#0076B4"
        onClick={(e) => coloronselect(e)}
      />
      <div
        className={`colorpallet ${colorpage} ${
          selectedoption &&
          selectedoption[colorpage] &&
          selectedoption[colorpage].selectedelementvalue?.toString() ===
            '#7A549C' &&
          'active'
        }`}
        title="Change color to Purple"
        style={{ backgroundColor: '#7A549C' }}
        id="#7A549C"
        onClick={(e) => coloronselect(e)}
      />
      <div
        className={`colorpallet ${colorpage} ${
          selectedoption &&
          selectedoption[colorpage] &&
          selectedoption[colorpage].selectedelementvalue?.toString() ===
            '#C83733' &&
          'active'
        }`}
        title="Change color to Red"
        style={{ backgroundColor: '#C83733' }}
        id="#C83733"
        onClick={(e) => coloronselect(e)}
      />
      <div
        className={`colorpallet ${colorpage} ${
          selectedoption &&
          selectedoption[colorpage] &&
          selectedoption[colorpage].selectedelementvalue?.toString() ===
            '#D07021' &&
          'active'
        }`}
        title="Change color to Orange"
        style={{ backgroundColor: '#D07021' }}
        id="#D07021"
        onClick={(e) => coloronselect(e)}
      />
      <div
        className={`colorpallet ${colorpage} ${
          selectedoption &&
          selectedoption[colorpage] &&
          selectedoption[colorpage].selectedelementvalue?.toString() ===
            '#26999F' &&
          'active'
        }`}
        title="Change color to Teal"
        style={{ backgroundColor: '#26999F' }}
        id="#26999F"
        onClick={(e) => coloronselect(e)}
      />
      <div
        className={`colorpallet ${colorpage} ${
          selectedoption &&
          selectedoption[colorpage] &&
          selectedoption[colorpage].selectedelementvalue?.toString() ===
            '#4D7831' &&
          'active'
        }`}
        title="Change color to Green"
        style={{ backgroundColor: '#4D7831' }}
        id="#4D7831"
        onClick={(e) => coloronselect(e)}
      />
      <div
        className={`colorpallet ${colorpage} ${
          selectedoption &&
          selectedoption[colorpage] &&
          selectedoption[colorpage].selectedelementvalue?.toString() ===
            '#ffffff' &&
          'active'
        }`}
        title="Change color to White"
        style={{ backgroundColor: '#ffffff' }}
        id="#ffffff"
        onClick={(e) => coloronselect(e)}
      />
      <div
        className={`colorpallet ${colorpage} ${
          selectedoption &&
          selectedoption[colorpage] &&
          selectedoption[colorpage].selectedelementvalue?.toString() ===
            '#000000' &&
          'active'
        }`}
        title="Change color to Black"
        style={{ backgroundColor: '#000000' }}
        id="#000000"
        onClick={(e) => coloronselect(e)}
      />
    </>
  )
}

export default Colorpallet
