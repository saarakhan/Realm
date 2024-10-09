# Realm Blogging Website

A full-stack blogging platform built with **ReactJS** on the frontend and a **Node.js/Express** backend with **MongoDB** for database management. The platform supports CRUD operations for posts and user authentication.

## Features
- User Authentication (Register/Login)
- Create, Read, Update, and Delete blog posts
- Commenting system
- Responsive design with modern UI
- RESTful API for blog management

## Tech Stack
- **Frontend**: ReactJS, Axios for HTTP requests
- **Backend**: Node.js, Express, MongoDB
- **Database**: MongoDB (Mongoose for schema)
- **Styling**: CSS

## Folder Structure

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

