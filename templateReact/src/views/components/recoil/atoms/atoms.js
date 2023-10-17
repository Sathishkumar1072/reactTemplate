/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  It contains recoil's atoms files to manage the state value(s)
  atom  : This is an recoil's default library to manage the global state values, This atom is an function and it recieve parameter as object with containing key default values.
  key   : This is an unique key to access this atom function from component.
*/

import { atom } from 'recoil'

export const users = atom({
  key: 'users',
  default: ['John', 'Peter', 'Thomas', 'Edward', 'Hamin'],
})
export const selectedUser = atom({
  key: 'selectedUser',
  default: [],
})

export const CaseOfUsers = atom({
  key: 'CaseOfUsers',
  default: [
    { Name: 'John', CaseName: 'PCN Case', AmountOutStanding: 100 },
    { Name: 'Peter', CaseName: 'PCN Case', AmountOutStanding: 40 },
    { Name: 'Thomas', CaseName: 'PCN Case', AmountOutStanding: 500 },
    { Name: 'Edward', CaseName: 'PCN Case', AmountOutStanding: 70 },
    { Name: 'Hamin', CaseName: 'PCN Case', AmountOutStanding: 300 },
  ],
})
