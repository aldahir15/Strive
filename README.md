Strive
======================

This is my Strava clone built using Ruby on Rails for backend with PostgreSQL for the database and ReactJS for the front end.


[![Strava](http://res.cloudinary.com/ddgt25kwb/image/upload/q_100/v1506660072/splash_orojgv.png)](https://strivingtodobetter.herokuapp.com/#/)

## Table of contents

- [Authentication](#Authentication)
- [Calendar](#Calendar)
- [Workouts](#Workouts)
- [Paths](#Paths)
- [Events](#Events)


## Authentication
Used BCrypt for complete password security, functional sign up, log in, and log out features.

## Calendar
The calendar was completely made by me by creating a calendar model which took in a user_id (used the current user's id when logged in), a day, month, and year (to bypass the differences of Ruby's date objects and those of JavaScript). Calendars have associations with Workouts and Events through foreign keys which allows me to create a full month view of the calendar which shows all of the events and workouts for specific days.
[![Strava](http://res.cloudinary.com/ddgt25kwb/image/upload/q_100/v1506648945/fpcalendar_vgvuzl.png)](https://strivingtodobetter.herokuapp.com/#/)

## Workouts
Workouts are created through passing user_id (which again can be made simply since we have a current user signed in when we create a workout), title, description, time, dayornight(AM or PM), and an optional path_id if that certain workout relies on a run/bike path.
[![Strava](http://res.cloudinary.com/ddgt25kwb/image/upload/q_100/v1506706718/Workout_show_g3duga.gif)](https://strivingtodobetter.herokuapp.com/#/)

## Paths
Using Google Maps API, I was able to create several views for maps, in my Explore page, certain workout show pages, and event show/create pages. For the Path creation, I used the Google Directions API as well which takes two or more location points (composed of latitude and longitude) and creates a path from the starting location to the ending.

[![Strava](https://thumbs.gfycat.com/ForkedBeautifulHornshark-size_restricted.gif)](https://strivingtodobetter.herokuapp.com/#/)

## Events
Events contain similar information as workouts but without time and with images. Creating Events also takes advantage of Google Maps API through using markers and using a marker to show the location of the event in the show page.
[![Strava](https://thumbs.gfycat.com/ObeseDifferentAcornbarnacle-size_restricted.gif)](https://strivingtodobetter.herokuapp.com/#/)
