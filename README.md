# Activity Booking API

A RESTful API backend for a Basic Activity Booking App 
## Activity search in db is done with the help of object ids here's the list of all the activities with ids 

##Cricket - OID = 681bb4f327f87bf9b1c9cb71 

##Football- OID = 681bb4f327f87bf9b1c9cb72

##Movie -   OID = 681bb4f327f87bf9b1c9cb73

##Yoga-     OID = 681bb4f327f87bf9b1c9cb74

##Zumba     OID = 681bb4f327f87bf9b1c9cb75

## API Endpoints

### Authentication
- **Register User**: `POST /api/auth/register`
  - Required fields: name, email, phoneNumber, password
- **Login User**: `POST /api/auth/login`
  - Required fields: email, password
  - Returns: JWT token

### Activities
- **List Activities**: `GET /api/activities`
  - Public endpoint
  - Returns: List of all activities
- **Get Single Activity**: `GET /api/activities/:id`
  - Public endpoint
  - Returns: Single activity details


### Bookings
- **Book an Activity**: `POST /api/bookings`
  - Protected endpoint (requires authentication)
  - Required fields: activityId
- **Get My Bookings**: `GET /api/bookings/me`
  - Protected endpoint (requires authentication)
  - Returns: List of all activities booked by the logged-in user

## Features

- **User Authentication**: Register and login with JWT token generation
- **Activity Management**: List available activities with details
- **Booking System**: Users can book activities and view their bookings
- **Secure API**: Protected routes using JWT authentication
- **Data Validation**: Input validation using express-validator
- **Password Security**: Password hashing using bcrypt

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT Token-based authentication
- **Validation**: express-validator
- **Password Security**: bcryptjs

## Getting Started

### Installation


1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=Your_mongodb_connection_string
   JWT_SECRET=Your_secret_key
   JWT_EXPIRE=30d
   ```

3. Start the server:
   ```
   npm start
   ```
   
   For development with auto-restart:
   ```
   npm run dev
   ```

## Testing the API

A Postman collection is included for testing all API endpoints. Import the collection into Postman to get started.
