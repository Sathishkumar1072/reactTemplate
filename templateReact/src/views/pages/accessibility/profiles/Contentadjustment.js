/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

import React from 'react'
import { Grid } from '@mui/material'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle'
import FontDownloadIcon from '@mui/icons-material/FontDownload'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import LinkIcon from '@mui/icons-material/Link'
import TitleIcon from '@mui/icons-material/Title'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import TextRotateVerticalRoundedIcon from '@mui/icons-material/TextRotateVerticalRounded'
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded'
import TextRotationNoneRoundedIcon from '@mui/icons-material/TextRotationNoneRounded'

const Contentprofiles = ({
  contentadjustment,
  selectedoption,
  contentadjustmentvalue,
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
    <div className="accessibilitymainpagediv contentadjust">
      <div className="pageheader">Content Adjustments</div>
      <div className="mainheader">
        <div className="pagecontent">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <div className="controlcontainer">
                <div className="controltext">
                  <div className="icon-space">
                    <ZoomOutMapIcon />
                  </div>
                  <div className="controltextarea">Content Scalling</div>
                </div>
                <div className="controlpage">
                  <div className="controlvaluedown contentscale decrease">
                    <ArrowDropDownCircleIcon
                      id="contentscaledecrease"
                      className="contentscale decrease"
                      onClick={(e) => contentadjustmentvalue(e)}
                    />
                  </div>
                  <div id="contentscale" className="controlvaluepage">
                    {selectedoption &&
                    selectedoption.contentscale &&
                    selectedoption.contentscale.selectedelementvalue
                      ?.toString()
                      ?.toLowerCase() !== 'default' &&
                    selectedoption.contentscale.selectedelementvalue
                      ?.toString()
                      ?.toLowerCase() !== '0'
                      ? `${
                          selectedoption.contentscale.selectedelementvalue > 0
                            ? '+'
                            : ''
                        }${
                          selectedoption &&
                          selectedoption.contentscale &&
                          selectedoption.contentscale.selectedelementvalue
                        }%`
                      : 'Default'}
                  </div>
                  <div className="controlvalueup contentscale increase">
                    <ArrowDropDownCircleIcon
                      id="contentscaleincrease"
                      className="contentscale increase"
                      onClick={(e) => contentadjustmentvalue(e)}
                    />
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.readablefont &&
                  selectedoption.readablefont.selectedelementvalue &&
                  'active'
                }`}
                id="readablefont"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <FontDownloadIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'readablefont', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'readablefont', e)
                  }
                >
                  Readable font
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.highlighttitle &&
                  selectedoption.highlighttitle.selectedelementvalue &&
                  'active'
                }`}
                id="highlighttitle"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <TitleIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'highlighttitle', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'highlighttitle', e)
                  }
                >
                  {' '}
                  Highlight Titles{' '}
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.highlightlinks &&
                  selectedoption.highlightlinks.selectedelementvalue &&
                  'active'
                }`}
                id="highlightlinks"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <LinkIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'highlightlinks', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'highlightlinks', e)
                  }
                >
                  {' '}
                  Highlight Links{' '}
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.textmagnifier &&
                  selectedoption.textmagnifier.selectedelementvalue &&
                  'active'
                }`}
                id="textmagnifier"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <ZoomInIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'textmagnifier', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'textmagnifier', e)
                  }
                >
                  {' '}
                  Text Magnifier{' '}
                </div>
              </div>
            </Grid>

            <Grid item xs={8}>
              <div className="controlcontainer">
                <div className="controltext">
                  <div className="icon-space">
                    <TextFieldsIcon />
                  </div>
                  <div className="controltextarea">Adjust Font Sizing</div>
                </div>
                <div className="controlpage">
                  <div className="controlvaluedown fontsize decrease">
                    <ArrowDropDownCircleIcon
                      id="fontsizedecrease"
                      className="fontsize decrease"
                      onClick={(e) => contentadjustmentvalue(e)}
                    />
                  </div>
                  <div id="fontsize" className="controlvaluepage">
                    {selectedoption &&
                    selectedoption.fontsize &&
                    selectedoption &&
                    selectedoption.fontsize?.selectedelementvalue
                      ?.toString()
                      ?.toLowerCase() !== 'default' &&
                    selectedoption.fontsize?.selectedelementvalue
                      ?.toString()
                      ?.toLowerCase() !== '0'
                      ? `${
                          selectedoption.fontsize.selectedelementvalue > 0
                            ? '+'
                            : ''
                        }${selectedoption.fontsize.selectedelementvalue}%`
                      : 'Default'}
                  </div>
                  <div className="controlvalueup fontsize increase">
                    <ArrowDropDownCircleIcon
                      id="fontsizeincrease"
                      className="fontsize increase"
                      onClick={(e) => contentadjustmentvalue(e)}
                    />
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.aligntextcenter &&
                  selectedoption.aligntextcenter.selectedelementvalue &&
                  'active'
                }`}
                id="aligntextcenter"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <FormatAlignCenterIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'aligntextcenter', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'aligntextcenter', e)
                  }
                >
                  Align Center
                </div>
              </div>
            </Grid>

            <Grid item xs={8}>
              <div className="controlcontainer">
                <div className="controltext">
                  <div className="icon-space">
                    <UnfoldMoreRoundedIcon />
                  </div>
                  <div className="controltextarea">Adjust Line Height</div>
                </div>
                <div className="controlpage">
                  <div className="controlvaluedown lineheight decrease">
                    <ArrowDropDownCircleIcon
                      id="lineheightdecrease"
                      className="lineheight decrease"
                      onClick={(e) => contentadjustmentvalue(e)}
                    />
                  </div>
                  <div id="lineheight" className="controlvaluepage">
                    {selectedoption &&
                    selectedoption.lineheight &&
                    selectedoption.lineheight.selectedelementvalue
                      ?.toString()
                      ?.toLowerCase() !== 'default' &&
                    selectedoption.lineheight.selectedelementvalue
                      ?.toString()
                      ?.toLowerCase() !== '0'
                      ? `${
                          selectedoption.lineheight.selectedelementvalue > 0
                            ? '+'
                            : ''
                        }${
                          selectedoption &&
                          selectedoption.lineheight &&
                          selectedoption.lineheight.selectedelementvalue
                        }%`
                      : 'Default'}
                  </div>
                  <div className="controlvalueup lineheight increase">
                    <ArrowDropDownCircleIcon
                      id="lineheightincrease"
                      className="lineheight increase"
                      onClick={(e) => contentadjustmentvalue(e)}
                    />
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.aligntextleft &&
                  selectedoption.aligntextleft.selectedelementvalue &&
                  'active'
                }`}
                id="aligntextleft"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <FormatAlignLeftIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'aligntextleft', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'aligntextleft', e)
                  }
                >
                  Align Left
                </div>
              </div>
            </Grid>

            <Grid item xs={8}>
              <div className="controlcontainer">
                <div className="controltext">
                  <div className="icon-space">
                    <TextRotationNoneRoundedIcon />
                  </div>
                  <div className="controltextarea">Adjust Letter Spacing</div>
                </div>
                <div className="controlpage">
                  <div className="controlvaluedown letterspace decrease">
                    <ArrowDropDownCircleIcon
                      id="letterspacedecrease"
                      className="letterspace decrease"
                      onClick={(e) => contentadjustmentvalue(e)}
                    />
                  </div>
                  <div id="letterspace" className="controlvaluepage">
                    {selectedoption &&
                    selectedoption.letterspace &&
                    selectedoption.letterspace.selectedelementvalue
                      ?.toString()
                      ?.toLowerCase() !== 'default' &&
                    selectedoption.letterspace.selectedelementvalue
                      ?.toString()
                      ?.toLowerCase() !== '0'
                      ? `${
                          selectedoption.letterspace.selectedelementvalue > 0
                            ? '+'
                            : ''
                        }${
                          selectedoption &&
                          selectedoption.letterspace &&
                          selectedoption.letterspace.selectedelementvalue
                        }%`
                      : 'Default'}
                  </div>
                  <div className="controlvalueup letterspace increase">
                    <ArrowDropDownCircleIcon
                      id="letterspaceincrease"
                      className="letterspace increase"
                      onClick={(e) => contentadjustmentvalue(e)}
                    />
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div
                className={`controlcontainer onlytextcontrol ${
                  selectedoption &&
                  selectedoption.aligntextright &&
                  selectedoption.aligntextright.selectedelementvalue &&
                  'active'
                }`}
                id="aligntextright"
                onClick={(e) => contentadjustment(e)}
              >
                <div className="controltext">
                  <div className="#">
                    <FormatAlignRightIcon
                      onClick={(e) =>
                        onclickiconmenu('iconselect', 'aligntextright', e)
                      }
                    />
                  </div>
                </div>
                <div
                  className="controlpage"
                  onClick={(e) =>
                    onclickiconmenu('textselect', 'aligntextright', e)
                  }
                >
                  Align Right
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Contentprofiles
