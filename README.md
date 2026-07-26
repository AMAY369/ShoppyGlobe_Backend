# ShoppyGlobe Backend

REST API for the ShoppyGlobe e-commerce application, built with Node.js, Express and MongoDB. It handles user registration and login with JWT authentication, product management, and shopping cart operations.

The React storefront that consumes this API lives in [ShoppyGlobe-E-commerce-Application](https://github.com/AMAY369/ShoppyGlobe-E-commerce-Application).

## Features

- User registration and login with JWT authentication
- Product management with full CRUD
- Shopping cart: add, update quantity, remove
- Input validation and consistent error handling
- Protected routes via auth middleware

## Tech Stack

Node.js, Express, MongoDB, Mongoose, JWT, bcrypt

## Getting Started

### Prerequisites

- Node.js 18 or later
- A MongoDB connection string

### Setup

```sh
git clone https://github.com/AMAY369/ShoppyGlobe_Backend.git
cd ShoppyGlobe_Backend
npm install
```

Create a `.env` file in the project root:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
```

Start the server:

```sh
npm start
```

The API is served from `http://localhost:3000/api`.

## API Reference

Base URL: `http://localhost:3000/api`

### Authentication

| Method | Endpoint | Description | Auth |
| :--- | :--- | :--- | :--- |
| `POST` | `/register` | Register a new user | No |
| `POST` | `/login` | Log in and receive a JWT | No |

### Products

| Method | Endpoint | Description | Auth |
| :--- | :--- | :--- | :--- |
| `GET` | `/products` | List all products | No |
| `GET` | `/products/:id` | Get a single product by id | No |

### Cart

| Method | Endpoint | Description | Auth |
| :--- | :--- | :--- | :--- |
| `POST` | `/cart` | Add a product to the cart | Yes |
| `PUT` | `/cart/:id` | Update the quantity of a cart item | Yes |
| `DELETE` | `/cart/:id` | Remove an item from the cart | Yes |

Protected routes expect the token in the request header:

```
Authorization: Bearer <your_jwt_token>
```

## Testing

The endpoints can be exercised with Postman or Thunder Client. Register a user first, log in to obtain a token, then use that token for the cart routes.

## License

MIT
