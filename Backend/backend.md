# Help Center API

This project is a RESTful API that allows users to manage "Help Center" cards. These cards represent different sections of a help center, such as "Branches," "Manage Your Account," "Manage Billing," etc. The API supports creating, retrieving, and viewing specific cards.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v12.x or higher)
- [MongoDB](https://www.mongodb.com/) (Make sure MongoDB is running locally on your machine)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Vivekdokku/Help-Center-API-Assignment.git
cd Backend
```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
npm install
```

### 3. Setup Environment

Create a `.env` file in the root of the project directory and add the necessary environment variables, such as the MongoDB connection string.

```bash
# .env

PORT = 3000
```

Ensure that MongoDB is running locally. The API is configured to connect to MongoDB on `mongodb://localhost:27017/helpCenter`.

### 4. Running the Server

Start the server with the following command:

```bash
node server.js
```

The server should start and run on `http://localhost:3000`. You should see a message like:

```bash
Connected successfully to MongoDB server
Server is running on http://localhost:3000
```

### 5. Test the API

You can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the API.

#### Check if the Server is Running

```bash
GET http://localhost:3000/ping
```

This should return:

```json
"Server is running"
```

### API Endpoints

- **Create a Card**: `POST /cards`
  - Request Body: `{ "id": "unique-id", "title": "Card Title", "description": "Card Description" }`
  
- **Get All Cards**: `GET /cards`
  
- **Get a Specific Card by Title**: `GET /cards/:title`

### 6. Error Handling

The API includes basic error handling for cases such as accessing a non-existent card or validation errors. Error messages will be returned in JSON format with an appropriate HTTP status code.

## Project Structure

```bash
.
├── models
│   └── Card.js         # Mongoose schema for cards
├── node_modules        # Node.js dependencies
├── routes
│   └── cardRoutes.js   # Express routes for cards
├── .env                # Environment variables
├── .gitignore          # Git ignore file
├── package-lock.json   # Lockfile for npm dependencies
├── package.json        # Project dependencies and scripts
└── server.js           # Main server file
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
```

### Key Additions:
- **Environment Setup**: Instructions for setting up the `.env` file for environment variables.
- **Project Structure**: Updated to reflect your actual directory structure.

This file should give a clear guide on how to run your backend project locally.