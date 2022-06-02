# Neighborhood Exchange - Flatiron School Phase 4 Project
<br />  

## Description

This app is a neighborhood tool sharing platform.  With this app, rather than buying a tool that would be used infrequently, a user can sign up and view available tools from neighbors.  The user can then borrow the tool from the neighbor directly through the app.

The goal of the app is to reduce waste, save money, and promote community mindedness amongst neighbors.

The app was completed as the Flatiron School Phase 4 project, over approximately one week.

<br />  

## Technologies Used

- React
- React Router
- React Bootstrap
- Ruby on Rails
- Postgresql
- Heroku

The App is deployed on Heroku and available here: https://neighborhood-exchange.herokuapp.com/

<br />  

## Walkthru

Upon visiting the site, a user is prompted to log in or sign up.  Once logged in, the app displays a list of cards showing the tools that the community has listed to borrow.  The User can get details on the tools and then borrow the tool, which will bring them to the "My Rentals" area, where tools that they have either borrowed or lent out are shown.  Tools can be returned from this area.  In the "My Tools" section, users manage the tools they have listed on the site for sharing.  A tool can be added, edited, or deleted from the site.

<br />  

## Setup

If you would like to play with this project on your machine, start by **cloning** the project template repository and removing the remote:

```console
$ git clone git@github.com:readlang/neighborhood-exchange.git
$ cd neighborhood-exchange
$ git remote rm origin
```

When you're ready to start playing with the code, run:

```sh
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

<br />

**Thank you for your interest in this project!**
