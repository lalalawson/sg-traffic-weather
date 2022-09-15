# SG Traffic & Weather App

This project provides a platform for users to view the current weather location and nearby traffic cameras (if any), based on the date and time selected.

## Tech Stack

The project is built with:

- ReactJS
- Ant Design

Deployed on:

- Heroku [(See project here)](https://sgtrafficweather.herokuapp.com/)[^1]

[^1]: Depending on when the app is being accessed remotely, heroku might be down (due to credit overuse or end of free period).

## Assumptions Made

- Since the Traffic API does not indicate location other than latlong, I decided to group images together by their nearest available town.
- Town information is collected together with the Weather API, and from there, pythagoras theorem was used to find the town with the minimum distance.

## Accessing the project locally

To run the the project on your local system, Node JS must be installed.
After which, if `yarn` was not previously installed on your system, do run `npm install -g yarn` before running the app.

Once yarn is installed, in the project directory, you can run the following commands in order:

### `yarn`

Initializes and download the node modules required on to your system.

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
