# HelpBook

## Project Description

Surveillance Camera Management System (Simulation) is an application developed with Node.js(Backend) and React(Frontend) and PostgreSQL(DB) for managing a simulated network of surveillance cameras in a building or facility.
< in this application instead of Cameras footage access codes, we have used some free video urls instead >

## Project Features

1. Using the assigned username and password, you can log in. Each user has access to different cameras.
2. User can see the Bigger-screen mode of any camera by clicking on the camera on the Dashboard page.
3. An alert will pop up in case any camera goes offline.
4. The application is designed to be fully responsive.

## Setup App

To setup the app,

- Fork and clone the repo.
- Navigate to client folder in command line and install dependecies with `npm install`.
- Navigate to server folder in command line and install dependecies with `npm install`.

## Setup Database

- Set a .env file using the .env.example provided in the server folder
- Run psql in the server directory using `psql -d <project name in .env> -U <username in .env>`
- Create tables in database using `\i <project path>/server/db/schema/<file name>.sql`
- Seed tables using `\i <project path>/server/db/seeds/<file name>.sql`

## Running The app

- Run the server using

```sh
npm run local
```

- Run the client using

```sh
npm start
```

## ScreenShots

!['Logging Page']()
_Logging Page_
!['Camera views with user3']()
_Camera views with user3_
!['Bigger screen mode']()
_Bigger screen mode_
!['Warning and reset button on user2 view']()
_Warning and reset button on user2 view_


## Project Stack

**Front-End:** React, Axios, HTML, SASS, Tailwind, JavaScript, Material UI, Stripe, JWT-decode

**Back-End:** Express, Node.js, PostgreSQL, JWT

## Dependencies

#### Client Dependencies

  - emotion/react^11.10.6
  - emotion/styled^11.10.6
  - material-ui/core^4.12.4
  - material-ui/icons^4.11.3
  - mui/icons-material^5.11.16
  - mui/material^5.12.1
  - mui/styles^5.12.0
  - testing-library/jest-dom^5.16.5
  - testing-library/user-event"^13.5.0
  - js-cookie^3.0.5
  - react^18.2.0
  - react-dom^18.2.0
  - react-router-dom^6.10.0
  - react-scripts5.0.1
  - sass^1.62.0
  - web-vitals^2.1.4

#### Server Dependencies

  - axios^1.3.6
  - bcrypt^5.1.0
  - body-parser^1.20.2
  - cookie-session^2.0.0
  - dotenv^16.0.3
  - ejs^3.1.9
  - express^4.18.2
  - jsonwebtoken^9.0.0
  - morgan^1.10.0
  - nodemon^2.0.22
  - pg^8.10.0
  - sass^1.62.0
 