/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

import React from 'react'
import { Grid } from '@mui/material'
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle'
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined'
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined'
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined'
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined'
import InvertColorsOffIcon from '@mui/icons-material/InvertColorsOff'
import FormatColorTextIcon from '@mui/icons-material/FormatColorText'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill'
import Colorpallet from './colorpalletevalue'

const Colorprofiles = ({
  contentadjustment,
  selectedoption,
  contentadjustmentvalue,
  coloronselect,
  resetoption,
}) => {
  function onclickiconmenu(selectelement, selectrecid, e) {
    e.preventDefault()
    const clickedelement = {}
    if (selectelement?.toString()?.toLowerCase() === 'iconselect') {
      clickedelement.selectedelementdata = {}
      clickedelement.selectedelementvalue =
        !e.currentTarget.parentElement.parentElement.parentElement.classList?.contains(
          'active'
        )
      clickedelement.selectedelementid = selectrecid
    } else {
      clickedelement.selectedelementdata = {}
      clickedelement.selectedelementvalue =
        !e.currentTarget.parentElement.classList?.contains('active')
      clickedelement.selectedelementid = selectrecid
    }
    contentadjustment(clickedelement)
  }

  return (
    <div className="accessibilitymainpagediv coloradjust">
      <div className="pageheader">Color Adjustments</div>
      <div className="mainheader">
        <div className="pagecontent">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.darkcontrast &&
                  selectedoption.darkcontrast.selectedelementvalue &&
                  'active'
                }`}
                id="darkcontrast"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <Brightness2OutlinedIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'darkcontrast', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'darkcontrast', e)
                  }
                >
                  {' '}
                  Dark Contrast{' '}
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.lightcontrast &&
                  selectedoption.lightcontrast.selectedelementvalue &&
                  'active'
                }`}
                id="lightcontrast"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <FlareOutlinedIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'lightcontrast', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'lightcontrast', e)
                  }
                >
                  {' '}
                  Light Contrast{' '}
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.highcontrast &&
                  selectedoption.highcontrast.selectedelementvalue &&
                  'active'
                }`}
                id="highcontrast"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <Brightness4OutlinedIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'highcontrast', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'highcontrast', e)
                  }
                >
                  {' '}
                  High Contrast{' '}
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.highsturate &&
                  selectedoption.highsturate.selectedelementvalue &&
                  'active'
                }`}
                id="highsturate"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <OpacityOutlinedIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'highsturate', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'highsturate', e)
                  }
                >
                  High Saturation
                </div>
              </div>
            </Grid>

            <Grid item xs={8}>
              <div className="controlcontainer">
                <div className="controltext">
                  <div className="icon-space">
                    <FormatColorTextIcon />
                  </div>
                  <div className="controltextarea">Adjust Font Color</div>
                </div>
                <div className="controlpage colorvalues">
                  <Colorpallet
                    coloronselect={coloronselect}
                    colorpage="fontcolor"
                    selectedoption={selectedoption}
                  />
                </div>
                <div
                  className="colorcancelaction"
                  onClick={(e) => resetoption('fontcolor')}
                >
                  Cancel
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.monochrome &&
                  selectedoption.monochrome.selectedelementvalue &&
                  'active'
                }`}
                id="monochrome"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <InvertColorsOutlinedIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'monochrome', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'monochrome', e)
                  }
                >
                  Monochrome
                </div>
              </div>
            </Grid>

            <Grid item xs={8}>
              <div className="controlcontainer">
                <div className="controltext">
                  <div className="icon-space">
                    <ColorLensIcon />
                  </div>
                  <div className="controltextarea">Adjust Title Font Color</div>
                </div>
                <div className="controlpage colorvalues">
                  <Colorpallet
                    coloronselect={coloronselect}
                    colorpage="titlefontcolor"
                    selectedoption={selectedoption}
                  />
                </div>
                <div
                  className="colorcancelaction"
                  onClick={(e) => resetoption('titlefontcolor')}
                >
                  Cancel
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.lowstaurate &&
                  selectedoption.lowstaurate.selectedelementvalue &&
                  'active'
                }`}
                id="lowstaurate"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <InvertColorsOffIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'lowstaurate', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'lowstaurate', e)
                  }
                >
                  Low Saturation
                </div>
              </div>
            </Grid>

            <Grid item xs={8}>
              <div className="controlcontainer">
                <div className="controltext">
                  <div className="icon-space">
                    <FormatColorFillIcon />
                  </div>
                  <div className="controltextarea">Adjust Background Color</div>
                </div>
                <div className="controlpage colorvalues">
                  <Colorpallet
                    coloronselect={coloronselect}
                    colorpage="bgcolor"
                    selectedoption={selectedoption}
                  />
                </div>
                <div
                  className="colorcancelaction"
                  onClick={(e) => resetoption('bgcolor')}
                >
                  Cancel
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Colorprofiles
