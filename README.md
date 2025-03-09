# ShoppyGlobe Backend

## Project Overveiw
ShoppyGlobe is a backend API for an E-commerce application built using Node.js, Express, and MongoDB. This API allows to register users and login users, to manage products, CRUD operations on shopping cart, and implementation of user authentication through JWT (JSON Web Tokens).

## Features
- User registration and login with JWT authentication
- Product management (CRUD operations)
- Shopping cart functionality (add, update, delete products)
- Input validation and error handling

## Installation
- Clone the repositry in your local system
- run `npm install`
- Add your MONGODB_URI, PORT, and JSW_SECRET_KEY in .env file
- run `npm start` to run project
- Now you can perform operations using ThunderClient or PostMan on `http://localhost:3000/api`

## ThunderClient
- Use ThunderClient to register new user
- Login user with authentication
- Fetch all products or single product by its objectId
- Perform CRUD opertaions on cart
- Routes for performing all these operations given below-

## Routes
- register a new user (POST) - `http:localhost:3000/api/register`
- verify an existing user (POST) - `http:localhost:3000/api/login`
- add a new product (POST) - `http:localhost:3000/api/product`
- fetch all the products (GET) - `http:localhost:3000/api/products`
- Fetch a product by its id (GET) - `http:localhost:3000/api/products/67cc79591005f743a7f663e2`
- add item to the cart (POST) - `http:localhost:3000/api/cart/add-item`
- update the quantity of an item in cart(PUT) - `http:localhost:3000/api/update-item`
- delete an item from cart (DELETE) - `http:localhost:3000/api/delete-item`
- fetch cart (GET) - `http:localhost:3000/api/cart`

## Screenshots of tests
- [Screenshots of ThunderClient and MongoDB Compass](https://docs.google.com/document/d/1KVgILt6zuAP_6w0H-XHFsK6XsK5_E0sx/edit?usp=drive_link&ouid=108783048371498840209&rtpof=true&sd=true)


