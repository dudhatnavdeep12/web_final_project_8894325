# E-Commerce Project (Electronics)

**Student Name**: Navdeep Dudhat
**Student Number**: 8894325
**Date**: 07-18-2024

### Technology Stack

**Frontend**: Angular  
**Backend**: Node.js with Express  
**Database**: MongoDB (Atlas)

### Project Setup

1. **Project Initialization**: Repository created on GitHub and cloned to local machine.
2. **Frontend Setup**: Initialized Angular project.
3. **Backend Setup**: Initialized Node.js project with Express and connected to MongoDB (Atlas).

### Database Schema Design

**Products Schema (MongoDB)**
- `id`: Int
- `productname`: String
- `productdescription`: String
- `photo`: String
- `sellername`: String
- `stock` : Number
- `status` : String
- `price`: Number
- `created_at`: DateTime

**Users Schema (MongoDB)**
- `firstname` : String
- `lastname` : String
- `email` : String
- `mobileno` : Number
- `address` : String
- `username`: String
- `password`: String
- `role`: String


**Order Schema (MongoDB)**
- `id` : Number
- `productid` : Number
- `userid` : Number
- `delivery_add` : String
- `amount` : Number
- `status` : String
- `created_at` : DateTime

 ### Frontend Setup

1. Basic structure set up for Angular components, including directories for components and services.
2. State management planned to handle user sessions and cart data.

### Notes

- The project is set up using Git and GitHub for version control.
- Further development will include implementing user interfaces for product listings, shopping cart, and checkout.
