A POC fullstack app that uses Github's API to fetch a user's profile by entering their real username and then allows for some basic social interactivity features to play with such as like, dislike and match other users. In order to be able to view and interact with other users, you need first to populate the app database by logging in with their Github usernames (no authentication required).

## How To Use

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/recieire/Tindev

# Go into the repository
$ cd Tindev

# Install dependencies for the backend
$ cd backend
$ yarn install

# Run the backend server
$ yarn dev

# Install dependencies for the frontend and run the server
$ cd frontend
$ yarn install
$ yarn start

# Install dependencies for the mobile
$ cd mobile/tindev
$ yarn install

# Start React Native Server
$ react-native start

# Run the app (iOS)
$ react-native run-ios

# Run the app (Android)
$ react-native run-android
```