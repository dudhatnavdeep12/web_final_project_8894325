# GITHUB Link: https://github.com/dudhatnavdeep12/web_final_project_8894325/
# E-Commerce Project (Electronics)

**Student Name**: Navdeep Dudhat
**Student Number**: 8894325
**Date**: 07-18-2024

### Technology Stack

**Frontend**: Angular  
**Backend**: Node.js with Express  
**Database**: MongoDB (Atlas)

### Project Setup

1. **Project Initialization**: Repository created on GitHub and cloned to local machine.I have two branch other than main. Please select frontend for `frontend` and backend for `backend`.
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
- `address` : String
- `amount` : Number
- `status` : String
- `created_at` : DateTime

 ### Frontend Setup

1. Download all the file from the Frontend branch.
2. now open it in vs code.
3. now open terminal and type `npm install` command(This will take 2-3 min).
4. To run the project type `ng serve` command

### Backend Setup
1. Download all the files from the Backend branch
2. now open it in vs code.
3. now open terminal and type `npm install` command.
4. now to run this app type `node app.js`.

### Notes

- The project is set up using Git and GitHub for version control.
- Further development will include implementing user interfaces for product listings, shopping cart, and checkout.
