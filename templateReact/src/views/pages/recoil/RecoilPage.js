/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  This Recoil base file to manage and access the global state values.
  In this file we access both atoms and selectors file from respective route.
*/

import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { users, selectedUser } from '../../components/recoil/atoms/atoms'
import { filterCaseSelector } from '../../components/recoil/selectors/selectors'
import './RecoilPage.css'

const RecoilPage = () => {
  const [checkedUser, setCheckedUser] = useRecoilState(selectedUser)
  const selectedCase = useRecoilValue(filterCaseSelector)
  const usersList = useRecoilValue(users)

  const changeUser = (event) => {
    if (event.target.checked) {
      setCheckedUser([...checkedUser, event.target.name])
    } else {
      let filterUser = []
      filterUser = checkedUser.filter((item) => {
        if (item !== event.target.name) return item
      })
      setCheckedUser(filterUser)
    }
  }

  const renderUserData = () => {
    return usersList.map((item) => {
      return (
        <div className="userDetail">
          <input
            type="checkbox"
            id={item}
            name={item}
            value={item}
            onChange={changeUser}
          />
          <label htmlFor={item}>{item}</label>
          <br />
        </div>
      )
    })
  }
  const renderCaseData = () => {
    return selectedCase.map((item) => {
      return (
        <>
          <div className="caseDetail">
            UserName : {item.Name} <br />
            CaseType : {item.CaseName}
            <br />
            Amount Outstanding : {item.AmountOutStanding}
          </div>
        </>
      )
    })
  }

  return (
    <>
      <div className="pageHeading"> Recoil Sample Page </div>
      {/* <p>{checkedUser.toString()}</p>
            <p>{JSON.stringify(selectedCase)}</p> */}
      <div className="parentContainer">
        <div className="userView">
          <p>User View </p>
          {renderUserData()}
        </div>
        <div className="caseView">
          <p>Case View </p>
          {renderCaseData()}
        </div>
      </div>
    </>
  )
}

export default RecoilPage
