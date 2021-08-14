# react-typeScript
This is an application for making a form to search terms and fetching data from an API. Redux-store is used to create a global state for the components. Redux-store contains actions (for searching terms, fetching data if the search is successfull, and errors if error occur), action creators which create the actions, and a reducer which changes the redux store state based on the actions received.

To run this app in react:
1) install node.js
2) in the directory run:
    1) npm install --save redux
    2) npm install axios –save
    3) npm install --save redux-thunk
3) in the directory run:
    1) nmp start
