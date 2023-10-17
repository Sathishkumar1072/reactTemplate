/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

import React from 'react'
import { Switch } from '@mui/material'
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ViewStreamIcon from '@mui/icons-material/ViewStream'
import MyLocationIcon from '@mui/icons-material/MyLocation'
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab'
import WavesIcon from '@mui/icons-material/Waves'

const Accessibilityprofile = ({ accessprofile, selectedoption }) => {
  return (
    <div className="accessibilitymainpagediv">
      <div className="pageheader">
        Choose the right accessibility profile for you
      </div>
      <div className="mainheader">
        <div className="accessibilelistmain">
          <div
            className={`accessibiltiyselectionswitchmain ${
              selectedoption &&
              selectedoption.seizuresafe &&
              selectedoption.seizuresafe.selectedelementvalue
                ?.toString()
                ?.toLowerCase() === 'true'
                ? 'selected'
                : ''
            }`}
          >
            <div className="accessibiltiyselectionswitch">
              <label className="fileinput" htmlFor="seizuresafe">
                .
              </label>
              <Switch
                id="seizuresafe"
                className="accessibiltiyselectionswitchbox Seizure-Sage-Profile"
                size="medium"
                onChange={accessprofile}
                defaultChecked={
                  selectedoption &&
                  selectedoption.seizuresafe &&
                  selectedoption.seizuresafe.selectedelementvalue
                    ?.toString()
                    ?.toLowerCase() !== '0'
                    ? selectedoption.seizuresafe.selectedelementvalue
                    : false
                }
                checked={
                  selectedoption &&
                  selectedoption.seizuresafe &&
                  selectedoption.seizuresafe.selectedelementvalue
                    ?.toString()
                    ?.toLowerCase() !== '0'
                    ? selectedoption.seizuresafe.selectedelementvalue
                    : false
                }
              />
            </div>
            <div className="accessibiltiyselectionswitchtext">
              <div>Seizure Safe Profile</div>
              <div className="subfontpage">
                <span> Clear flashes & reduces color</span>
              </div>
            </div>
            <div className="accessibiltiyselectionswitchicon">
              <OfflineBoltOutlinedIcon />
            </div>
            <div
              className={`description ${
                selectedoption &&
                selectedoption.seizuresafe &&
                selectedoption.seizuresafe.selectedelementvalue
                  ?.toString()
                  ?.toLowerCase() !== '0' &&
                selectedoption.seizuresafe.selectedelementvalue
                  ? 'active'
                  : false
              }`}
            >
              <p>
                This profile enables epileptic and seizure prone users to browse
                safely by eliminating the risk of seizures that result from
                flashing or blinking animations and risky color combinations.
              </p>
            </div>
          </div>
          <hr className="hrlinestyle" />

          <div
            className={`accessibiltiyselectionswitchmain ${
              selectedoption &&
              selectedoption.visionimpaired &&
              selectedoption.visionimpaired.selectedelementvalue
                ?.toString()
                ?.toLowerCase() === 'true'
                ? 'selected'
                : ''
            }`}
          >
            <div className="accessibiltiyselectionswitch">
              <label className="fileinput" htmlFor="visionimpaired">
                .
              </label>
              <Switch
                id="visionimpaired"
                className="accessibiltiyselectionswitchbox Seizure-Sage-Profile"
                size="medium"
                onChange={accessprofile}
                defaultChecked={
                  selectedoption &&
                  selectedoption.visionimpaired &&
                  selectedoption.visionimpaired.selectedelementvalue
                    ?.toString()
                    ?.toLowerCase() !== '0'
                    ? selectedoption.visionimpaired.selectedelementvalue
                    : false
                }
                checked={
                  selectedoption &&
                  selectedoption.visionimpaired &&
                  selectedoption.visionimpaired.selectedelementvalue
                    ?.toString()
                    ?.toLowerCase() !== '0'
                    ? selectedoption.visionimpaired.selectedelementvalue
                    : false
                }
              />
            </div>
            <div className="accessibiltiyselectionswitchtext">
              <div>Vision Impaired Profile</div>
              <div className="subfontpage">
                <span> Enhances website's visuals</span>
              </div>
            </div>
            <div className="accessibiltiyselectionswitchicon">
              <VisibilityIcon />
            </div>
            <div
              className={`description ${
                selectedoption &&
                selectedoption.visionimpaired &&
                selectedoption.visionimpaired.selectedelementvalue
                  ?.toString()
                  ?.toLowerCase() !== '0' &&
                selectedoption.visionimpaired.selectedelementvalue
                  ? 'active'
                  : false
              }`}
            >
              <p>
                This profile adjusts the website, so that it is accessible to
                the majority of visual impairments such as Degrading Eyesight,
                Tunnel Vision, Cataract, Glaucoma, and others.
              </p>
            </div>
          </div>
          <hr className="hrlinestyle" />

          <div
            className={`accessibiltiyselectionswitchmain ${
              selectedoption &&
              selectedoption.adhdfriendly &&
              selectedoption.adhdfriendly.selectedelementvalue
                ?.toString()
                ?.toLowerCase() === 'true'
                ? 'selected'
                : ''
            }`}
          >
            <div className="accessibiltiyselectionswitch">
              <label className="fileinput" htmlFor="adhdfriendly">
                .
              </label>
              <Switch
                id="adhdfriendly"
                className="accessibiltiyselectionswitchbox Seizure-Sage-Profile"
                size="medium"
                onChange={accessprofile}
                defaultChecked={
                  selectedoption &&
                  selectedoption.adhdfriendly &&
                  selectedoption.adhdfriendly.selectedelementvalue
                    ?.toString()
                    ?.toLowerCase() !== '0'
                    ? selectedoption.adhdfriendly.selectedelementvalue
                    : false
                }
                checked={
                  selectedoption &&
                  selectedoption.adhdfriendly &&
                  selectedoption.adhdfriendly.selectedelementvalue
                    ?.toString()
                    ?.toLowerCase() !== '0'
                    ? selectedoption.adhdfriendly.selectedelementvalue
                    : false
                }
              />
            </div>
            <div className="accessibiltiyselectionswitchtext">
              <div>ADHD Friendly Profile</div>
              <div className="subfontpage">
                <span> More focus & fewer distractions</span>
              </div>
            </div>
            <div className="accessibiltiyselectionswitchicon">
              <ViewStreamIcon />
            </div>
            <div
              className={`description ${
                selectedoption &&
                selectedoption.adhdfriendly &&
                selectedoption.adhdfriendly.selectedelementvalue
                  ?.toString()
                  ?.toLowerCase() !== '0' &&
                selectedoption.adhdfriendly.selectedelementvalue
                  ? 'active'
                  : false
              }`}
            >
              <p>
                This profile significantly reduces distractions, to help people
                with ADHD and Neurodevelopmental disorders browse, read, and
                focus on the essential elements of the website more easily.
              </p>
            </div>
          </div>
          <hr className="hrlinestyle" />

          <div
            className={`accessibiltiyselectionswitchmain ${
              selectedoption &&
              selectedoption.cognitivedisability &&
              selectedoption.cognitivedisability.selectedelementvalue
                ?.toString()
                ?.toLowerCase() === 'true'
                ? 'selected'
                : ''
            }`}
          >
            <div className="accessibiltiyselectionswitch">
              <label className="fileinput" htmlFor="cognitivedisability">
                .
              </label>
              <Switch
                id="cognitivedisability"
                className="accessibiltiyselectionswitchbox Seizure-Sage-Profile"
                size="medium"
                onChange={accessprofile}
                defaultChecked={
                  selectedoption &&
                  selectedoption.cognitivedisability &&
                  selectedoption.cognitivedisability.selectedelementvalue
                    ?.toString()
                    ?.toLowerCase() !== '0'
                    ? selectedoption.cognitivedisability.selectedelementvalue
                    : false
                }
                checked={
                  selectedoption &&
                  selectedoption.cognitivedisability &&
                  selectedoption.cognitivedisability.selectedelementvalue
                    ?.toString()
                    ?.toLowerCase() !== '0'
                    ? selectedoption.cognitivedisability.selectedelementvalue
                    : false
                }
              />
            </div>
            <div className="accessibiltiyselectionswitchtext">
              <div>Cognitive Disability Profile</div>
              <div className="subfontpage">
                <span> Assists with reading & focusing</span>
              </div>
            </div>
            <div className="accessibiltiyselectionswitchicon">
              <MyLocationIcon />
            </div>
            <div
              className={`description ${
                selectedoption &&
                selectedoption.cognitivedisability &&
                selectedoption.cognitivedisability.selectedelementvalue
                  ?.toString()
                  ?.toLowerCase() !== '0' &&
                selectedoption.cognitivedisability.selectedelementvalue
                  ? 'active'
                  : false
              }`}
            >
              <p>
                This profile provides various assistive features to help users
                with cognitive disabilities such as Autism, Dyslexia, CVA, and
                others, to focus on the essential elements of the website more
                easily.
              </p>
            </div>
          </div>
          <hr className="hrlinestyle" />

          <div
            className={`accessibiltiyselectionswitchmain ${
              selectedoption &&
              selectedoption.keyboardnavigator &&
              selectedoption.keyboardnavigator.selectedelementvalue
                ?.toString()
                ?.toLowerCase() === 'true'
                ? 'selected'
                : ''
            }`}
          >
            <div className="accessibiltiyselectionswitch">
              <label className="fileinput" htmlFor="keyboardnavigator">
                .
              </label>
              <Switch
                id="keyboardnavigator"
                className="accessibiltiyselectionswitchbox Seizure-Sage-Profile"
                size="medium"
                onChange={accessprofile}
                defaultChecked={
                  (selectedoption &&
                    selectedoption.blindusers &&
                    selectedoption.blindusers.selectedelementvalue
                      ?.toString()
                      ?.toLowerCase() !== '0') ||
                  (selectedoption &&
                    selectedoption.keyboardnavigator &&
                    selectedoption.keyboardnavigator.selectedelementvalue
                      ?.toString()
                      ?.toLowerCase() !== '0')
                    ? selectedoption.keyboardnavigator?.selectedelementvalue ||
                      selectedoption.blindusers?.selectedelementvalue
                    : false
                }
                checked={
                  (selectedoption &&
                    selectedoption.blindusers &&
                    selectedoption.blindusers.selectedelementvalue
                      ?.toString()
                      ?.toLowerCase() !== '0') ||
                  (selectedoption &&
                    selectedoption.keyboardnavigator &&
                    selectedoption.keyboardnavigator.selectedelementvalue
                      ?.toString()
                      ?.toLowerCase() !== '0')
                    ? selectedoption.keyboardnavigator?.selectedelementvalue ||
                      selectedoption.blindusers?.selectedelementvalue
                    : false
                }
              />
            </div>
            <div className="accessibiltiyselectionswitchtext">
              <div>Keyboard Navigation (Motor)</div>
              <div className="subfontpage">
                <span> Use website with the keyboard</span>
              </div>
            </div>
            <div className="accessibiltiyselectionswitchicon">
              <KeyboardTabIcon />
            </div>
            <div
              className={`description ${
                (selectedoption &&
                  selectedoption.blindusers &&
                  selectedoption.blindusers.selectedelementvalue
                    ?.toString()
                    ?.toLowerCase() !== '0' &&
                  selectedoption.blindusers.selectedelementvalue) ||
                (selectedoption &&
                  selectedoption.keyboardnavigator &&
                  selectedoption.keyboardnavigator.selectedelementvalue
                    ?.toString()
                    ?.toLowerCase() !== '0' &&
                  selectedoption.keyboardnavigator.selectedelementvalue)
                  ? 'active'
                  : false
              }`}
            >
              <p>
                This profile enables motor-impaired persons to operate the
                website using the keyboard Tab, Shift+Tab, and the Enter keys.
                Users can also use shortcuts such as “M” (menus), “H”
                (headings), “F” (forms), “B” (buttons), and “G” (graphics) to
                jump to specific elements.
              </p>
            </div>
          </div>
          <hr className="hrlinestyle" />

          <div
            className={`accessibiltiyselectionswitchmain ${
              selectedoption &&
              selectedoption.blindusers &&
              selectedoption.blindusers.selectedelementvalue
                ?.toString()
                ?.toLowerCase() === 'true'
                ? 'selected'
                : ''
            }`}
          >
            <div className="accessibiltiyselectionswitch">
              <label className="fileinput" htmlFor="blindusers">
                .
              </label>
              <Switch
                id="blindusers"
                className="accessibiltiyselectionswitchbox Seizure-Sage-Profile"
                size="medium"
                onChange={accessprofile}
                defaultChecked={
                  (selectedoption &&
                    selectedoption.blindusers &&
                    selectedoption.blindusers.selectedelementvalue
                      ?.toString()
                      ?.toLowerCase() !== '0') ||
                  (selectedoption &&
                    selectedoption.keyboardnavigator &&
                    selectedoption.keyboardnavigator.selectedelementvalue
                      ?.toString()
                      ?.toLowerCase() !== '0')
                    ? selectedoption.blindusers?.selectedelementvalue ||
                      selectedoption.keyboardnavigator?.selectedelementvalue
                    : false
                }
                checked={
                  (selectedoption &&
                    selectedoption.blindusers &&
                    selectedoption.blindusers.selectedelementvalue
                      ?.toString()
                      ?.toLowerCase() !== '0') ||
                  (selectedoption &&
                    selectedoption.keyboardnavigator &&
                    selectedoption.keyboardnavigator.selectedelementvalue
                      ?.toString()
                      ?.toLowerCase() !== '0')
                    ? selectedoption.blindusers?.selectedelementvalue ||
                      selectedoption.keyboardnavigator?.selectedelementvalue
                    : false
                }
              />
            </div>
            <div className="accessibiltiyselectionswitchtext">
              <div>Blind Users (Screen Reader)</div>
              <div className="subfontpage">
                <span> Optimize website for screen-readers</span>
              </div>
            </div>
            <div className="accessibiltiyselectionswitchicon">
              <WavesIcon />
            </div>
            <div
              className={`description ${
                (selectedoption &&
                  selectedoption.blindusers &&
                  selectedoption.blindusers.selectedelementvalue
                    ?.toString()
                    ?.toLowerCase() !== '0' &&
                  selectedoption.blindusers.selectedelementvalue) ||
                (selectedoption &&
                  selectedoption.keyboardnavigator &&
                  selectedoption.keyboardnavigator.selectedelementvalue
                    ?.toString()
                    ?.toLowerCase() !== '0' &&
                  selectedoption.keyboardnavigator.selectedelementvalue)
                  ? 'active'
                  : false
              }`}
            >
              <p>
                This profile adjusts the website to be compatible with
                screen-readers such as JAWS, NVDA, VoiceOver, and TalkBack. A
                screen-reader is software that is installed on the blind user’s
                computer and smartphone, and websites should ensure
                compatibility with it.
              </p>
            </div>
          </div>
          <hr className="hrlinestyle" />
        </div>
      </div>
    </div>
  )
}

export default Accessibilityprofile
