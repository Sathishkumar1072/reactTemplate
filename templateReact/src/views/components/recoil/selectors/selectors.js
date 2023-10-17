/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  It contains recoil's selectors files to manage the function for update the state value(s)
  selector : This is an recoil's default library to manage the function to update the global state values, 
             This selector is an function and it recieve parameter as object with containing key, setter and getter function to update and retur values.
  key      : This is an unique key to access this atom function from component.
  get      : This is a function that evaluates the value for the derived state, 
             It may return either a value directly, an asynchronous Promise , a Loadable , or another atom or selector representing the same type.
  set      : Recoil manages atom and selector state changes to know when to notify components subscribing to that selector to re-render.
             If an object value of a selector is mutated directly it may bypass this and avoid properly notifying subscribing components.
*/

import { selector } from 'recoil'
import { selectedUser, CaseOfUsers } from '../atoms/atoms'

export const filterCaseSelector = selector({
  key: 'filterCaseSelector',
  get: ({ get }) => {
    const filteredUser = get(selectedUser)
    let filteredCase = []
    filteredCase = get(CaseOfUsers).filter((item) => {
      if (filteredUser.includes(item.Name)) return item
    })
    return filteredCase
  },
})
