
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
# github-api-proxy
 
 The following API query the users from the GitHubApi using a express.js and node.js server, it shows the users details when selected on the frontend with React. 

Github User Search This is a web app that allows users to search for Github users and view their profiles and repositories details.

Prerequisites make sure you have the following installed:

    Node.js v18 or above
    NPM v9 or above
    Express
    Axios
    React (and all its dependencies)
    React Bootstrap

Installation

    Clone the repository:

    bash git clone https://github.com/your-github-username/github-user-search.git

Install the required packages in both frontend and api directories:

    cd frontend
    npm install
    Replace the TOKEN constant in api/server.js with your Github personal access token.(The token is already set only for the API use.)
    cd ../api
    npm install
    To search for a Github user, type the username in the search bar and click the search button.
    The user's profile will be displayed in a card.

Usage

    Start the server by running the following command inside the api directory: node server.js The server should start running at http://localhost:3000.

Start the React app by running the following command inside the frontend directory:

    npm start
    The app should open automatically in your default browser at http://localhost:3001.
    To search for a Github user, type the username in the search bar and click the search button.
    The user's profile will be displayed in a card.

License This project is licensed under the MIT License.
