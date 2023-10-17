/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  In this file, we configure the menus name with URL
*/

import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Drawer as MUIDrawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material'
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  BrokenImage,
} from '@mui/icons-material'
import './MenuLayout.css'

function Reducer(state, action) {
  switch (action.type) {
    case 'set_Home':
      return {
        ...state,
        ...action.payload,
      }
    case 'set_Recoil':
      return {
        ...state,
        ...action.payload,
      }

    case 'Set_Drawer':
      return {
        ...state,
        ...action.payload,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const MenuLayout = (props, ref = {}) => {
  const location = useLocation()
  if (location.pathname === '/') {
    localStorage.setItem('navItemId', null)
  }

  const initialState = {
    openDrawer: true,
    openNavGroup: false,
    anchorEl: null,
    selectedNavsecItemId:
      null || localStorage.getItem('navItemId') == 'null'
        ? null
        : localStorage.getItem('navItemId'),
    menuAnchorEl: null,
  }

  const [state, dispatch] = React.useReducer(Reducer, initialState)

  const handleDrawerClose = () => {
    if (document.querySelector('div.actionbar + div#RuleDesigner')) {
      // It is only for rule designer to aviod overlapping of width
      const ruleDesignerEle = document.querySelector(
        'div.actionbar + div#RuleDesigner'
      )
      if (!state.openDrawer) {
        ruleDesignerEle.style.width = `calc(${ruleDesignerEle.offsetWidth}px - 15rem + 3.34rem)`
      } else {
        ruleDesignerEle.style.width = `calc(${ruleDesignerEle.offsetWidth}px - 3.34rem + 15rem)`
      }
    }
    dispatch({
      type: 'Set_Drawer',
      payload: {
        openDrawer: !state.openDrawer,
        anchorEl: null,
        openNavGroup: false,
      },
    })
  }

  return (
    <div className={`drawer drawer_${state.openDrawer ? 'open' : 'close'}`}>
      <MUIDrawer
        variant="permanent"
        className={`muidrawer_${state.openDrawer ? 'open' : 'close'}`}
        id="MUIDrawer_Menu"
      >
        <div className="drawer__toggle">
          <IconButton disableRipple onClick={handleDrawerClose}>
            <MenuIcon />
          </IconButton>
        </div>
        <div className="drawer_  v-scroll-auto">
          <List disablePadding className="drawer__mainmenu menu">
            <div className="StaticItem">
              <ListItem
                button
                component={Link}
                onClick={(event) => {
                  dispatch({
                    type: 'set_Home',
                    payload: {
                      selectedMenuId: 'Home',
                      selectedNavsecItemId: null,
                    },
                  })
                }}
                to="/"
                className={`item-height drawer__mainmenu_item ${
                  state.selectedMenuId?.toString()?.toLowerCase() == 'home' &&
                  (state.selectedNavsecItemId == null ||
                    state.selectedNavsecItemId === 'null')
                    ? 'active'
                    : ''
                }`}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText className="navsectionMain" primary="Home" />
              </ListItem>
              <ListItem
                button
                component={Link}
                onClick={(event) => {
                  dispatch({
                    type: 'set_Recoil',
                    payload: {
                      selectedMenuId: 'Recoil',
                      selectedNavsecItemId: null,
                    },
                  })
                }}
                to="/RecoilPage"
                className={`item-height drawer__mainmenu_item ${
                  state.selectedMenuId?.toString()?.toLowerCase() == 'recoil' &&
                  (state.selectedNavsecItemId == null ||
                    state.selectedNavsecItemId === 'null')
                    ? 'active'
                    : ''
                }`}
              >
                <ListItemIcon>
                  <BrokenImage />
                </ListItemIcon>
                <ListItemText className="navsectionMain" primary="Recoil" />
              </ListItem>
            </div>
          </List>
        </div>
        <Divider />
      </MUIDrawer>
    </div>
  )
}

export default React.forwardRef(MenuLayout)
