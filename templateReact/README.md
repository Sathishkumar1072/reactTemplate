# Introduction

1. Node version ^18.12.1
2. This is the boilerplate code for react application development.
3. Tech Stack.
   3.1. React functional component.
   3.2. MUI ui framework.
   3.3. Css Modules.
   3.4. Used webpack for module bundler.
   3.5. EsLint for code linting and prettier for code formating.
   3.6. Used babel to transpile the javascript code.
   3.7. Used react lazy for dynamic import of components.
   3.8. Used react error boundaries for handling in browser 
   3.9. Used Appinsight for error logging.
   3.10. Write unit testing using Jest framework.

4. Global state management via Recoil
   4.1. Recoil is a state management library for React, developed by Dave McCabe at Facebook.
   4.2. There are two core concepts in Recoil: atoms and selectors.
   4.3. An atom is a piece of state.
   4.4. We create an atom by defining a cache key and passing the default data.
   4.5. Components can consume atoms and subscribe to the changes to it. It’s similar to React’s useState.
   4.6. Selectors are used for derived data.
   4.7. It similar to atoms.
   4.8. Here we can consume atoms and other selectors. Also, it’s possible to perform async operations in selectors.
   4.9. The rest is the same as atoms. Your components can consume and subscribe to changes to them.

5. Folder structure
   5.1. src : This folder is the heart of React application. It contains JavaScript which needs to be processed by webpack and required folders like App, assests, configs, models, utils.
   5.2. app : It contains App Component and its style and unit test files, this is the main component in React which acts as a container for all other components.
   5.3. assest : It contains icon, images and static files which serve through the applcation.
   5.4. atoms : It contains recoil's atoms files to manage the state value(s)
   5.5. configs : It contains application configuration and user authentication configuration files
   5.6. selectoes : It contains recoils' selector files to manage the function to update the global state value(s)
   5.7. models : It contains API (Backend server) configuration and it definition
   5.8. utils : It contain common functionality files ike formating, convertion, mapping and logging.
   5.9. views : It contain all component (view pages), custom pages, route files and its style.

# Getting Started

Follow the below steps to install and run the project with specified labrary version.

1.  Installation process
    1.1. Install Yarn

    ```
    npm install --global yarn

    or

     npm install --g yarn

    ```

    1.2. Use below command to check whether yarn have installed and working.

    ```
    yarn --version

    ```

        1.2.1. If you did not get the version details and yarn command not found error. Try setting yarn bin in environment variable path as mentioned in below link.

        https://stackoverflow.com/questions/40317578/yarn-global-command-not-working

    1.3. Once Yarn installed successfully, run below command to install all other packages.

    ```
    yarn install

    ```
    1.4 Execute command "yarn test" for unit test. (run this command before code pushed to your repo)

    1.5 Build & run the application in local machine use below commend
    ```
    yarn dev

    ```

2.  Latest releases
    2.1. Verison 1.0.0

3.  API references
    3.1. Axios library was used to make API call
    3.2. All API requests require the access token / autherization key in the Authorization header.
    3.3. This accesstoken was get from server when you are login sucessfully.
    3.4. Alternatively, You may provide Autherization key to access the API. Refer below mentioned sample API

        Ex: https://jsonplaceholderqa.typicode.com/api/GetHomeData

    3.5. Response:
    Many API endpoints return the JSON representation of the resources created or edited. However, if an invalid request is submitted, or some other error occurs, Gophish returns a JSON response in the following format:

          Ex:
            {
            "message" : string,
            "success" : bool,
            "data" : string
            }

        The message attribute contains a message commonly used to indicate errors or, in the case of deleting a resource, success that the resource was properly deleted.
        The success attribute describes if the transaction was successful or not.
        The data attribute contains any other metadata associated with the response. This will be an escaped string containing JSON data.

    3.6. Status Codes
    Below mentioned sample status code which we recieved from API

        Status Code   Description
        200             OK
        201             CREATED
        400             BAD REQUEST
        404             NOT FOUND
        500             INTERNAL SERVER ERROR

        100 – 199       Informational responses
        200 – 299       Successful responses
        300 – 399       Redirection messages
        400 – 499       Client error responses
        500 – 599       Server error responses

