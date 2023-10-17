/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

import React, { useEffect } from 'react'
import { Grid, TextField } from '@mui/material'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined'
import PanToolIcon from '@mui/icons-material/PanTool'
import MyLocationIcon from '@mui/icons-material/MyLocation'
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan'
import TransformIcon from '@mui/icons-material/Transform'
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined'
import WallpaperOutlinedIcon from '@mui/icons-material/WallpaperOutlined'
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined'
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined'
import { Autocomplete } from '@material-ui/lab'
import FFAutocomplete from '../../../components/base/FFAutocomplete/FFAutocomplete'
// import FFSelect from '../../../components/base/FFSelect/FFSelect'
const Orientalprofiles = ({
  contentadjustment,
  selectedoption,
  contentadjustmentvalue,
  urllinkhandler,
}) => {
  const usefulllinks = []
  const aelements = document.getElementsByTagName('a')
  for (let i = 0; i < aelements?.length; i++) {
    usefulllinks.push({
      Id: i,
      labelvalue: aelements[i].href,
      label: aelements[i].innerText,
    })
  }

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
    <div className="accessibilitymainpagediv orientadjust">
      <div className="pageheader">Oriental Adjustments</div>
      <div className="mainheader">
        <div className="pagecontent">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.mutesound &&
                  selectedoption.mutesound.selectedelementvalue &&
                  'active'
                }`}
                id="mutesound"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <VolumeOffOutlinedIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'mutesound', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) => onclickiconmenu('textselect', 'mutesound', e)}
                >
                  {' '}
                  Mute Sounds{' '}
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.hideimages &&
                  selectedoption.hideimages.selectedelementvalue &&
                  'active'
                }`}
                id="hideimages"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <WallpaperOutlinedIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'hideimages', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'hideimages', e)
                  }
                >
                  {' '}
                  Hide Images{' '}
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.readguide &&
                  selectedoption.readguide.selectedelementvalue &&
                  'active'
                }`}
                id="readguide"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <MenuBookIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'readguide', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) => onclickiconmenu('textselect', 'readguide', e)}
                >
                  Reading Guide
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.stopanimate &&
                  selectedoption.stopanimate.selectedelementvalue &&
                  'active'
                }`}
                id="stopanimate"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <OfflineBoltOutlinedIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'stopanimate', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'stopanimate', e)
                  }
                >
                  {' '}
                  Stop Animations{' '}
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.readmask &&
                  selectedoption.readmask.selectedelementvalue &&
                  'active'
                }`}
                id="readmask"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <TransformIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'readmask', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) => onclickiconmenu('textselect', 'readmask', e)}
                >
                  {' '}
                  Reading Mask{' '}
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.highlighthover &&
                  selectedoption.highlighthover.selectedelementvalue &&
                  'active'
                }`}
                id="highlighthover"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <SettingsOverscanIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'highlighthover', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'highlighthover', e)
                  }
                >
                  {' '}
                  Highlight Hover{' '}
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.highlightfocus &&
                  selectedoption.highlightfocus.selectedelementvalue &&
                  'active'
                }`}
                id="highlightfocus"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <MyLocationIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'highlightfocus', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'highlightfocus', e)
                  }
                >
                  {' '}
                  Highlight Focus{' '}
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.bigcursorblack &&
                  selectedoption.bigcursorblack.selectedelementvalue &&
                  'active'
                }`}
                id="bigcursorblack"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <PanToolIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'bigcursorblack', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'bigcursorblack', e)
                  }
                >
                  {' '}
                  Big Black Cursor{' '}
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.bigcursorwhite &&
                  selectedoption.bigcursorwhite.selectedelementvalue &&
                  'active'
                }`}
                id="bigcursorwhite"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <PanToolOutlinedIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'bigcursorwhite', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'bigcursorwhite', e)
                  }
                >
                  {' '}
                  Big White Cursor{' '}
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Orientalprofiles
