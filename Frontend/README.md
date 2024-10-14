# Realme Blog App

Welcome to the Realme Blog App! This is a full-stack blogging platform that allows users to register, log in, create, update, and delete their own blog posts. Users can also upload images and read posts from other users. The application enforces user authentication, ensuring that only registered users can access certain features.

## Features

- **User Authentication**: 
  - Users can register and log in to access the platform.
  
- **Post Management**:
  - Create, update, and delete blog posts.
  - Users can only edit or delete their own posts.
  
- **Image Upload**: 
  - Users can upload images with their blog posts.

- **View Other Posts**: 
  - Registered users can read posts from other users.

- **Account Management**:
  - Users can update their account information.
  - Logout functionality for secure access.

## Project Structure

```bash
blogging-website/
├── backend/
│   ├── models/          # Mongoose models for blog posts and users
│   ├── routes/          # Express routes for posts and authentication
│   ├── controllers/     # Logic for handling API requests
│   └── server.js        # Entry point for backend server
├── frontend/
│   ├── src/
│   │   ├── components/  # React components for UI
│   │   ├── pages/       # Pages like Home, Post, Create, etc.
│   │   └── App.js       # Main React App component
└── README.md            # Project documentation

```
### Usage
- Register a new account or log in to access the application.
- Once logged in, you can create a new post, view other users' posts, and manage your account settings.
- Logout when you're done using the application.


