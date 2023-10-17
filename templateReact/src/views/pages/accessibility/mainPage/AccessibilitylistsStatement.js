/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

import { Tooltip } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import React from 'react'
import './AccessibilitylistsStatement.css'

const AccessibilityStatement = ({ statementview }) => {
  return (
    <div
      className="ff-acb-statement modal fade container body-container in"
      id="accessibilityModal"
      tabIndex="-1"
      role="main"
      aria-labelledby="titleModal"
    >
      <button
        type="button"
        className="close ff-acb-header"
        onClick={(e) => statementview(false, 'btnstatementview', e)}
      >
        ×
      </button>
      <h1 className="modal-title" id="titleModal">
        Accessibility Statement
      </h1>
      <div className="modal-content" />
      <p>
        This accessibility statement applies to{' '}
        <a target="_blank" href={window.location.origin}>
          {' '}
          {window.location.origin}{' '}
        </a>
      </p>
      <p>
        This website is owned by Marston (Holdings) Ltd and managed on our
        behalf by Logic Valley. We want as many people as possible to be able to
        use this website. For example, that means you should be able to:
      </p>
      <ul>
        <li>change colours, contrast levels and fonts</li>
        <li>zoom in up to 300% without the text spilling off the screen</li>
        <li>navigate most of the website using just a keyboard</li>
        <li>navigate most of the website using speech recognition software</li>
        <li>
          listen to most of the website using a screen reader (including the
          most recent versions of JAWS, NVDA and VoiceOver)
        </li>
      </ul>
      <p>
        We’ve also made the website text as simple as possible to understand.
        AbilityNet has advice on making your device easier to use if you have a
        disability, their website is available at
        <a target="_blank" href="https://mcmw.abilitynet.org.uk/">
          {' '}
          https://mcmw.abilitynet.org.uk/
        </a>
      </p>
      <h2>How Accessible the Website is</h2>
      <p>As of our last review, there were no issues found.</p>
      <h2>What to do if you can’t access parts of this Website</h2>
      <p>
        If you need information on this website in a different format like
        accessible PDF, large print, easy read, audio recording or braille:
        Please e-mail
      </p>
      <ul>
        <li>
          <a target="_blank" href="mailto:communications@marstonholdings.co.uk">
            communications@marstonholdings.co.uk
          </a>
        </li>
      </ul>
      <p>We’ll consider your request and get back to you.</p>
      <h2>Reporting Accessibility problems with this website</h2>
      <p>
        {' '}
        We’re always looking to improve the accessibility of this website. If
        you find any problems not listed on this, page or think we’re not
        meeting accessibility requirements, contact:
        <a target="_blank" href=" mailto:communications@marstonholdings.co.uk">
          communications@marstonholdings.co.uk
        </a>
      </p>
      <h2>Enforcement procedure</h2>
      <p>
        The Equality and Human Rights Commission (EHRC) is responsible for
        enforcing the Public Sector Bodies (Websites and Mobile Applications)
        (No. 2) Accessibility Regulations 2018 (the ‘accessibility
        regulations’). If you’re not happy with how we respond to your
        complaint, contact the EASS at &nbsp;
        <a target="_blank" href="https://www.equalityadvisoryservice.com/">
          https://www.equalityadvisoryservice.com/
        </a>
      </p>
      <h2>Technical information about this website’s accessibility</h2>
      <p>
        Marston Holdings is committed to making its website accessible, in
        accordance with the Public Sector Bodies (Websites and Mobile
        Applications) (No. 2) Accessibility Regulations 2018.
      </p>
      <h2>Compliance Status</h2>
      <p>
        We believe this website is partially compliant with the Web Content
        Accessibility Guidelines version 2.1 AA standard, you can find more
        information about that here{' '}
        <a target="_blank" href="https://www.w3.org/TR/WCAG21/">
          https://www.w3.org/TR/WCAG21/
        </a>
      </p>
      <h2>Non-accessible content</h2>
      <p>
        The content listed below is non-accessible for the following reasons.
      </p>
      <ul>
        <li>None</li>
      </ul>
      <h2>Non-compliance with the accessibility regulations</h2>
      <ul>
        <li>None</li>
      </ul>
      <h2>What we’re doing to improve accessibility</h2>
      <p>We will review the site and this statement on an ongoing basis</p>
      <h2>Preparation of this accessibility statement</h2>
      <p>This statement was prepared on 19/07/2022.</p>
      <p>
        This website was last tested on 19/07/2022. The test was carried out
        using tools such as WAVE Web Accessibility Evaluation Tool.
      </p>
      <p>
        We tested sample pages, the pages selected were pages that we thought
        would be most commonly used by the users{' '}
      </p>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-default close-button"
          onClick={(e) => statementview(false, 'btnstatementview', e)}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default AccessibilityStatement
