# API Endpoints:

## READ (HTTP method GET) at root endpoint /app/
- opens app

## CREATE a new user (HTTP method POST) at endpoint /app/new/
- takes in username, email, and password to create new entry in database
- used for login page

## READ a list of all users (HTTP method GET) at endpoint /app/users/
- entire database of users

## READ (HTTP method POST) at endpoint /app/auth
- takes in user input for username and password
- redirects to new game page if exists in database
- used for signin page

## READ a single user (HTTP method GET) at endpoint /app/user/:id
- takes user id and returns all information related 

## UPDATE a single user (HTTP method PATCH) at endpoint /app/update/user/:id
- takes user id, and new username, email and password
- updates new information in database

## DELETE a single user (HTTP method DELETE) at endpoint /app/delete/user/:id
- takes user id and removes information from database