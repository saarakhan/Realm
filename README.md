# Realme Blog App

## Features

- User registration and login
- Create, update, and delete blog posts
- Upload images for posts
- View and read posts by other users
- User profile management

## Languages and Technologies

- **Frontend:** React, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Other:** Axios for API calls, Multer for file uploads

## Folder Structure
```bash
realm/
├── Backend/
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Middleware functions
│   ├── config/          # Configuration files (e.g., database)
│   ├── images/          # Uploaded images
│   ├── server.js        # Main server file
│   └── .env             # Environment variables
└── frontend/
    ├── src/
    │   ├── components/   # Reusable components
    │   ├── pages/        # Page components
    │   ├── context/      # Context API
    │   ├── App.js        # Main app component
    │   └── index.js      # Entry point
    └── public/           # Public assets (e.g., index.html)
```
