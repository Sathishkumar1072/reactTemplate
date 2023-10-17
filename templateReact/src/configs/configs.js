/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/* In this file we stored the API server's URL domain name.
 */

const appEnvironment = String(process.env.APP_ENV).toLowerCase()
function getServerConfiguration() {
  //Based on the environment (QA)
  if (appEnvironment === 'qa')
    return {
      CoreDataService: 'https://jsonplaceholderqa.typicode.com', //Need to change actual URL based on the project requirement.
    }
  return {
    CoreDataService: 'https://jsonplaceholder.typicode.com', //Need to change actual URL based on the project requirement.
  }
}
const serverConfig = getServerConfiguration()

export default { serverConfig }
