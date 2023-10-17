/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  This file used to store the API urls thourgh the application in JSON object format
  EX: https://jsonplaceholderqa.typicode.com/api/GetHomeData
*/

const APIEndPoints = {
  GetHomeDetail: {
    url: '/api/GetHomeData',
    method: 'get',
    methodname: 'GetHomeData',
  },
}

export default APIEndPoints
